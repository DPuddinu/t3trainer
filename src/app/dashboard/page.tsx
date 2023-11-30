
export default async function HomePage() {

  return (
    <div className="w-full flex flex-col gap-2">
      <Content />
    </div>
  );
}

function Content() {
  return <div className="p-2 grow">
    <h1 className="text-3xl font-mono">Dashboard</h1>
    <section className="flex gap-2">

    </section>
  </div>
}
