interface ProjectCardProps {
    title: string;
    description:string;
    imageUrl:string;
    projectUrl:string;
    githubUrl:string;
    liveUrl:string;
}

export function ProjectCard({title,description,imageUrl,projectUrl}:ProjectCardProps){
    return (
      <div>
        <img src={imageUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={projectUrl}
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded
          hover:bg-blue-600 transition-colors">
            View Project
            </a>
        </div>
      </div>
    );
}