"use client";

import timepoint_content from '../AboutTimeline'

const ExperienceTimeline = () => {
    return (
        <div dir='ltr' className='ltr'>
            <h2 className="text-4xl font-bold text-white mb-4">Experiences</h2>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
                <li className="mb-10 ms-4">
                    {
                        timepoint_content(
                            "February 2022",
                            "Application UI code in Tailwind CSS",
                            "Application UI code in Tailwind CSS",
                            ["Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages."]
                        )
                    }
                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </li>
                <li className="mb-10 ms-4">
                    {
                        timepoint_content(
                            "March 2022",
                            "Marketing UI design in Figma",
                            "Marketing UI design in Figma",
                            ["All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project."]
                        )
                    }
                </li>
                <li className="ms-4">
                    {
                        timepoint_content(
                            "June 2019 - July 2019",
                            "PT Cipta Wijaya Mandiri",
                            "Human Resource Business Partner Intern",
                            [
                                "Worked out the 360-degree annual employee KPI (Key Performance Indicator) calculation project.",
                                "Conducted on-hand counseling on filling KPI surveys for over 1200 company employees"
                            ]
                        )
                    }
                </li>
            </ol>
        </div>
    )
}

export default ExperienceTimeline