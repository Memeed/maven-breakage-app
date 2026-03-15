import Link from "next/link";
import { Library } from "@/types/models";

export default function LibraryCard({ id, groupId, artifactId }: Library) {
  return (
    <Link href={`/analysis?library=${id}`} className="block group">
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm group-hover:shadow-md transition-all duration-200 cursor-pointer hover:-translate-y-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold tracking-tight group-hover:text-black/90 transition-colors">
            {artifactId}
          </h3>
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-mono">
            {groupId}
          </span>
        </div>
      </div>
    </Link>
  );
}
