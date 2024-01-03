import Wrapper from "@/components/shared/Wrapper/wrapper"
import Button from "@/components/shared/button/button"
import QuarterBox from "@/components/shared/Quarter/quarter"
import Image from "next/image"
import { CoursesData } from "../shared/Data/data"
import { useState } from "react"
import {motion} from "framer-motion"

const text = `After completing the first three quarters the participants will select one or more\n specializations consisting of two courses each.`
const SpecializedTrack = () => {
    const [selectedItem, setSelectedItem] = useState('WMD')
    const selectedItemData = CoursesData.find((item)=>item.id===selectedItem)
    return (
        <section>
            <Wrapper>
                <div>
                    <div className="my-5">
                        <motion.h2 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        transition={{
                            duration: 1.5,
                            ease: "easeInOut",
                        }}
                        className="text-2xl md:text-4xl font-bold"><span className="bg-clip-text text-transparent bg-gradient-to-r from-ordinary via-extraordinary to-secondary">Sepecialized</span> Tracks:</motion.h2>
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
                        className="text-lg text-zinc whitespace-pre-line mt-4">{text}</motion.p>
                    </div>
                    <div className="flex flex-col-reverse lg:flex-row lg:gap-x-8 xl:gap-x-12 gap-y-12 mt-10">
                        {/* right section */}
                        <motion.div 
                        initial={{ opacity: 0, x: -40,}}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 1.5,
                            ease: "backInOut",
                        }}
                        className="basis-7/12 shadow-xl bg-slate-50 rounded-2xl border-zinc py-8 px-8 h-full md:sticky top-28">
                            <motion.h4 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{
                                opacity: 1,
                                x: 0
                            }}
                            transition={{
                                duration: 1.5,
                                ease: "easeInOut",
                            }}
                            className="text-lg font-medium text-zinc">Sepecialized Track</motion.h4>
                            <motion.h3 
                            initial={{ opacity: 0, x:-50 }}
                            whileInView={{
                                opacity: 1,
                                x: 0
                            }}
                            transition={{
                                duration: 1.5,
                                ease: "easeInOut",
                            }}
                            className="text-2xl font-bold rounded-xl my-2">{selectedItemData?.name} Specialization</motion.h3>
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
                            className="md:text-lg text-zinc mt-2">{selectedItemData?.description}</motion.p>
                            <Button text="Learn More" color="bg-primary" rounded="rounded-lg" hover="hover:bg-[rgb(39,94,217)]"/>
                            <motion.div 
                            initial={{ opacity: 0, x: -40, scale:0.75}}
                            whileInView={{
                                opacity: 1,
                                x: 0, scale:1
                            }}
                            transition={{
                                duration: 1.5,
                                ease: "backInOut",
                            }}
                            className="flex flex-col gap-4 mt-8 sm:flex-row">
                                { 
                                selectedItemData?.Quarter_Data.map((item,)=>(
                                    <QuarterBox
                                    key={item.id}
                                    description={item.objective}
                                    header={item.Quarter}
                                    number={item.id}
                                    color={item.color}
                                    haveBorder={false}
                                    />
                                ))
                                }
                            </motion.div>
                        </motion.div>
                        {/* left section */}
                        <div className="basis-5/12">
                                {
                                    CoursesData.map((item, i) => (
                                        <div key={i} className="my-7">
                                        <motion.div 
                                        initial={{ opacity: 0, x: -40, y: 50, scale:0.70 }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0, y: 0,scale:1
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            ease: "backInOut",
                                        }}
                                        onClick={()=> setSelectedItem(item.id)} className="flex gap-x-4 cursor-pointer items-center my-7">
                                            <div key={i} className="flex-shrink-0 h-20 w-28 md:h-24 md:w-40">
                                                <Image src={item.image}  alt="metaverse" height={150} width={150} className="h-full w-full object-cover rounded-md" />
                                            </div>
                                            <div className="basis-9/12">
                                                <h4 className="text-zinc font-medium">Specialized Track</h4>
                                                <h3 className="font-semibold md:text-lg">{item.name} Specialization</h3>
                                            </div>
                                        </motion.div>
                                        <div className="w-full h-[0.05rem] bg-slate-400"></div>
                                        </div>
                                    ))
                                }
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default SpecializedTrack