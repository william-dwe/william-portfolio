"use client";

import Timepoints from './Timepoints'
import AnimateLoadOnScroll from "../../AnimateLoadOnScroll"

const listVoluntary = [
    {
        "time": "May 2024 - July 2024",
        "header": "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
        "subheader": "Bangkit Cloud Computing Tech Advisor",
        "pointers": [
            "Guiding two student groups (14 individuals) in understanding Bangkit's curriculum and their Capstone Projects.",
            "Providing feedback, evaluations, technical support, and advice on the development of products or business ideas during their Capstone Project.",
        ],
        "buttons": <a href="https://digilib.itb.ac.id/gdl/view/67569/?rows=767&per_page=265" className="m-1 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Look at my thesis <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
        </a>
    },
    {
        "time": "April 2021 - April 2022",
        "header": "Keluarga Mahasiswa Teknik Industri (MTI) ITB",
        "subheader": "Head of Professional Development Department",
        "pointers": [
            "Designed and fostered 2 divisions (Workshop Seminar Division & Alumni Talks Division) under the Professional Development Department.",
            "Coached more than 20 staff & apprentices about project planning & project management with Airtable.",
            "In total, managed to organize a national-level business case competition & 11 self-enhancement webinars attended by more than 500 participants.",
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
    },
    {
        "time": "February 2021 - April 2022",
        "header": "MTI Data Analytics Club",
        "subheader": "Vice President",
        "pointers": [
            [
                "Arranged a workshop about data mining attended by more than 40 ITB undergraduates.",
                "Organized a national-scale data analytics mini competition, participated by more than 40 students from all over Indonesia.",
            ]
        ],
        "buttons": <a href="https://digilib.itb.ac.id/gdl/view/67569/?rows=767&per_page=265" className="m-1 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Look at my thesis <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
        </a>
    },
    {
        "time": "June 2020 - August 2020",
        "header": "Keluarga Mahasiswa Teknik Industri (MTI) ITB",
        "subheader": "Head Of Human Resources Department - Wisjul MTI ITB 2020",
        "pointers": [
            "Recruiting, Evaluating, and Managing more than 50 Wisuda Juli Staff",
            "Led Human Resources - Peer Evaluation & Customer Satisfaction Evaluation Projects.",
            'Conducted mini workshop about "Brain Storming Technique with KJ Method"',
        ],
        "buttons": <a href="https://digilib.itb.ac.id/gdl/view/67569/?rows=767&per_page=265" className="m-1 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Look at my thesis <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
        </a>
    },
    {
        "time": "October 2019 - January 2020",
        "header": "IECOM 2020 (Industrial Engineering Competition by MTI ITB)",
        "subheader": "Fullstack Software Engineer",
        "pointers": [
            "Designed Industrial Finance Simulator for the Elimination Stage",
            "Made an Industrial Finance Simulator program, powered by VBA & Macro Excel",
        ],
        "buttons": <a href="https://digilib.itb.ac.id/gdl/view/67569/?rows=767&per_page=265" className="m-1 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Look at my thesis <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
        </a>
    },
]

const VoluntaryTimeline = () => {
    return (
        <div dir='ltr' className='ltr'>
            <AnimateLoadOnScroll>
                <h2 className="text-4xl font-bold text-white mb-4">Voluntary Projects</h2>
            </AnimateLoadOnScroll>
            <AnimateLoadOnScroll>
                <ol className="relative ltr:left-3 rtl:right-3 border-s border-gray-200 dark:border-gray-700">                  
                    {
                        listVoluntary.map((voluntary, index) => (
                            <li key={index} className="ms-4">
                            {
                                <>
                                <Timepoints 
                                    time={voluntary.time}
                                    header={voluntary.header}
                                    subheader={voluntary.subheader}
                                    pointers={voluntary.pointers}
                                >
                                    {voluntary.buttons}
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

export default VoluntaryTimeline