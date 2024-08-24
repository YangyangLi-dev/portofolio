import { ProjectCard } from "@/components/ProjectCard";
import { ProjectList } from "@/components/ProjectList";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          I&apos;m a senior web developer specializing in modern web
          technologies.
        </h1>
        <p className="text-xl">
          A senior software developer specializing in web application
        </p>
      </section>
      <section>
        <h2 className="text-3xl font-semibold mb-6">My Projects</h2>
        <ProjectList/>
      </section>
    </main>
  );
}
