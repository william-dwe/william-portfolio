"use client";

import timepoint_content from '../AboutTimeline'

const EducationTimeline = () => {
    return (
        <>
            <h2 className="text-4xl font-bold text-white mb-4">Education & Certification</h2>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
                <li className="mb-10 ms-4">
                    {
                        timepoint_content(
                            "August 2018 - August 2022",
                            "Institut Teknologi Bandung (ITB)",
                            "Industrial Engineering Major - Bachelor of Applied Science (BASc)",
                            []
                        )
                    }
                    <a href="https://digilib.itb.ac.id/gdl/view/67569/?rows=767&per_page=265" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Look at my thesis <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </li>
                <li className="ms-4">
                    {
                        timepoint_content(
                            "March 2024",
                            "Google Cloud",
                            "Professional Data Engineer (PDE)",
                            [
                                "Design data processing systems",
                                "Ingest and process the data",
                                "Store the data",
                                "Prepare and use data for analysis",
                                "Maintain and automate data workloads"
                            ]
                        )
                    }
                    <a href="https://google.accredible.com/1bf02699-ac26-4122-9730-99656c0c8d72" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Certificate credentials <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                    <a href="https://cloud.google.com/learn/certification/data-engineer" className="mx-2 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </li>
            </ol>
        </>
    )
}

export default EducationTimeline