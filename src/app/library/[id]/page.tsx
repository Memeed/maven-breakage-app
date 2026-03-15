import type { Library } from "@/types/models";

export async function generateStaticParams() {
  const libraries = await fetch("https://.../library").then((res) =>
    res.json(),
  );

  return libraries.map((library: Library) => ({
    id: String(library.id),
  }));
}

export default async function Library({ params }: { params: { id: string } }) {
  const library = params;
  // use `id` here
  // ...
}
