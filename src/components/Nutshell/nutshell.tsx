
import Image from 'next/image'
import Button from '../shared/button/button'
import Wrapper from '@/components/shared/Wrapper/wrapper'
import Codeimage from "/public/assests/codeimage.png"
import { motion, } from "framer-motion"

const Nutshell = () => {
    return (
        <section>
            <Wrapper>
                {/* upper content */}
                <div className='my-20'>
                    <div className='flex flex-col items-center justify-center px-10 md:px-20 lg:px-44 py-8 text-center'>
                        <motion.h2 className='text-3xl lg:text-5xl font-bold my-3'
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{
                                opacity: 1,
                                x: 0
                            }}
                            transition={{
                                duration: 1.5,
                                ease: "backInOut",
                            }}
                        >The Program in a Nutshell</motion.h2>
                        <motion.h3 className='text-2xl lg:text-3xl font-bold my-3 bg-clip-text text-transparent bg-gradient-to-r from-ordinary via-extraordinary to-secondary'
                            initial={{ opacity: 0, x: -40, y: 50 }}
                            whileInView={{
                                opacity: 1, 
                                x: 0, y: 0
                            }}
                            transition={{
                                duration: 1.5,
                                ease: "backInOut",
                            }}
                        >Earn While You Learn</motion.h3>
                        <motion.p className='text-center text-zinc text-lg mt-2'
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{
                                opacity: 1,
                                x: 0
                            }}
                            transition={{
                                duration: 1.5,
                                ease: "backInOut",
                            }}
                        >{"In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program's beginning. It resembles a cross between a corporate venture and an educational project"}</motion.p>
                    </div>
                    {/* lower content */}
                    <div className="flex items-center flex-col md:flex-row my-5">
                        {/* left side */}
                        <div className="basis-7/12 pr-14">
                            <motion.h2 className='text-3xl font-bold'
                                initial={{ opacity: 0, x: -40, y: 50 }}
                                whileInView={{
                                    opacity: 1, 
                                    x: 0, y: 0
                                }}
                                transition={{
                                    duration: 1.5,
                                    ease: "backInOut",
                                }}
                            >Program of Studies</motion.h2>
                            <motion.p className="mt-6 text-lg font-normal text-zinc"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0
                                }}
                                transition={{
                                    duration: 1.5,
                                    ease: "backInOut",
                                }}
                            >This curriculum is intended for beginners who want to learn software development from the ground up. The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.</motion.p>
                            <Button text="Explore More" color="bg-primary" rounded="rounded-lg" hover="hover:bg-[rgb(39,94,217)]" />
                        </div>
                        {/* right side */}
                        <div className="basis-5/12">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                transition={{
                                    duration: 2.5,
                                    ease: "backInOut",
                                    delay: 1
                                }}
                            >
                                <Image src={Codeimage} alt="Coding" />
                            </motion.div>
                            <motion.div
                                initial={{ y: 0 }}
                                animate={{ y: -100 }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2
                                }}
                                className="bg-slate-50 py-5 px-10 flex flex-col rounded-xl w-3/5 justify-center mx-14 -z-10">
                                <h3 className='text-base font-light font-["poppins"]'>Tomorrow is our</h3>
                                <h2 className='text-base font-semibold font-["poppins"]'>“When I Grow Up” Spirit Day!</h2>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default Nutshell