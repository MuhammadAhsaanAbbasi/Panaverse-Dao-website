import { motion, useAnimation } from "framer-motion"
import Link from "next/link"
import { FC } from "react"
import { BiLinkExternal } from 'react-icons/bi'
import { useInView } from 'react-intersection-observer'
import { useEffect } from "react"
const Button: FC<{ text: string, color: string, rounded?: string, hover: string }> = ({ text, color, rounded, hover }) => {
    return (
        <motion.div

        initial={{ opacity: 0, y: 50 }}
        whileInView={{
            opacity: 1,
            y: 0
        }}
        transition={{
            duration: 1,
            ease: "easeOut"
        }}
        >
            <Link href={"https://www.piaic.org/"} target='_blank' rel='noreferrer'>
                <button className={`mt-7 px-5 py-3 text-white ${color} flex items-center gap-x-2 ${rounded} font-semibold text-base font-["poppins"] hover:scale-105 transition-all duration-500 ease-in-out ${hover}`}>{text}<span className='w-5'>
                    <BiLinkExternal className='text-white' size={18} />
                </span></button>
            </Link>
        </motion.div>
    )
}

export default Button