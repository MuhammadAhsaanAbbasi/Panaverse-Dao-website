import Link from "next/link";
import { CData } from '../../../components/shared/Data/data'
import { HiOutlineExternalLink } from "react-icons/hi";
import { MdVerified } from "react-icons/md";
import Wrapper from "@/components/shared/Wrapper/wrapper";
import QuarterHero from "@/components/Quarterhero/quarterhero";
import common from '/public/assests/common.png'

async function getPost(quarter: string) {
    const post = CData.find(post => post.id === quarter)
    return post
}

export async function generateStaticParams() {
    const ids: number[] = [1,2,3]
    return ids.map((id) => ({ id: id }))
}

export default async function Post({ params }: { params: { quarter: string } }) {
    const { quarter } = params
    const post = await getPost(quarter)
    return (
        <>
            <section>
                <QuarterHero
                    text="Common In All"
                    image={common}
                    quarter={post?.Quarter}
                    objective={post?.objective}
                    duration={post?.duration_weeks}
                    Specailization={true}
                />
                <Wrapper>
                    <div className="mt-20 md:pr-[80px] text-zinc2 xl:pr-0 max-w-screen-xl">
                        <h2 className='font-bold text-5xl'>Course Description</h2>
                        <p className='text-lg bg-slate-400 py-5 px-5 mt-16 rounded-lg font-medium'>{post?.course_description}</p>
                        <h2 className="font-bold text-5xl mt-20">Course Outline</h2>
                        {post?.outline.map((item: any, i: number) => (
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
                                                                <p className="text-lg font-medium">{subchild.text}</p>
                                                                :
                                                                subchild.type === 'link' ?
                                                                    <Link href={subchild.url} className="flex text-primary items-center gap-x-2 text-lg">
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

