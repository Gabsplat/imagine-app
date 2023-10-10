export default function Page({ params }: { params: { catId: string } }) {
  return <p>Cat: {params.catId}</p>;
}
