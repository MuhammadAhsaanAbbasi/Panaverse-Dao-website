import Wrapper from "@/components/shared/Wrapper/wrapper"
import Image, { StaticImageData } from "next/image"
import { FC } from "react"

const QuarterHero:FC<{ text: string, image:StaticImageData, quarter?: string, objective?: string, duration?:number, Specailization?:boolean }> = ({ text, image, quarter, objective,duration,Specailization=false }) => {
    return (
        <section className="bg-zinc2">
            <Wrapper>
                <div className="flex items-center flex-col md:flex-row py-10">
                    {/* left side */}
                    <div className='basis-8/12 py-5'>
                        <h1 className="text-4xl font-bold leading-[1.3] max-w-xl bg-clip-text text-transparent bg-gradient-to-r from-ordinary to-extraordinary">{text}</h1>
                        <h1 className='text-black text-4xl font-bold leading-[1.3]'>{
                        Specailization&&"Specailization"}</h1>
                        <div className="my-8 bg-slate-200 max-w-lg py-4 px-8 rounded-xl">
                            <h2 className="text-3xl font-bold">{quarter}</h2>
                            <p className="text-zinc mt-4">{objective}</p>
                            <div className="bg-[rgb(39,39,42)] w-60 px-8 py-4 rounded-lg mt-4">
                                <h3 className="text-white">Duration: ( {duration} Weeks )</h3>
                            </div>
                        </div>
                    </div>
                    {/* right side */}
                    <div className="basis-4/12 py-5">
                        <Image src={image} alt={"common"} height={400} width={400} className="h-76 w-76"/>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default QuarterHero