import Wrapper from "@/components/shared/Wrapper/wrapper"
import Data from "@/components/shared/Data/data"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"

const Proud = () => {
    const controls = useAnimation();

    const fadeInOut = {
        hidden: { opacity: 0, y:-50, x:-50 },
        visible: { opacity: 1, y:0, x:0 },
    };
    const fadeOut = {
        hidden: { opacity: 0, y:100, },
        visible: { opacity: 1, y:0, },
    };
    return (
        <section className="bg-slate-50 mt-20">
            <Wrapper>
                <div className="py-16">
                    <motion.div 
                    initial="hidden"
                    animate={controls}
                    variants={fadeInOut}
                    transition={{
                        duration:1,
                        ease: "backInOut",
                    }}
                    onViewportEnter={() => controls.start("visible")}
                    onViewportLeave={() => controls.start("hidden")}
                    className="flex flex-col items-center justify-center pt-10 px-8 ">
                        <h3 className="text-4xl md:text-5xl font-bold my-2">We Are 
                            <span className="text-primary"> Proud  </span>
                            </h3>
                        <p className="text-base md:text-lg my-2 text-zinc">{"You don't have to struggle alone, you've got our assistance and help."}</p>
                    </motion.div>
                    <div className="grid grid-cols-12 gap-8 mt-4">
                        {
                            Data.map((item,i)=>(
                                <motion.div key={i} className={`col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col justify-center text-white items-center p-10 rounded-xl ${item.color}`}
                                initial="hidden"
                                animate={controls}
                                variants={fadeOut}
                                transition={{
                                    duration: 2.5,
                                    ease: "easeOut",
                                }}
                                onViewportEnter={() => controls.start("visible")}
                                onViewportLeave={() => controls.start("hidden")}
                                >
                                    <Image src={item.image} alt={item.describtion} height={60} width={60}/>
                                    <h3 className="text-3xl my-2 font-bold">{item.number}</h3>
                                    <p className="text-base font-light">{item.describtion}</p>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default Proud