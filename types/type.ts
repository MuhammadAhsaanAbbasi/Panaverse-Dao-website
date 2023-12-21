import { StaticImageData } from "next/image";

export interface IQuarterData {
    id:string,
    Quarter: string,
    duration_weeks: number
    objective:string,
    color: string,
    course_description:string[],
    outline:  {
        title:string,
        children?:(
            {
                type:string,
                text:string,
                url?:string
            }
            |
            {
                type:string,
                children?:{
                    type:string,
                    text:string,
                    url?:string
            }[][]
            }
        )[][]
    }[]
}

export interface ICourseData{
    id:string,
    name:string,
    description:string
    image:StaticImageData,
    Quarter_Data:IQuarterData[]
}