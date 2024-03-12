import SearchForm from "@/components/molecules";
import { getResources, getResourcesPlaylist } from "../../../../sanity/action";
import Filters from "@/components/organism/Filters";
import ResourceCard from "@/components/molecules/ResourceCard";
import SectionHeader from "@/components/molecules/SectionHeader";

interface Props {
  searchParams: { [key: string]: string | undefined };
}

export const revalidate = 900;
/* Since this is the server side page so this page will revalidate after every 15 minutes*/

const Page = async ({ searchParams }: Props) => {
  const resources = await getResources({
    query: searchParams?.query || "",
    category: searchParams?.category || "",
    page: "1",
  });

  const resourcesPlaylist = await getResourcesPlaylist();

  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
          <h1 className="sm:heading1 heading2 mb-6 text-center text-white">JavaScript Mastery Resources</h1>
        </div>
        <SearchForm />
      </section>

      <Filters />

      {(searchParams?.query || searchParams?.category) && (
        <section className="flex-center mt-6 w-full flex-col sm:mt-20">
          <SectionHeader type="Resources" query={searchParams?.query || ""} category={searchParams?.category || ""} />
          <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
            {resources?.length > 0 ? (
              resources.map((resource: any) => (
                <ResourceCard
                  key={resource._id}
                  title={resource.title}
                  id={resource._id}
                  image={resource.image}
                  downloadNumber={resource.views}
                  slug={resource._id}
                  downloadLink={resource.downloadLink}
                />
              ))
            ) : (
              <p className="body-regular text-white-400">No resources found</p>
            )}
          </div>
        </section>
      )}

      {resourcesPlaylist?.map((item: any) => (
        <section className="felx-center mt-6 w-full felx-col sm:mt-20" key={item._id}>
          <h1 className="heading3 self-start text-white-800">{item.title}</h1>

          <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
            {item.resources.map((resource: any) => (
              <ResourceCard
                key={resource._id}
                title={resource.title}
                id={resource._id}
                image={resource.image}
                downloadNumber={resource.views}
                slug={resource._id}
                downloadLink={resource.downloadLink}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default Page;
