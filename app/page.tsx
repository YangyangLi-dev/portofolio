import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Yangyang Li</h1>
        <p className="text-xl">A senior software developer specializing in web application</p>
      </section>
      <section>
        <h2 className="text-3xl font-semibold mb-6">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        </div>
      </section>
    </main>
  );
}
