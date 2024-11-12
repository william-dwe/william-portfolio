"use client";

import timepoint_content from '../AboutTimeline'

const VoluntaryTimeline = () => {
    return (
        <div dir='ltr' className='ltr'>
            <h2 className="text-4xl font-bold text-white mb-4">Voluntary Projects</h2>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
                <li className="ms-4">
                    {
                        timepoint_content(
                            "May 2024 - July 2024",
                            "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
                            "Bangkit Cloud Computing Tech Advisor",
                            [
                                "Guiding two student groups (14 individuals) in understanding Bangkit's curriculum and their Capstone Projects.",
                                "Providing feedback, evaluations, technical support, and advice on the development of products or business ideas during their Capstone Project.",
                            ]
                        )
                    }
                </li>
                <li className="ms-4">
                    {
                        timepoint_content(
                            "April 2021 - April 2022",
                            "Keluarga Mahasiswa Teknik Industri (MTI) ITB",
                            "Head of Professional Development Department",
                            [
                                "Designed and fostered 2 divisions (Workshop Seminar Division & Alumni Talks Division) under the Professional Development Department.",
                                "Coached more than 20 staff & apprentices about project planning & project management with Airtable.",
                                "In total, managed to organize a national-level business case competition & 11 self-enhancement webinars attended by more than 500 participants.",
                            ]
                        )
                    }
                </li>
                <li className="ms-4">
                    {
                        timepoint_content(
                            "February 2021 - April 2022",
                            "MTI Data Analytics Club",
                            "Vice President",
                            [
                                "Arranged a workshop about data mining attended by more than 40 ITB undergraduates.",
                                "Organized a national-scale data analytics mini competition, participated by more than 40 students from all over Indonesia.",
                            ]
                        )
                    }
                </li>
                <li className="ms-4">
                    {
                        timepoint_content(
                            "June 2020 - August 2020",
                            "Keluarga Mahasiswa Teknik Industri (MTI) ITB",
                            "Head Of Human Resources Department - Wisjul MTI ITB 2020",
                            [
                                "Recruiting, Evaluating, and Managing more than 50 Wisuda Juli Staff",
                                "Led Human Resources - Peer Evaluation & Customer Satisfaction Evaluation Projects.",
                                'Conducted mini workshop about "Brain Storming Technique with KJ Method"',
                            ]
                        )
                    }
                </li>
                <li className="ms-4">
                    {
                        timepoint_content(
                            "October 2019 - January 2020",
                            "IECOM 2020 (Industrial Engineering Competition by MTI ITB)",
                            "Fullstack Software Engineer",
                            [
                                "Designed Industrial Finance Simulator for the Elimination Stage",
                                "Made an Industrial Finance Simulator program, powered by VBA & Macro Excel",
                            ]
                        )
                    }
                </li>
            </ol>
        </div>
    )
}

export default VoluntaryTimeline