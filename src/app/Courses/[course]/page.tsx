import { CoursesData } from "@/components/shared/Data/data";
import TrackData from "@/components/QuarterData/quarterdata";


async function getPost(course:string) {
    const post=CoursesData.find(post=>post.id===course)
    return post
}

export async function generateStaticParams() {
    const ids: string[] = ["WMD","AI","CNC","ACIT","GBS","NPAS"]
    return ids.map((id)=>({id:id}))
}

async function Post({params}:{params:{course:string}}) {
        const {course} = params
        const post = await getPost(course)
        return(
            <>
                <section>
                    <TrackData
                    Data={post}
                    />
                </section>
            </>
        )
    }


export default Post