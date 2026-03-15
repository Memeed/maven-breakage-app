import {
  Library,
  LibraryVersionsResponse,
  BreakingChangesResponse,
} from "@/types/models";

// 300 libraries
export const libraries: Library[] = Array.from({ length: 300 }, (_, i) => ({
  id: i + 1,
  groupId: `pfa.example.group${i}`,
  artifactId: `test-library-${i}`,
}));

// versions for every library
export const libraryVersions: Record<number, LibraryVersionsResponse> =
  Object.fromEntries(
    libraries.map((lib) => [
      lib.id,
      {
        libraryId: lib.id,
        groupId: lib.groupId,
        artifactId: lib.artifactId,
        versions: Array.from({ length: 20 }, (_, i) => ({
          versionId: i + 1,
          version: `1.${i}.0`,
          releaseDate: "2023-01-01",
        })),
      },
    ]),
  );

// breaking changes for each library random versions
export const breakingChanges: Record<string, BreakingChangesResponse> =
  Object.fromEntries(
    libraries.flatMap((lib) => {
      const versions = libraryVersions[lib.id].versions;
      const lastVersion = versions[versions.length - 1];

      const entries: [string, BreakingChangesResponse][] = [];

      // Always add breaking changes for the latest version
      entries.push([
        `${lib.id}-${lastVersion.versionId}`,
        {
          analysisId: lib.id * 100 + lastVersion.versionId,
          libraryId: lib.id,
          artifactId: lib.artifactId,
          analyzedVersion: lastVersion.version,
          previousVersion: `1.${lastVersion.versionId - 1}.0`,
          breakingChanges: Array.from({ length: 8 }, (_, i) => ({
            type: "METHOD_REMOVED",
            class: `pfa.example.LatestClass${i}`,
            method: `latestMethod${i}`,
          })),
        },
      ]);

      // Randomly distribute breaking changes to earlier versions
      versions.slice(0, -1).forEach((v) => {
        if (Math.random() < 0.25) {
          entries.push([
            `${lib.id}-${v.versionId}`,
            {
              analysisId: lib.id * 100 + v.versionId,
              libraryId: lib.id,
              artifactId: lib.artifactId,
              analyzedVersion: v.version,
              previousVersion: `1.${v.versionId - 1}.0`,
              breakingChanges: Array.from({ length: 4 }, (_, i) => ({
                type: "METHOD_REMOVED",
                class: `pfa.example.Class${i}`,
                method: `method${i}`,
              })),
            },
          ]);
        }
      });

      return entries;
    }),
  );
