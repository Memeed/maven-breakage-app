"use client";

import { useSearchParams } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import { versions, breakingChanges } from "@/data/mockData";

// Add a type for breakingChanges to allow string indexing
type BreakingChangesType = {
  [library: string]: {
    [version: string]: string[];
  };
};

// Add a type assertion to allow string indexing
type VersionsType = { [key: string]: string[] };

export default function AnalysisPage() {
  const params = useSearchParams();
  const library = params.get("library") as string;

  const libraryVersions = (versions as VersionsType)[library] || [];

  return (
    <div>
      <Navbar />

      <div className="p-10 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Library: {library}</h2>

        <select className="border p-3 mb-8 w-full">
          {libraryVersions.map((v) => (
            <option key={v}>{v}</option>
          ))}
        </select>

        <div className="border p-6 rounded">
          <h3 className="font-bold mb-4">Breaking Changes</h3>

          <ul className="list-disc pl-5">
            {(breakingChanges as BreakingChangesType)[library]?.["4.12"]?.map(
              (c, i) => (
                <li key={i}>{c}</li>
              ),
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
