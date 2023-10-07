export default function Page({ params }: { params: { param: string } }) {
  return <div>Cat: {params.param}</div>;
}
