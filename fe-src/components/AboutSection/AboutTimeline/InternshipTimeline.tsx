"use client";

import timepoint_content from '../AboutTimeline'

const InternshipTimeline = () => {
    return (
        <>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
                <li className="ms-4">
                    {
                        timepoint_content(
                            "December 2021 – September 2022",
                            "PT VISIONET INTERNASIONAL (OVO)",
                            "Business Intelligence Intern - Core Platform",
                            [
                                "Worked on end-to-end data migration process from the on-premise server into the new Google Cloud Platform (GCP). ",
                                "Developed Cross-Platform Task Dependency feature on Airflow using REST API to streamline job scheduling BAU. ",
                                "Created Python-based Email Blast feature on Airflow. ",
                                "Conducted User Requirement Analysis, Data Modelling, ETL processes (BigQuery, Hive, Impala), developed dashboards (Tableau, Google Data Studio), and managed job scheduling (Airflow).",
                            ]
                        )
                    }
                    <a href="https://www.ovo.id/" className="mb-5 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Company website <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </li>
                <li className="ms-4">
                    {
                        timepoint_content(
                            "June 2019 - July 2019",
                            "PT Paragon Technology and Innovation",
                            "Master Data Management Intern",
                            [
                                "Assisted the MDM team in migrating over 50,000 B2B and B2C customer records from various databases to a new ERP system by designing & implementing data preparation procedures.",
                                "Developed a VBA-based consumer data preparation tool that cut data preparation time by up to 75%.",
                                "Collaborated with the MDM Team to standardize more than 15,000 product production routing data spread across 4 different factories.",
                            ]
                        )
                    }
                    <a href="https://www.paragon-innovation.com/" className="mb-5 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Company website <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
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
        </>
    )
}

export default InternshipTimeline