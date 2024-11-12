"use client";

import timepoint_content from '../AboutTimeline'

const ExperienceTimeline = () => {
    return (
        <div dir='ltr' className='ltr'>
            <h2 className="text-4xl font-bold text-white mb-4">Experiences</h2>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
                <li className="ms-4">
                    {
                        timepoint_content(
                            "April 2023 – October 2023",
                            "PT Trinusa Travelindo (Traveloka)",
                            "Data Engineer - Data Warehouse Engineer",
                            [
                                "Developed a custom script for Google Ads and Google Hotel API ingestion, reducing memory overhead by 75%.",
                                "Maintained data quality and governance through custom alerts, data remodeling, and BigQuery slot optimization, improving Traveloka’s data delivery timeliness from 60% to 100% in 4 months. ",
                                "Conducted an internal training program on Big Data and Data Warehousing with over 25 participants.",
                                "Developed, managed, and maintained thousands of data pipelines & ingestions for Flight, Train, Bus, Pricing, Marketing, and User Platforms.",
                            ]
                        )
                    }
                    <a href="https://www.traveloka.com/" className="mb-5 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Company website <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </li>
                <li className="ms-4">
                    {
                        timepoint_content(
                            "April 2023 – October 2023",
                            "Shopee Ltd",
                            "Software Quality Assurance Automation Engineer - Marketplace",
                            [
                                "Developed automation scripts and managed over 200 test cases for user marketplace logistics (MPL), marketplace orders, and user order lists in Shopee's iOS App using the XCUITest framework in Objective C.",
                                "Created more than 10 test cases for user identification features in Shopee's Android App using the UiAutomator and Espresso frameworks in Java.",
                                "Led final live regression testing for Marketplace Logistics (MPL), New Payment Channel Integration (MPP), User Cart, and Seller Wallet features, ensuring app reliability by executing over 250 regression test cases weekly.",
                            ]
                        )
                    }
                    <a href="https://www.shopee.com/" className="mb-5 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Company website <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </li>
                <li className="ms-4">
                    {
                        timepoint_content(
                            "September 2022 – July 2023",
                            "Sea Ltd",
                            "Junior Software Engineer - Digitalent",
                            [
                                "Participated in the Digitalent program, a full-stack web development training course covering various technologies used by Shopee Pte Ltd.",
                                "Led a team of 5 developers to create a simple e-commerce app in 2 months, utilizing Golang+Gin for the backend and Typescript+React for the frontend. Implemented OAuth, Redis Caching, CI/CD Pipeline, and Cloud Deployment.",
                                "Developed simple e-wallet and restaurant booking apps using the same technology stack.",
                                "Organized a DigiTalk event on SeaTalk chatbot development, attended by over 100 participants.",
                            ]
                        )
                    }
                    <a href="https://www.sea.com/" className="mb-5 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Company website <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </li>
            </ol>
        </div>
    )
}

export default ExperienceTimeline