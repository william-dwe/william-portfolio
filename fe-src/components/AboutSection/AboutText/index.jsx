"use client";
import AnimateLoadOnScroll from "../../AnimateLoadOnScroll"

const CardText = (title, paragraph) => {
    return (
        <div className="mt-4 md:mt-0 flex flex-col h-full">
            <AnimateLoadOnScroll direction="right">
                <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
            </AnimateLoadOnScroll>
            <AnimateLoadOnScroll direction="right">
                <p className="whitespace-pre-line text-base lg:text-lg">{paragraph}</p>
            </AnimateLoadOnScroll>
        </div>   
    )
}

const AboutText = () => {
    return (
        <div className="flex flex-col h-full">
            {CardText(
                "About Me",
                `William is a data & platform engineer, had several experiences in designing, developing, and maintaining robust and efficient data ecosystem. William experience spans data engineering, data warehousing (Analytics Engineer), business intelligence, data governance, and full-stack development, giving him a well-rounded perspective on the end-to-end data lifecycle.  Most recently, at Traveloka, He focused on data warehouse engineering, optimizing data pipelines and ingestion processes, ultimately improving data delivery timeliness by 40%. He also enjoy sharing his knowledge and have led internal training programs on Data Modeling, Data Warehousing, and Software Engineering best practices. Prior to this, He also honed his QA automation skills at Shopee, ensuring the reliability of mobile applications, and gained valuable full-stack development experience at Sea Ltd. through the Full Stack Developer position, where he led the development of an internal prototype e-commerce application.

                William's background also includes a strong foundation in business intelligence and data analysis, cultivated through internships at OVO and Paragon Technology and Innovation. At OVO, he contributed to a large-scale data migration from on-premise server to GCP and developed automated job scheduling solutions. At Paragon, he streamlined data preparation processes during data migration, significantly reducing processing time. Beyond professional experience, he's actively involved in community projects, serving as a Cloud Computing Tech Advisor for Bangkit Academy, mentoring students on their capstone projects. He also have a history of leadership in student organizations, where He has organized events, workshops, and competitions, fostering collaboration and knowledge sharing.
                
                He's eager to continue learning and contributing to innovative projects. His diverse skill set and passion for problem-solving make me a valuable asset to any team. He's particularly interested in opportunities that allow him to leverage his data engineering expertise to build scalable and impactful solutions.
                `
            )}
        </div>    
    )
}

export default AboutText