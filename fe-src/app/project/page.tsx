import Image from "next/image";

const projects = {
  "projects": [
      {
          "title": "My Portfolio Website",
          "description": "This is my portfolio website descriptions.",
          "image_url": "https://github.com/william-dwe/william-portfolio",
          "website_url": "https://www.williamwibowo.com",
          "repository_url": "repository_url",
          "tags": ["web-development", "frontend", "backend"]
      }
  ]
}

const project_header = () => {
  return (
    <h1 className="text-3xl font-bold mb-5">Project List</h1>  
  )
}

export default function Project() {
  return (  
    <div className="h-[100vh] max-w-3xl mx-auto p-6"> 
      {project_header()} 
      <ul className="space-y-4">  
        {projects.projects.map((project, index) => (  
          <li key={index} className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-blue-600">{project.title}</h2>  
            <p className="mt-1 text-gray-700">{project.description}</p>
            <ol>
              {project.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ol>
            <div>
              <a href={project.website_url}>Visit</a>
              <a href={project.repository_url}>Repository</a>
            </div>
          </li>  
        ))}  
      </ul>  
    </div>  
  ); 
}
