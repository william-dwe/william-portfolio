"use client";
import AnimateLoadOnScroll from "./../../AnimateLoadOnScroll"

const Timepoints = ({
    animationDirection = "left",
    time,
    header,
    subheader,
    pointers,
    children
}) => {
    return (
        <>
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <AnimateLoadOnScroll direction={animationDirection}>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{time}</time>
        </AnimateLoadOnScroll>
        <AnimateLoadOnScroll direction={animationDirection}>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{header}</h3>
        </AnimateLoadOnScroll>
        <AnimateLoadOnScroll direction={animationDirection}>
            <h4 className="text-base text-gray-600 dark:text-gray-200">{subheader}</h4>
        </AnimateLoadOnScroll>
        <AnimateLoadOnScroll direction={animationDirection}>
            <ul className="
                mb-4 list-disc list-inside
                text-base font-normal text-gray-500 dark:text-gray-400
            ">
                {
                    pointers.map((pointer, index) => (
                        <AnimateLoadOnScroll key={index} direction={animationDirection}>
                            <li>{pointer}</li>
                        </AnimateLoadOnScroll>
                    ))
                }
            </ul>
            {children}
        </AnimateLoadOnScroll>
        </>
    )
}

export default Timepoints
