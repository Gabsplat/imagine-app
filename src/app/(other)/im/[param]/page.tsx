export default function Page({ params }: { params: { param: string } }) {
  return <div>My Post: {params.param}</div>;
}
