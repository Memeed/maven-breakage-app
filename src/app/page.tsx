"use client";
import LibraryCard from "@/components/ui/LibraryCard";
import { libraries } from "@/data/mockData";
import type { Library } from "@/types/models";
import Container from "@/components/ui/Container";
import { useState } from "react";

export default function Dashboard() {
  const [search, setSearch] = useState("");

  const filtered: Library[] = libraries.filter(
    (lib: Library) =>
      lib.artifactId.toLowerCase().includes(search.toLowerCase()) ||
      lib.groupId.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Container>
      <div className="flex flex-col items-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight text-center">
          Maven Breakage Monitoring
        </h1>
        <p className="text-gray-500 text-base mb-6 text-center">
          Monitor breaking changes in Maven libraries
        </p>
        <div className="relative w-full max-w-xl">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m2.1-5.4a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search libraries..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-12 pr-4 py-3 w-full rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-black/10 bg-white text-base transition"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
        {filtered.length === 0 ? (
          <div className="col-span-full text-center text-gray-400 py-10">
            No libraries found.
          </div>
        ) : (
          filtered.map((lib) => <LibraryCard key={lib.id} {...lib} />)
        )}
      </div>
    </Container>
  );
}
