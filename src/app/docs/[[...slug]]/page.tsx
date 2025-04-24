import { notFound } from "next/navigation";
export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  console.log("slug: ", slug);
  if (slug?.length > 2) {
    return notFound();
  }
  return <h1>Docs Page</h1>;
}
