"use client";

import Timepoints from './Timepoints'
import AnimateLoadOnScroll from "../../AnimateLoadOnScroll"

const listEducation = [
    {
        "time": "",
        "header": "Institut Teknologi Bandung (ITB)",
        "subheader": "Industrial Engineering Major - Bachelor of Applied Science (BASc)",
        "pointers": [],
        "buttons": <a href="https://digilib.itb.ac.id/gdl/view/67569/?rows=767&per_page=265" className="m-1 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Look at my thesis <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
        </a>
    },
    {
        "time": "",
        "header": "Google Cloud",
        "subheader": "Professional Data Engineer (PDE)",
        "pointers": [
            "Design data processing systems",
            "Ingest and process the data",
            "Store the data",
            "Prepare and use data for analysis",
            "Maintain and automate data workloads"
        ],
        "buttons": <>
        <a href="https://google.accredible.com/1bf02699-ac26-4122-9730-99656c0c8d72" className="m-1 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Certificate credentials <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
        <a href="https://cloud.google.com/learn/certification/data-engineer" className="m-1 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
        </>
    }
]

const EducationTimeline = () => {
    return (
        <>
            <AnimateLoadOnScroll>
                <h2 className="text-4xl font-bold text-white mb-4">Education & Certification</h2>
            </AnimateLoadOnScroll>
            <AnimateLoadOnScroll>
            <ol className="relative left-3 border-s border-gray-200 dark:border-gray-700">                  
            {
                    listEducation.map((education, index) => (
                        <li key={index} className="mb-2 ms-4">
                        {
                            <>
                            <Timepoints 
                                time={education.time}
                                header={education.header}
                                subheader={education.subheader}
                                pointers={education.pointers}
                            >
                                {education.buttons}
                            </Timepoints>
                            </>
                        }
                    </li>
                    ))
                }
            </ol>
            </AnimateLoadOnScroll>
        </>
    )
}

export default EducationTimeline