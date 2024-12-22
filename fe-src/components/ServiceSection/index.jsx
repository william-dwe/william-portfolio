"use client";
import React from "react";
import SectionTitle from "../SectionTitle"

const serviceCard = (service, index) => {
    return <div key={index} className="relative max-w-l bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img className="rounded-t-lg" src={service.imageSrc} alt={service.imageAlt} />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{service.title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{service.description}</p>
            <ul className="service-details ml-8 font-normal list-disc text-gray-700 dark:text-gray-400 mb-0">
                {service.details.map((detail, i) => (
                    <li key={i} className="mb-2">
                    {detail}
                    </li>
                ))}
            </ul>
            {/* TODO: add specific page for each services */}
            {/* <a href="#" className="absolute bottom-5 w-2/8 flex flex-row items-center px-3 py-2 text-sm font-medium text-right text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Learn more
                 <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a> */}
        </div>
    </div>
    
}

const ServiceSection = () => {
    let titleProps = {
        headerContent:"Need help with",
        headerContentUnderline:"your data?",
        subHeaderContent:"I'm specialized in, but eager to learn more than",
        titleHeight:"15vh"
    }
    let services = [
        {
            title: 'ETL Development, Data Warehousing, and Data Migration',
            description: 'Efficiently process your data from datalake into datawarehouse in the most optimized structures through ETL process.',
            details: [
                'Extract: Seamlessly ingest data from diverse sources.',
                'Transform: Apply advanced data modeling for actionable insights.',
                'Load: Store structured data in scalable warehouses.',
            ],
            imageSrc: '/images/service-1.png',
            imageAlt: 'ETL Process Workflow',
        },
        {
            title: 'Data Ingestion & Data Platform Development',
            description: 'Designing & developing robust collaborative systems for all of your data assets according to your workflow needs.',
            details: [
                'Pipeline Builder: Streamline development with Dbt.',
                'Pipeline Scheduler: Orchestrate workflows using Airflow.',
                'Pipeline Orchestrator: Scale processes with Kubernetes.',
            ],
            imageSrc: '/images/service-3.png', 
            imageAlt: 'Data Platform Diagram',
        },
        {
            title: 'Data Quality, Data Governance, and Schedule Optimization',
            description: 'Ensuring your data is reliable, consistent, and secure. By enhancing your data pipeline to accomodate 5 dimension of Data Quality.',
            details: [
                'Availability: Maximize data uptime.',
                'Completeness: Fill in the gaps.',
                'Accuracy: Deliver high-quality information.',
                'Timeliness: Receive data when you need it.',
                'Consistency: Align data across systems.',
            ],
            imageSrc: '/images/service-2.png', 
            imageAlt: 'Data Governance Visual',
        },
    ]

    return (
        <section className="
        my-[10vh]
        relative
        text-white
        bg-black
        " id="Service"
        >
        {/* <div className="pointer-events-none z-50 sticky top-0 h-[15vh]"> */}
        <div className="pb-[5vh]">
            <SectionTitle {...titleProps}/>
        </div>
        <div className="mt-[5vh] grid grid-cols-1 lg:grid-cols-3 gap-8 px-[10vw]">
            {
                services.map((service, index) => serviceCard(service, index))
            }
        </div>
    </section>
    );
};

export default ServiceSection;
