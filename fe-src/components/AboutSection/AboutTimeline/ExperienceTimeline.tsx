"use client";

import Timepoints from './Timepoints'
import AnimateLoadOnScroll from "../../AnimateLoadOnScroll"

const listExperience = [
    {
        "time": "October 2023 - Present",
        "header": "Traveloka",
        "subheader": "Data Engineer - Data Warehouse Engineer",
        "pointers": [
            "Developed a custom script for Google Ads and Google Hotel API ingestion, reducing memory overhead by 75%.",
            "Maintained data quality and governance through custom alerts, data remodeling, and BigQuery slot optimization, improving Traveloka’s data delivery timeliness from 60% to 100% in 4 months. ",
            "Conducted an internal training program on Big Data and Data Warehousing with over 25 participants.",
            "Developed, managed, and maintained thousands of data pipelines & ingestions for Flight, Train, Bus, Pricing, Marketing, and User Platforms.",
        ],
        "buttons": <a href="https://www.traveloka.com/" className="mb-5 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Company website <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
        </a>
    },
    {
        "time": "April 2023 – October 2023",
        "header": "Shopee Ltd",
        "subheader": "Software Quality Assurance Automation Engineer - Marketplace",
        "pointers": [
            "Developed automation scripts and managed over 200 test cases for user marketplace logistics (MPL), marketplace orders, and user order lists in Shopee's iOS App using the XCUITest framework in Objective C.",
            "Created more than 10 test cases for user identification features in Shopee's Android App using the UiAutomator and Espresso frameworks in Java.",
            "Led final live regression testing for Marketplace Logistics (MPL), New Payment Channel Integration (MPP), User Cart, and Seller Wallet features, ensuring app reliability by executing over 250 regression test cases weekly.",
        ],
        "buttons": <a href="https://www.shopee.com/" className="mb-5 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Company website <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
        </a>
    },
    {
        "time": "September 2022 – July 2023",
        "header": "Sea Ltd",
        "subheader": "Junior Software Engineer - Digitalent",
        "pointers": [
            "Participated in the Digitalent program, a full-stack web development training course covering various technologies used by Shopee Pte Ltd.",
            "Led a team of 5 developers to create a simple e-commerce app in 2 months, utilizing Golang+Gin for the backend and Typescript+React for the frontend. Implemented OAuth, Redis Caching, CI/CD Pipeline, and Cloud Deployment.",
            "Developed simple e-wallet and restaurant booking apps using the same technology stack.",
            "Organized a DigiTalk event on SeaTalk chatbot development, attended by over 100 participants.",
        ],
        "buttons": <a href="https://www.sea.com/" className="mb-5 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Company website <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
        </a>
    },
    
]

const ExperienceTimeline = () => {
    return (
        <div dir='ltr' className='ltr'>
            <AnimateLoadOnScroll direction='right'>
                <h2 className="text-4xl font-bold text-white mb-4">Experiences</h2>
            </AnimateLoadOnScroll>
            <AnimateLoadOnScroll direction='right'>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
            {
                    listExperience.map((experience, index) => (
                        <li key={index} className="ms-4">
                        {
                            <>
                            <Timepoints 
                                animationDirection='left'
                                time={experience.time}
                                header={experience.header}
                                subheader={experience.subheader}
                                pointers={experience.pointers}
                            >
                                {experience.buttons}
                            </Timepoints>
                            </>
                        }
                    </li>
                    ))
                }
            </ol>
            </AnimateLoadOnScroll>
        </div>
    )
}

export default ExperienceTimeline