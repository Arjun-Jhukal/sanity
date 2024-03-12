import React from "react";
interface Props {
  type: string;
  query: string;
  category: string;
}
export default function SectionHeader({ type, query, category }: Props) {
  if (query && category) {
    return (
      <h1 className="heading3 self-start text-white-800">
        Search Result for '${query}' in <span className="capitalize">{category}</span>
      </h1>
    );
  }
  if (query) {
    return <h1 className="heading3 self-start text-white-800">Search Result for '${query}'</h1>;
  }
  if (category) {
    return <h1 className="heading3 self-start text-white-800">Search Result for '${category}'</h1>;
  }
  return <h1 className="heading3 self-start text-white-800">No Results</h1>;
}
