export const libraries = [
  { id: "junit", name: "JUnit", lastVersion: "5.0" },
  { id: "jest", name: "Jest", lastVersion: "28.0" },
];

export const versions = {
  junit: ["4.11", "4.12", "5.0"],
  jest: ["27.0", "28.0"],
};

export const breakingChanges = {
  junit: {
    "4.12": [
      "Removed method assertEquals",
      "Changed return type of TestRunner",
    ],
  },
};
