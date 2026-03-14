import Link from "next/link";

interface Props {
  id: string;
  name: string;
  lastVersion: string;
}

export default function LibraryCard({ id, name, lastVersion }: Props) {
  return (
    <Link href={`/analysis?library=${id}`}>
      <div className="border rounded p-4 hover:bg-gray-100 cursor-pointer">
        <h3 className="font-bold text-lg">{name}</h3>

        <p className="text-sm text-gray-500">Latest version: {lastVersion}</p>
      </div>
    </Link>
  );
}
