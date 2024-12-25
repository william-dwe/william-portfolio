"use client"
import React, {useRef} from "react";
import SectionTitle from "../SectionTitle"

const projects = {
  "projects": [
    {
      "title": "My Portfolio Website",
      "description": "This is my portfolio website descriptions.",
      "image_url": "https://github.com/william-dwe/william-portfolio",
      "website_url": "https://www.williamwibowo.com",
      "repository_url": "repository_url",
      "tags": ["web-development", "frontend", "backend"]
    },
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

const tagsIcons = (tags => {
  return (
    <ol className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <li key={index} className="text-xs rounded py-1 px-2 bg-gray-600">{tag}</li>
      ))}
    </ol>
  )
  
})

const projectCard = (() => {
  return <ul className="relative grid grid-cols-12 gap-y-5 gap-x-5 lg:mt-[10vh]">  
    {projects && projects.projects.map((project, index) => {
      return (
      <li key={index} className="col-start-2 col-span-10 lg:col-start-4 lg:col-span-6 p-4 border border-gray-800 hover:border-white rounded shadow-md hover:shadow-lg transition-all ease-in-out duration-300 transform hover:scale-110">
        <h2 className="text-2xl font-semibold text-white">{project.title}</h2>  
        <p className="my-2 text-gray-700">{project.description}</p>
        {tagsIcons(project.tags)}
        <div className="flex flex-row py-2 gap-2">
          <a className="text-sm flex items-center gap-1 rounded-lg px-1.5 py-1 bg-gray-800 hover:bg-gray-600" href={project.website_url}>
            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 fill-white">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"/>
            </svg>
            Repository
          </a>
          <a className="text-sm flex items-center gap-1 rounded-lg px-1.5 py-1 bg-gray-800 hover:bg-gray-600" href={project.repository_url}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
            Visit
          </a>
        </div>
      </li>
      )
    })}    
  </ul>
})

const ProjectSection = () => {
  let titleProps = {
    headerContent:"This is",
    headerContentUnderline:"my Projects",
    subHeaderContent:"Here are some of my recorded works.",
    titleHeight:"15vh"
  }
  return <section className="relative text-white min-h-screen" id="Project"> 
    <div className="relative mb-[10vh] lg:top-0 lg:sticky">
      <SectionTitle {...titleProps}/>
    </div>
    {projectCard()}
  </section>
}

export default ProjectSection;