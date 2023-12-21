import { FC } from "react"


interface Iprops{
    header:string,
    description:string,
    number:string,
    color:string
    haveBorder?:boolean
}
const QuarterBox:FC<Iprops> = ({header,description,number,color,haveBorder=true}) => {
    return (
        <div className={`flex items-center relative gap-5 p-5 bg-[#6f6f6f16] hover:scale-110 overflow-hidden rounded-3xl hover:bg-[rgba(167,31,49,0.25)] backdrop-blur ${haveBorder&&"border-gray-400"} flex-1`}> 
        <div className={`absolute right-0 w-52 h-52 rotate-45 ${color} rounded-lg blur-3xl`}>
        </div>
            <div className='basis-3/12'>
                <div className="z-10 text-[10rem] text-[#00000017] font-[900] leading-none xl:text-[7rem]">
                {number}
                </div>
            </div>
            <div className='basis-9/12'>
                <h4 className="font-bold text-lg my-3">{header}</h4>
                <p className="mt-2 text-zinc my-3">{description}</p>
            </div>
            </div>
    )
}

export default QuarterBox