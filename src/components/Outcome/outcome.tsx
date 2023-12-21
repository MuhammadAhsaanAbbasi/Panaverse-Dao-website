import Wrapper from "@/components/shared/Wrapper/wrapper"
import Image from "next/image"
import outcome from '../../../public/assests/background2.jpg'
import { OutComeData } from "@/components/shared/Data/data"
import Link from "next/link"
import { HiExternalLink } from 'react-icons/hi'
import { motion } from "framer-motion"
const OutCome = () => {
    return (
        <section className="mt-16 md:mt-28">
            <Wrapper>
                <div className="flex gap-x-8 flex-col-reverse md:flex-row items-center">
                    <motion.div 
                    initial={{ opacity: 0, x: -40, scale:0.60 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,scale:1
                    }}
                    transition={{
                        duration: 1.5,
                        ease: "backInOut",
                    }}
                    className='basis-6/12'>
                        <Image src={outcome} alt="outcome" />
                    </motion.div>
                    <div className="basis-6/12">
                        <motion.h2 
                        initial={{ opacity: 0, y: 40, x:40, scale:0.60 }}
                        whileInView={{
                            opacity: 1,
                            x:0, y: 0,scale:1
                        }}
                        transition={{
                            duration: 1.5,
                            ease: "easeInOut",
                        }}
                        className="bg-clip-text text-transparent bg-gradient-to-r from-ordinary via-extraordinary to-secondary text-4xl font-bold">The Outcome for Participants of the Program</motion.h2>
                        <motion.p 
                        initial={{ opacity: 0, x:-50, scale:0.70}}
                        whileInView={{
                            opacity: 1,
                            x:0, scale:1
                        }}
                        transition={{
                            duration: 1.5,
                            ease: "backInOut",
                        }}
                        className="text-zinc text-lg mt-6 mb-10">The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals and students a fantastic opportunity to better their financial situation while also giving the economy a much-needed boost by expanding software exports.</motion.p>
                        <div className="mt-10 grid gap-y-3">
                            {OutComeData.map((item, i) => (
                                <motion.div key={i} 
                                initial={{ opacity: 0, x:-50, y:50}}
                        whileInView={{
                            opacity: 1,
                            x:0, y:0
                        }}
                        transition={{
                            duration: 1.5,
                            ease: "backInOut",
                        }}
                                className="flex gap-x-4 items-center">
                                    <span className='w-5'>
                                        <Link href={item.url} target='_blank'><HiExternalLink className='text-zinc' size={18} /></Link>
                                    </span>
                                    <h2>{item.line}</h2>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default OutCome
