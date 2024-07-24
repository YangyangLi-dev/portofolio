export default function About(){
    return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
          <p className="text-lg">
            Senior web developer with X years of experience in building modern,
            responsive web applications...
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="list-disc list-inside text-lg">
            <li>JavaScript/TypeScript</li>
            <li>React.js & Next.js</li>
            <li>Node.js</li>
            <li>HTML5 & CSS3</li>
            <li>Tailwind CSS</li>
            {/* Add more skills */}
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
          {/* Add your work experience here */}
        </section>
      </main>
    );
}