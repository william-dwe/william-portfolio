"use client"
import React from "react";
import SectionTitle from "../SectionTitle"
import AnimateLoadOnScroll from "../AnimateLoadOnScroll"

const blogs = {
  "blogs": [
    {
      "title": "Tired of stacking UNION ALL, have you tried BigQuery GROUPING SETS?",
      "description": "This article explores BigQuery's GROUPING SETS clause as a more concise and readable alternative to complex UNION ALL queries for generating aggregations at multiple levels of granularity.",
      "post_date": "January 2025",
      "image_url": "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*1oaBj4zV7Ug73rtqZf4YUg.png",
      "blogs_url": "https://williamwibowo.medium.com/tired-of-stacking-union-all-have-you-tried-bigquery-grouping-sets-8019a8971b32",
      "tags": ["bigquery", "sql", "data-engineer", "data-analysis"]
    },
    {
      "title": "BigQuery “NOT IN” vs “NOT EXISTS” vs “EXCEPT DISTINCT” understand the differences in 3 minutes!",
      "description": "This article compares three BigQuery operators—NOT IN, NOT EXISTS, and EXCEPT DISTINCT—for excluding data from query results, using a real-world debugging scenario involving bot traffic exclusion.",
      "post_date": "January 2025",
      "image_url": "https://miro.medium.com/v2/resize:fit:900/format:webp/1*_jxlQd_nbnk7YEfPZr003A.jpeg",
      "blogs_url": "https://williamwibowo.medium.com/bigquery-not-in-vs-not-exists-vs-except-distinct-understand-the-differences-in-3-minutes-e66d2159f744",
      "tags": ["bigquery", "sql", "data-engineer"]
    }
  ]
}

const tagsIcons = (tags => {
  return (
    <ol className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <li key={index} className="text-xs rounded py-1 px-2 bg-gray-600 text-white">#{tag}</li>
      ))}
    </ol>
  )
  
})

const blogCard = (() => {
  return <ul className="relative grid grid-cols-12 gap-y-5 gap-x-5 lg:mt-[10vh]">  
    {blogs && blogs.blogs.map((project, index) => {
      return (
        <li key={index} className="col-start-2 col-span-10 lg:col-start-4 lg:col-span-6 p-4 border border-gray-800 hover:border-white rounded shadow-md hover:shadow-lg transition-all ease-in-out duration-300 transform hover:scale-110 hover:bg-gray-200 text-white hover:text-black hover:inset-shadow-black" onClick={() => {}}>
          <AnimateLoadOnScroll direction="up">
            <a href={project.blogs_url} className="w-full h-full">
              <h2 className="text-2xl font-semibold">{project.title}</h2>  
              <h4 className="text-sm">({project.post_date})</h4>  
              <p className="my-2 text-gray-700">{project.description}</p>
              {tagsIcons(project.tags)}
            </a>
        </AnimateLoadOnScroll>
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