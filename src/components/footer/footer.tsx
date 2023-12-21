import Wrapper from "@/components/shared/Wrapper/wrapper"
import { CData } from "@/components/shared/Data/data"
import { CoursesData } from "@/components/shared/Data/data"
import LinkComponent from "@/components/shared/LinkComponent/link"

const Footer = () => {
    return (
        <section className="mt-16 md:mt-28 bg-gray-200">
            <Wrapper>
                <div className="py-20 grid grid-cols-1 md:grid-cols-3 m-auto gap-16">
                    <div className="">
                        <h2 className="text-2xl font-semibold my-3">Compulsory Quarters</h2>
                        {
                            CData.map((item, i) => (
                                <div key={i} className="my-3">
                                    <h3 className='truncate ... text-zinc'>{item.Quarter} : {item.objective}</h3>
                                </div>
                            ))
                        }
                    </div>
                    <div className="my-3">
                        <h2 className="text-2xl font-semibold">Specialization Tracks</h2>
                        {
                            CoursesData.map((item, i) => (
                                <div key={i} className="my-3">
                                    <h3 className='text-zinc'>{item.name}</h3>
                                </div>
                            ))
                        }
                    </div>
                    <div className="my-3">
                        <h2 className="text-2xl font-semibold">Social Links</h2>
                        <LinkComponent/>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default Footer