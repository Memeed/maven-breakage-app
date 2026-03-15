"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { libraryVersions, breakingChanges, libraries } from "@/data/mockData";
import type { Library, BreakingChange } from "@/types/models";

function AnalysisContent() {
  const params = useSearchParams();
  const libraryId = Number(params.get("library"));

  const library = libraries.find((l: Library) => l.id === libraryId);

  const versions = libraryVersions[libraryId]?.versions || [];

  const [selectedVersionId, setSelectedVersionId] = useState(
    versions[versions.length - 1]?.versionId || 0,
  );

  const analysis = breakingChanges[`${libraryId}-${selectedVersionId}`];
  const changes = analysis?.breakingChanges || [];

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-2 tracking-tight">
        Breaking Changes Analysis
      </h1>

      <div className="mb-6">
        <strong>Library:</strong> {library?.artifactId}
      </div>

      <select
        value={selectedVersionId}
        onChange={(e) => setSelectedVersionId(Number(e.target.value))}
        className="border p-2 mb-6"
      >
        {versions.map((v) => (
          <option key={v.versionId} value={v.versionId}>
            {v.version}
          </option>
        ))}
      </select>

      <div className="space-y-3">
        {changes.length === 0 ? (
          <div>No breaking changes detected</div>
        ) : (
          changes.map((change: BreakingChange, i) => (
            <div key={i} className="border p-3 rounded">
              <div>{change.type}</div>
              <div>{change.class}</div>
              <div>{change.method}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default function AnalysisPage() {
  return (
    <Suspense fallback={<div>Loading analysis...</div>}>
      <AnalysisContent />
    </Suspense>
  );
}
