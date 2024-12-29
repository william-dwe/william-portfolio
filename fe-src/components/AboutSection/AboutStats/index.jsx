"use client";

import AnimateLoadOnScroll from "../../AnimateLoadOnScroll"

const stat = (title, value, index) => {
    return (
        <div key={index} className="p-1 flex flex-col items-center justify-center text-center">
            <dt className="mb-2 text-xl lg:text-4xl font-extrabold">{value}</dt>
            <dd className="text-xs lg:text-l text-gray-500 dark:text-gray-400">{title}</dd>
        </div>
    )
}

const AboutStats = () => {
    let stats = [
        {title: "Years of Experience", value: "2+"},
        {title: "Annual Processed Data", value: "1000TB+"},
        {title: "Data Source Aggregated", value: "10+"},
        {title: "Certification & Awards", value: "2+"},
    ]
    return (
        <div className="relative">
            <AnimateLoadOnScroll direction="up">
                <h2 className="
                    text-white font-extrabold 
                    text-l md:text-2xl lg:text-4xl 
                    lg:leading-normal
                    text-center
                ">
                Some Quantifiable Achievements
                </h2>  
                <div className="py-4 lg:px-[10vw] rounded-lg" id="stats">
                    <dl className="grid grid-cols-4 divide-x mx-auto text-gray-900 
                    dark:text-white 
                    ">
                        {
                            stats.map(({title, value}, index) => stat(title, value, index))
                        }
                    </dl>
                </div>
            </AnimateLoadOnScroll>
        </div>
    )
}

export default AboutStats