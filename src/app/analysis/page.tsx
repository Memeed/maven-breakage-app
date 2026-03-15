"use client";
export const dynamic = "force-dynamic";

import { useSearchParams } from "next/navigation";
import { libraryVersions, breakingChanges, libraries } from "@/data/mockData";
import type { Library, BreakingChange } from "@/types/models";
import { useState } from "react";

export default function AnalysisPage() {
  const params = useSearchParams();
  const libraryId = Number(params.get("library"));

  const library = libraries.find((l: Library) => l.id === libraryId);

  const versionsResponse = libraryVersions[libraryId];
  const versions = versionsResponse?.versions || [];

  const [selectedVersionId, setSelectedVersionId] = useState<number>(
    versions[versions.length - 1]?.versionId || 0,
  );

  const analysis = breakingChanges[`${libraryId}-${selectedVersionId}`];
  const changes = analysis?.breakingChanges || [];

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-2 tracking-tight">
        Breaking Changes Analysis
      </h1>

      <div className="flex flex-col gap-1 mb-8">
        <span className="text-base text-gray-600">Library:</span>

        {library ? (
          <span className="font-semibold text-lg text-black/90">
            {library.artifactId}
            <span className="ml-2 text-xs text-gray-400">
              ({library.groupId})
            </span>
          </span>
        ) : (
          <span className="font-semibold text-lg text-black/90">
            {libraryId}
          </span>
        )}
      </div>

      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select version
        </label>

        <select
          className="w-full max-w-xs rounded-lg border border-gray-200 p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-black/10 bg-white text-base"
          value={selectedVersionId}
          onChange={(e) => setSelectedVersionId(Number(e.target.value))}
        >
          {versions.map((v) => (
            <option key={v.versionId} value={v.versionId}>
              {v.version}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-4">
        {changes.length === 0 ? (
          <div className="rounded-xl border border-gray-100 bg-gray-50 p-6 text-center text-gray-400 shadow-sm">
            No breaking changes detected
          </div>
        ) : (
          changes.map((change: BreakingChange, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="font-semibold text-red-600">{change.type}</div>
              <div className="text-gray-700">{change.class}</div>
              <div className="text-sm text-gray-500">{change.method}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
