import { ProjectCard } from "./ProjectCard";

type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  githubUrl: string;
  liveUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Dish Dash",
    description: "Description of Project 1",
    imageUrl: "/images/project1.jpg",
    projectUrl: "/projects/project1",
    githubUrl: "https://github.com/YangyangLi-can/dishdash",
    liveUrl: "dishdash-prime.vercel.app",
  },
  {
    id: 2,
    title: "Hotel Prime",
    description: "Description of Project 2",
    imageUrl: "/images/project2.jpg",
    projectUrl: "/projects/project2",
    githubUrl: "https://github.com/YangyangLi-can/hotel-prime",
    liveUrl: "hotel-prime.vercel.app",
  },
];

export function ProjectList() {
  return (
    <div>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          projectUrl={project.projectUrl}
          githubUrl={project.githubUrl}
          liveUrl={project.liveUrl}
        />
      ))}
    </div>
  );
}
