import Navbar from "@/components/ui/Navbar";
import LibraryCard from "@/components/ui/LibraryCard";
import { libraries } from "@/data/mockData";

export default function Dashboard() {
  return (
    <div>
      <Navbar />

      <div className="p-10 max-w-4xl mx-auto">
        <input
          type="text"
          placeholder="Search library..."
          className="border p-3 w-full mb-8"
        />

        <div className="grid grid-cols-2 gap-4">
          {libraries.map((lib) => (
            <LibraryCard
              key={lib.id}
              id={lib.id}
              name={lib.name}
              lastVersion={lib.lastVersion}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
