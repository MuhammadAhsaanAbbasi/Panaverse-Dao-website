import Wrapper from "@/components/shared/Wrapper/wrapper"
import Image from "next/image"
import HeroPoster from "../../../public/assests/background.jpg"
import Button from "@/components/shared/button/button"
import { motion, useAnimation } from "framer-motion"


const title = `Web 3.0 And \nMetaverse\nDevelopment`
const Hero = () => {
    return (
        <section>
            <Wrapper>
                <div className="flex items-center flex-col md:flex-row gap-y-2">
                    {/* left side */}
                    <motion.div className="basis-7/12"
                        initial={{ opacity: 0, x: -40,}}
                        whileInView={{
                            opacity: 1, 
                            x: 0,
                        }}
                        transition={{
                            duration: 1.5,
                            ease: "backInOut",
                        }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold leading-[1.3] max-w-sm bg-clip-text text-transparent bg-gradient-to-r  from-ordinary to-extraordinary">{title}</h1>
                        <h4 className="text-zinc text-lg mt-2">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
                        <div className="w-20 h-1 sm:h-2 bg-gradient-to-r from-[rgb(13,187,161)] to-[rgb(10,209,146)]"></div>
                        <p className="mt-6 text-lg font-normal">First two quarters are compulsary for everyone and remaining two are the specialization in different domains</p>
                        <Button
                            text="Apply Now"
                            color="bg-secondary"
                            rounded="rounded-full"
                            hover="hover:bg-[rgb(201,101,132)]"
                        />
                </motion.div>
                    {/* right side */}
                    <motion.div className="basis-5/12"
                        initial={{ opacity: 0, x: 40}}
                        whileInView={{
                            opacity: 1, 
                            x: 0
                        }}
                        transition={{
                            duration: 1.5,
                            ease: "backInOut",
                        }}
                    >
                        <Image src={HeroPoster} alt="PIAIC" />
                    </motion.div>
                </div>
            </Wrapper>
        </section>
    )
}

export default Hero