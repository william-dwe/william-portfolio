"use client";
import AnimateLoadOnScroll from "../../AnimateLoadOnScroll"

const CardText = (title, paragraph) => {
    return (
        <div className="mt-4 md:mt-0 flex flex-col h-full">
            <AnimateLoadOnScroll direction="right">
                <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
            </AnimateLoadOnScroll>
            <AnimateLoadOnScroll direction="right">
                <p className="text-base lg:text-lg">{paragraph}</p>
            </AnimateLoadOnScroll>
        </div>   
    )
}

const AboutText = () => {
    return (
        <div className="my-10 md:mt-0 flex flex-col h-full">
            {CardText(
                "About Me",
                "William is a Full Stack Data & Platform Engineer whose had several experiences in both developing & maintaining data platforms. He's experienced in creating Data Ingestion, Data Warehouse, Pipeline Orchestration, and Data Quality & Governance. He specialized in cloud data & platform migration, feel free to reach out for business inquiries."
            )}
        </div>    
    )
}

export default AboutText