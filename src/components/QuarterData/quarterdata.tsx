"use client"
import Wrapper from "@/components/shared/Wrapper/wrapper"
import { HiOutlineExternalLink } from "react-icons/hi";
import { MdVerified } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md"
import { FC, useState } from "react"
import QuarterHero from "@/components/Quarterhero/quarterhero"
import common from '/public/assests/common.png'
import Link from "next/link"


const TrackData: FC<{ Data: any }> = ({ Data }) => {
    const [selectedItem, setSelectedItem] = useState('4')
    const selectedItemData = Data.Quarter_Data.find((item: any) => item.id === selectedItem)
    return (
        <>
            <section>
                <QuarterHero
                    text={Data.name}
                    image={common}
                    quarter={selectedItemData?.Quarter}
                    objective={selectedItemData?.objective}
                    duration={selectedItemData?.duration_weeks}
                    Specailization={true}
                />
                <div className="fixed top-1/3 right-3 flex flex-col">
                    {Data?.Quarter_Data.map((item: any, i: any) => (
                        <>
                            <div key={i}></div>
                            <div key={i} onClick={() => setSelectedItem(item.id)} className={`p-3 my-3 bg-slate-400 rounded-md rotate-45 cursor-pointer border-2 border-white ${selectedItem === item.id ? 'bg-[rgb(19,161,166)] transition-all duration-500' : ''
                                }`}>
                                <h3 className="-rotate-45 text-xl text-white">Q {item.id}</h3>
                            </div>
                        </>
                    ))}
                </div>
                <Wrapper>
                    <div className="mt-20 md:pr-[80px] text-zinc2 xl:pr-0 max-w-screen-xl">
                        <h2 className='font-bold text-5xl'>Course Description</h2>
                        {selectedItemData?.course_description.map((item: any, i: any) => (
                            <p key={i} className='text-lg bg-slate-400 py-5 px-5 mt-10 rounded-lg font-medium'>{item}</p>
                        ))}
                        <h2 className="font-bold text-5xl mt-20">Course Outline</h2>
                        {selectedItemData?.outline.map((item: any, i: number) => (
                            <>
                                <div key={i} className="my-10 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-ordinary via-extraordinary to-secondary font-bold">{item.title}</div>
                                <div key={i} className={`${item.children ? "text-xl bg-slate-400 py-5 px-5 rounded-lg" : ''}`}>
                                    {item.children?.map((child: any, childindex: number) => (
                                        <div key={childindex} className="my-4 max-w-[68rem]">
                                            {
                                                child.map((subchild: any, subchildIndex: number) => (
                                                    <div key={subchildIndex}>
                                                        {
                                                            subchild.type === 'text' ?
                                                                <p key={subchildIndex} className="text-lg font-medium">{subchild.text}</p>
                                                                :
                                                                subchild.type === 'link' ?
                                                                    <Link key={subchildIndex} href={subchild.url} className="flex text-primary items-center gap-x-2 text-lg">
                                                                        <span><HiOutlineExternalLink /></span>
                                                                        <span className="hover:underline">{subchild.text}</span>
                                                                    </Link>
                                                                    :
                                                                    subchild.type === 'sub_heading' ?
                                                                        <h3 className="text-2xl font-bold">{subchild.text}</h3>
                                                                        :
                                                                        subchild.type === 'h2' ?
                                                                            <h2 className="text-xl font-bold">{subchild.text}</h2>
                                                                            :
                                                                            subchild.type === 'note' ?
                                                                                <div key={subchildIndex} className="flex items-center text-lg">
                                                                                    <span className='bg-clip-text bg-gradient-to-r from-ordinary via-extraordinary to-secondary'>
                                                                                        <MdKeyboardDoubleArrowRight />
                                                                                    </span><span>{subchild.text}</span>
                                                                                </div>
                                                                                :
                                                                                subchild.type === 'nested' ?
                                                                                    <ul className=''>
                                                                                        {
                                                                                            subchild.children.map((list: any, list_index: number) => (
                                                                                                <li key={list_index} className=''>
                                                                                                    {
                                                                                                        list.map((nested_list: any, nested_list_index: number) => (
                                                                                                            <div key={nested_list_index} className="block my-3">
                                                                                                                {
                                                                                                                    nested_list.type === 'text' ?
                                                                                                                        <div key={nested_list_index} className="flex items-center mx-6">
                                                                                                                            <span className='mr-2 mt-1'><MdVerified /></span>
                                                                                                                            <p className="text-lg font-medium">
                                                                                                                                {nested_list.text}
                                                                                                                            </p>
                                                                                                                        </div>
                                                                                                                        :
                                                                                                                        nested_list.type === 'link' ?
                                                                                                                            <Link key={nested_list_index} href={nested_list.url} className="flex text-primary items-center gap-x-2 mx-6">
                                                                                                                                <span><HiOutlineExternalLink /></span>
                                                                                                                                <span>{nested_list.text}</span>
                                                                                                                            </Link>
                                                                                                                            :
                                                                                                                            false
                                                                                                                }
                                                                                                            </div>
                                                                                                        ))
                                                                                                    }
                                                                                                </li>
                                                                                            ))
                                                                                        }
                                                                                    </ul>
                                                                                    :
                                                                                    ""
                                                        }
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ))}
                                </div>
                            </>
                        ))}
                    </div>
                </Wrapper>
            </section>
        </>
    )
}

export default TrackData

