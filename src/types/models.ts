// Library returned by /api/libraries
export interface Library {
  id: number;
  groupId: string;
  artifactId: string;
}
// Response returned by GET /api/libraries
// The endpoint returns a list (array) of Library objects
export type LibrariesResponse = Library[];

// Version object inside /api/libraries/versions/{libraryId}
export interface Version {
  versionId: number;
  version: string;
  releaseDate: string;
}

// Response of /api/libraries/versions/{libraryId}
export interface LibraryVersionsResponse {
  libraryId: number;
  groupId: string;
  artifactId: string;
  versions: Version[];
}

// One breaking change
export interface BreakingChange {
  type: string;
  class: string;
  method: string;
}

// Response of /api/libraries/breaking-changes/{libraryId}/{versionId}
export interface BreakingChangesResponse {
  analysisId: number;
  libraryId: number;
  artifactId: string;
  analyzedVersion: string;
  previousVersion: string;
  breakingChanges: BreakingChange[];
}
