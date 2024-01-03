import Wrapper from "../shared/Wrapper/wrapper"
import { CData } from "../shared/Data/data"
import Link from "next/link"
import { motion } from "framer-motion"

const CompulsoryTrack = () => {
    return (
        <section>
            <Wrapper>
                <div className="max-w-screen-md">
                    <motion.h2
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        transition={{
                            duration: 1.5,
                            ease: "backInOut",
                        }}
                        className="text-2xl md:text-4xl my-4 font-bold"><span className="bg-clip-text text-transparent bg-gradient-to-r from-ordinary via-extraordinary to-secondary">Compulsory</span> Courses</motion.h2>
                    <motion.h4
                        initial={{ opacity: 0, x: -40, y: 50 }}
                        whileInView={{
                            opacity: 1,
                            x: 0, y: 0
                        }}
                        transition={{
                            duration: 1.5,
                            ease: "backInOut",
                        }}
                        className="text-xl md:text-2xl font-semibold md:font-semibold">Core Courses (Common in All Specializations)</motion.h4>
                    <motion.p
                        initial={{ opacity: 0, x: -40, y: 50 }}
                        whileInView={{
                            opacity: 1,
                            x: 0, y: 0
                        }}
                        transition={{
                            duration: 1.5,
                            ease: "backInOut",
                        }}
                        className="text-zinc text-lg "> Every participant of the program will start by completing the following three core courses:</motion.p>
                </div>
                <motion.div 
                initial={{ opacity: 0, x: 40, scale:0.70}}
                whileInView={{
                    opacity: 1,
                    x: 0, scale:1
                }}
                transition={{
                    duration: 1.5,
                    ease: "backInOut",
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-10 pb-14 pt-14">
                    {CData.map((item, i) => (
                        <Link href={`/Compulsory/${item.id}`} key={i} className="flex items-center relative gap-5 p-5 bg-[#6f6f6f16] border-gray-400 hover:scale-90 md:hover:scale-110 overflow-hidden rounded-3xl hover:bg-[rgba(167,31,49,0.25)] backdrop-blur">
                                <div className={`absolute right-0 w-52 h-52 rotate-45 rounded-lg ${item.color} blur-3xl`}>
                                </div>
                                <div className='basis-3/12 md:basis-4/12'>
                                    <div className="z-10 text-[7rem] text-[#00000017] font-[900] leading-none xl:text-[10rem]">
                                        {i + 1}
                                    </div>
                                </div>
                                <div className='basis-9/12 md:basis-8/12'>
                                    <h4 className="font-bold text-lg my-3">{item.Quarter}</h4>
                                    <p className="mt-2 text-zinc my-3">{item.objective}</p>
                                </div>
                            </Link>
                    ))}
                </motion.div>
            </Wrapper>
        </section>
    )
}

export default CompulsoryTrack