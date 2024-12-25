"use client"
import React, {useRef} from "react";
import SectionTitle from "../SectionTitle"

const blogs = {
  "blogs": [
    {
      "title": "How to create your own portfolio website",
      "description": "This is my portfolio website descriptions.",
      "post_date": "December 2024",
      "image_url": "https://github.com/william-dwe/william-portfolio",
      "blogs_url": "https://www.williamwibowo.com",
      "tags": ["web-development", "frontend", "backend"]
    },
    {
      "title": "How to create your own portfolio website",
      "description": "This is my portfolio website descriptions.",
      "post_date": "December 2024",
      "image_url": "https://github.com/william-dwe/william-portfolio",
      "blogs_url": "https://www.williamwibowo.com",
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

const blogCard = (() => {
  return <ul className="relative grid grid-cols-12 gap-y-5 gap-x-5 lg:mt-[10vh]">  
    {blogs && blogs.blogs.map((project, index) => {
      return (
      <li key={index} className="col-start-2 col-span-10 lg:col-start-4 lg:col-span-6 p-4 border border-gray-800 hover:border-white rounded shadow-md hover:shadow-lg transition-all ease-in-out duration-300 transform hover:scale-110">
        <h2 className="text-2xl font-semibold text-white">{project.title}</h2>  
        <h4 className="text-sm text-white">({project.post_date})</h4>  
        <p className="my-2 text-gray-700">{project.description}</p>
        {tagsIcons(project.tags)}
        <div className="flex flex-row py-2 gap-2">
          <a className="text-sm flex items-center gap-1 rounded-lg px-1.5 py-1 bg-gray-800 hover:bg-gray-600" href={project.repository_url}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
            Read More
          </a>
        </div>
      </li>
      )
    })}    
  </ul>
})

const BlogSection = () => {
  let titleProps = {
    headerContent:"This is",
    headerContentUnderline:"my Blog",
    subHeaderContent:"Here are some of my recorded thoughts.",
    titleHeight:"15vh"
  }
  return <section className="relative text-white min-h-screen" id="Blog"> 
    <div className="relative mb-[10vh] lg:top-0 lg:sticky">
      <SectionTitle {...titleProps}/>
    </div>
    {blogCard()}
  </section>
}

export default BlogSection;