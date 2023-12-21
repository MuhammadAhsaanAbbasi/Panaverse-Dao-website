import student from "/public/assests/student.png"
import clases from "/public/assests/class.png"
import instructor from "/public/assests/instructor.png"
import { IQuarterData, ICourseData } from "../../../../types/type"

const Data = [
    {
        image: student,
        number: "10,000",
        describtion: "Students Enrolled",
        color: "bg-primary",
    },
    {
        image: clases,
        number: "2,000",
        describtion: "Class Completed",
        color: 'bg-secondary'
    },
    {
        image: instructor,
        number: "150+",
        describtion: "Skilled Instructors",
        color: "bg-ordinary"
    },
    {
        image: student,
        number: "5,000",
        describtion: "Students Get Internships",
        color: 'bg-extraordinary'
    },
]

export default Data

export const CData: IQuarterData[] = [
    // Quarter 1
    {
        id: "1",
        Quarter: "Quarter 1",
        objective: "CS-101: Object-Oriented Programming using TypeScript",
        duration_weeks: 13,
        course_description: [
            "We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users. "
        ],
        outline: [
            // HTML and CSS (Homework)
            {
                title: 'HTML and CSS (Homework)',
                children: [
                    [
                        {
                            type: 'link',
                            text: 'Learn HTML by Hira Khan (Watch Recorded Videos)',
                            url: 'https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6',
                        }
                    ],
                    [
                        {
                            type: 'link',
                            text: 'Learn CSS Intro by Hira Khan (Watch Recorded Videos)',
                            url: 'https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob',
                        }
                    ],
                ]
            },
            // Web 3.0 and Metaverse Theory
            {
                title: 'Web 3.0 and Metaverse Theory',
                children: [
                    [
                        {
                            type: 'link',
                            text: 'Introduction to Panaverse DAO',
                            url: 'https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing',
                        }
                    ],
                    [
                        {
                            type: 'link',
                            text: 'Web 3.0 User Guide',
                            url: 'https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing',
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Complete Web 3 Assignments included in the Web 3 User Guide',
                        },
                        {
                            type: 'link',
                            text: 'Virtual and Augmented  Metaverse User Guide',
                            url: 'https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing '
                        }
                    ],
                ]
            },
            // Fundamentals of JavaScript (ECMAScript 2022 Language Specification)
            {
                title: 'Fundamentals of JavaScript (ECMAScript 2022 Language Specification)',
                children: [
                    [
                        {
                            type: 'link',
                            text: 'learn javascript by zeeshan hanif (watch recorded videos)',
                            url: 'https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo',
                        }
                    ],
                    [
                        {
                            type: 'link',
                            text: 'chapters 2-6, 13 of javascript from beginner to professional: learn javascript quickly by building fun, interactive, and dynamic web apps, games, and pages',
                            url: 'https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4',
                        }
                    ],
                    [
                        {
                            type: 'link',
                            text: 'javascript book code',
                            url: 'https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional'
                        }
                    ],
                    [
                        {
                            type: 'link',
                            text: 'getting started exercises with javascript and node.js',
                            url: 'https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing '
                        }
                    ],
                ]
            },
            // Fundamentals of JavaScript and Node.js Quiz
            {
                title: "Fundamentals of JavaScript and Node.js Quiz",
                children: [
                    [
                        {
                            type: "sub_heading",
                            text: "Topics Covered in the Quiz:",
                        },
                        {
                            type: "text",
                            text: "Background of JavaScript and How to use JavaScript in Browser Variables, Primitive data types Analyzing and modifying data types, and Operators (Chapter 2 of JavaScript from Beginner to Professional)",
                        }
                    ],
                    [
                        {
                            type: "nested",
                            children: [
                                [
                                    {
                                        type: "text",
                                        text: "Background of JavaScript and How to use JavaScript in Browser",
                                    },
                                ],
                                [
                                    {
                                        type: "text",
                                        text: "Variables, Primitive data types Analyzing and modifying data types, and Operators (Chapter 2 of JavaScript from Beginner to Professional)",
                                    }
                                ],
                                [
                                    {
                                        type: "text",
                                        text: "Intro to Node.js, .mjs files, Modules, NPM, import, export, and using external modules with npm:",
                                    },
                                    {
                                        type: "link",
                                        text: "npm",
                                        url: 'https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing'
                                    },
                                ],
                                [
                                    {
                                        type: "text",
                                        text: "How to accept user input in your Node.js JavaScript programs, this will allow us to create interactive Node.js console programs using prompt-sync library. The last example in this presentation shows you how to use prompt-sync library in your Node.js programs:",
                                    },
                                    {
                                        type: "link",
                                        text: "Node.js programs",
                                        url: 'https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing '
                                    },
                                ],
                                [
                                    {
                                        type: "text",
                                        text: "Using Arrays and Objects in Node.js Programs (chapter 3 of JavaScript from Beginner to Professional)",
                                    }
                                ],
                                [
                                    {
                                        type: "text",
                                        text: "Using if and if else statements, else if statements, Conditional ternary operators, and switch statements in Node.js programs (chapter 4 of JavaScript from Beginner to Professional)",
                                    }
                                ],
                                [
                                    {
                                        type: "text",
                                        text: "Using while loop, do while loop, for loop, for in, and for of loop in Node.js (chapter 5 of JavaScript from Beginner to Professional)",
                                    }
                                ],
                                [
                                    {
                                        type: "text",
                                        text: "Using Basic functions, Function arguments, Return, Variable scope in functions, Recursive functions, Nested functions, Anonymous functions, and Function callbacks in Node.js (chapter 6 of JavaScript from Beginner to Professional)",
                                    }
                                ],
                                [
                                    {
                                        type: "text",
                                        text: "Using Concurrency, Callbacks, Promises, async / await, and Event loop (chapter 13 of JavaScript from Beginner to Professional)",
                                    }
                                ],
                                [
                                    {
                                        type: "link",
                                        text: "JavaScript promises, mastering the asynchronous",
                                        url: 'https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript  '
                                    }
                                ],
                                [
                                    {
                                        type: "link",
                                        text: "New JavaScript Features in ECMAScript 2022 and 2021",
                                        url: 'https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg'
                                    }
                                ],
                            ]
                        }
                    ]
                ]
            },
            // Object-Oriented Programming with TypeScript
            {
                title: 'Object-Oriented Programming with TypeScript',
                children: [
                    // Chapters 1-11
                    [
                        {
                            type: 'text',
                            text: 'Chapters 1-11 of Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript',
                        },
                        {
                            type: 'link',
                            text: 'Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript',
                            url: 'https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1',
                        }
                    ],
                    // learning repo
                    [
                        {
                            type: 'text',
                            text: 'Learning TypeScript in Baby Steps',
                        },
                        {
                            type: 'link',
                            text: 'Learning Repository',
                            url: 'https://github.com/panaverse/learn-typescript ',
                        }
                    ],
                    // Class Companion project
                    [
                        {
                            type: 'text',
                            text: 'In Class Companion projects and articles for Learning TypeScript'
                        },
                        {
                            type: 'link',
                            text: 'Typescript book for javascript developers out today',
                            url: 'https://www.learningtypescript.com/'
                        }
                    ],
                    // Homework Project
                    [
                        {
                            type: 'text',
                            text: 'Homework Project'
                        },
                        {
                            type: 'link',
                            text: 'Hprogramming projects to learn typescript and node.js',
                            url: 'https://github.com/panaverse/typescript-node-projects'
                        }
                    ],
                    // Typescript Quizzes
                    [
                        {
                            type: 'h2',
                            text: 'Typescript Quizzes',
                        },
                        {
                            type: 'text',
                            text: 'Fundamentals of TypeScript Quiz',
                        }
                        ,
                        {
                            type: 'text',
                            text: 'TypeScript Professional Proficiency Quiz',
                        }
                    ],
                ]
            },
            // TypeScript for React
            {
                title: 'TypeScript for React',
                children: [
                    [
                        {
                            type: 'link',
                            text: 'Minimal TypeScript Crash Course For React With Interactive Code Exercises',
                            url: 'https://profy.dev/article/react-typescript',
                        }
                    ],
                ]
            },
            // Quarter Break Assignments and Quizzes
            {
                title: "Quarter Break Assignments and Quizzes ",
                children: [
                    [
                        {
                            type: "text",
                            text: "During the Quarter Break, we do the following Assignments:",
                        },
                    ],
                    // Projects will be covered
                    [
                        {
                            type: "nested",
                            children: [
                                [
                                    {
                                        type: "link",
                                        text: "assignment : cloud to edge",
                                        url: 'https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge'
                                    },
                                ],
                                [
                                    {
                                        type: "link",
                                        text: "todo app",
                                        url: 'https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app'
                                    }
                                ],
                                [
                                    {
                                        type: "link",
                                        text: "pricing ui",
                                        url: 'https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app'
                                    }
                                ],
                                [
                                    {
                                        type: "text",
                                        text: "Build a Panaverse DAO Syllabus Website using Next.js 13 given the content from the following document:",
                                    },
                                    {
                                        type: "link",
                                        text: "Panaverse DAO Syllabus",
                                        url: 'https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing'
                                    }
                                ],
                                [
                                    {
                                        type: "text",
                                        text: "Build a new PIAIC Website using Next.js 13 given the content from the current PIAIC Website and from the following document: ",
                                    },
                                    {
                                        type: "link",
                                        text: "PIAIC Syllabus",
                                        url: 'https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing'
                                    }
                                ],

                            ]
                        }
                    ],
                    [
                        {
                            type: "text",
                            text: "After completing the above Five Assignments everyone will appear in the following two Quizzes covering Github and TypeScript:",
                        },
                    ],
                    // Fundamentals of Version Control with Git Qui
                    [
                        {
                            type: "sub_heading",
                            text: "Fundamentals of Version Control with Git Quiz",
                        },
                    ],
                    // video Link
                    [
                        {
                            type: "text",
                            text: "Version Control using Git and GitHub By Sir Zeeshan Hanif (Watch Recorded Videos)",
                        },
                        {
                            type: "link",
                            text: "Video Link:",
                            url: 'https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF '
                        },
                    ],
                    // Chapters 1, 2, 3, and 4 Learn Version Control with Git
                    [
                        {
                            type: "text",
                            text: "Chapters 1, 2, 3, and 4 Learn Version Control with Git: A step-by-step course for the complete beginner by Tobias Günther ",
                        },
                    ],
                    // We will also cover these readings
                    [
                        {
                            type: "h2",
                            text: "We will also cover these readings",
                        },
                        {
                            type: "link",
                            text: "Getting started with writing and formatting on GitHub",
                            url: "https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github"
                        },
                        {
                            type: "link",
                            text: "Difference between fork and branch on github",
                            url: "https://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github"
                        },
                        {
                            type: "link",
                            text: "What are the differences between git branch, fork, fetch, merge, rebase and clone?",
                            url: "https://stackoverflow.com/questions/3329943/what-are-the-differences-between-git-branch-fork-fetch-merge-rebase-and-clon"
                        },
                        {
                            type: "link",
                            text: "Git Branching - Rebasing",
                            url: "https://git-scm.com/book/en/v2/Git-Branching-Rebasing"
                        },
                        {
                            type: "link",
                            text: "Git Branching - Remote Branches",
                            url: "https://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches"
                        },
                        {
                            type: "link",
                            text: "Practice",
                            url: "https://docs.github.com/en/get-started/quickstart/set-up-git"
                        },
                    ],
                    // introduction to git for data science
                    [
                        {
                            type: "h2",
                            text: "We will also cover these readings",
                        },
                        {
                            type: "link",
                            text: "introduction to git for data science",
                            url: "https://www.datacamp.com/courses-all"
                        },

                    ],
                    // Git Quiz
                    [
                        {
                            type: "h2",
                            text: "Git Quiz",
                        },
                        {
                            type: "text",
                            text: "Total Questions: 60, Total Time: 75 minutes"
                        },

                    ],
                    // TypeScript Proficiency Quiz
                    [
                        {
                            type: "sub_heading",
                            text: "TypeScript Proficiency Quiz",
                        },
                    ],
                    [
                        {
                            type: "text",
                            text: "Total Questions: 63",
                        },
                        {
                            type: "text",
                            text: "Duration: 120 minutes",
                        },
                    ],
                    // study material
                    [
                        {
                            type: "text",
                            text: "Study Material:",
                        },
                        {
                            type: "link",
                            text: "Learn Typescript",
                            url: 'https://github.com/panaverse/learn-typescript '
                        },
                    ],
                ]
            },
        ],
        color: "bg-[rgba(212,106,141,0.3)] "
    },
    // Quarter 2
    {
        id: '2',
        Quarter: "Quarter 2",
        objective: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        duration_weeks: 13,
        course_description: [
            "The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter, the participants will be able to develop and deploy web platforms like Facebook, Shopify, etc. The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF)."
        ],
        outline: [
            // Next.js 14 Web Development
            {
                title: 'Next.js 14 Web Development',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'Learn Next 14 Official Documentation',
                        },
                        {
                            type: 'link',
                            text: 'Next 14 Docs',
                            url: 'https://beta.nextjs.org/docs'
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Latest Learn React Official Website',
                        },
                        {
                            type: 'link',
                            text: 'Reactjs Docs',
                            url: 'https://beta.reactjs.org/learn '
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Learn Next.js 13 Learning Repo',
                        },
                        {
                            type: 'link',
                            text: 'learning repo',
                            url: 'https://github.com/panaverse/learn-nextjs'
                        }
                    ],
                ]
            },
            // Next.js 14 using Chakra UI (Remote Zoom Class)
            {
                title: 'Next.js 14 using Chakra UI (Remote Zoom Class)',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'CSS Flexbox Explained – Complete Guide to Flexible Containers and Flex Items',
                        },
                        {
                            type: 'link',
                            text: 'CSS Flexbox Complete Guide',
                            url: 'https://www.freecodecamp.org/news/css-flexbox-complete-guide/'
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Learn Chakra UI By Official Website',
                        },
                        {
                            type: 'link',
                            text: 'Chakra UI Docs',
                            url: 'https://chakra-ui.com/getting-started'
                        }
                    ],
                ]
            },
            // UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote  Zoom Class)
            {
                title: 'UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote  Zoom Class)',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'Designing and Prototyping Interfaces with Figma: Learn essential UX/UI design principles by creating interactive prototypes for mobile, tablet, and desktop by Fabio Staiano',
                        },
                        {
                            type: 'link',
                            text: 'designing-prototyping-interfaces-figma-interactive',
                            url: 'https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa'
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Figma Design Kit for TailwindCSS',
                        },
                        {
                            type: 'link',
                            text: 'Figma for TailwindCSS',
                            url: 'https://www.figma.com/community/file/768809027799962739'
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Chakra UI Figma Kit',
                        },
                        {
                            type: 'link',
                            text: 'Figma for Chakra UI',
                            url: 'https://www.figma.com/community/file/971408767069651759 '
                        }
                    ],
                ]
            },
            // API Routes with Next.js (Remote Zoom Class)
            {
                title: 'API Routes with Next.js (Remote Zoom Class)',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'Nextjs 14 API Routes',
                        },
                        {
                            type: 'link',
                            text: 'Api Routes Docs',
                            url: 'https://nextjs.org/docs/api-routes/introduction'
                        }
                    ],
                ]
            },
            // APIs with Next.js and tRPC (Remote Zoom Class)
            {
                title: 'APIs with Next.js and tRPC (Remote Zoom Class)',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'Build a tRPC CRUD API Example with Next.js',
                        },
                        {
                            type: 'link',
                            text: 'build a trpc crud API example with Next.js',
                            url: 'https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/'
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Stop building REST APIs for your Next.js apps, use tRPC instead',
                        },
                        {
                            type: 'link',
                            text: 'stop building rest apis for your Next.js apps',
                            url: 'https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/'
                        }
                    ],
                ]
            },
            // SQL and Prisma
            {
                title: 'SQL and Prisma',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'Start from scratch with relational databases',
                        },
                        {
                            type: 'link',
                            text: 'relational databases typescript postgress',
                            url: 'https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres'
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'SQL For Beginners Video Tutorial',
                        },
                        {
                            type: 'link',
                            text: 'sql for beginners video tutorial',
                            url: 'https://www.youtube.com/watch?v=5hzZtqCNQKk'
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Database Management Systems and SQL – Tutorial for Beginners',
                        },
                        {
                            type: 'link',
                            text: 'DMS and SQL Basics',
                            url: 'https://www.freecodecamp.org/news/dbms-and-sql-basics/'
                        }
                    ],
                ]
            },
            // Next.js 13 using TailwindCSS (Remote Zoom Class)
            {
                title: 'Next.js 13 using TailwindCSS (Remote Zoom Class)',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'Modern CSS with Tailwind, Second Edition by Noel Rappin',
                        },
                        {
                            type: 'link',
                            text: 'Modern CSS with Tailwind Second Edition',
                            url: 'https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/ '
                        }
                    ],
                ]
            },
            // Web 2.0 Projects
            {
                title: 'Web 2.0 Projects',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'Next.js Projects',
                        },
                        {
                            type: 'link',
                            text: 'Next.js all Projecs',
                            url: 'https://github.com/panaverse/nextjs-projects'
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Styling Next.js Projects using TailwindCSS and Chakra UI',
                        },
                        {
                            type: 'link',
                            text: 'Styling Next.js Projects',
                            url: 'https://github.com/panaverse/styling-nextjs-projects'
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Todo Full-Stack App',
                        },
                        {
                            type: 'link',
                            text: 'full-stack todo app',
                            url: 'https://github.com/ogzhanolguncu/min-todo'
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Build a Twitter Clone',
                        },
                        {
                            type: 'link',
                            text: 'Twitter Clone',
                            url: 'https://www.youtube.com/watch?v=nzJsYJPCc80'
                        }
                    ],
                ]
            },
        ],
        color: "bg-[rgba(99,76,205,0.3)]"
    },
    // Quarter 3 
    {
        id: '3',
        Quarter: "Quarter 3",
        objective: "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
        duration_weeks: 13,
        course_description: [
            "The purpose of this course is to make dollars. You will build Full-Stack Next.js 13 Jamstack Templates and GraphQL APIs."
        ],
        outline: [
            // Earn While You Learn Projects
            {
                title: 'Earn While You Learn Projects',
            },
            // Build Full-Stack Next.js 13 Jamstack Templates
            {
                title: 'Build Full-Stack Next.js 13 Jamstack Templates',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'You will be assigned to build a template which we will sell on Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens. )',
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'The Template Standard',
                        },
                        {
                            type: 'link',
                            text: 'Panaverse Template Standard',
                            url: 'https://github.com/panaverse/panaverse-template-standard'
                        },
                    ]
                ]
            },
            // Build APIs and Products
            {
                title: 'Build APIs and Products',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'You will be assigned to build APIs for which you will sell subscriptions on the Panaverse DAO Marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse token',
                        }
                    ],
                ]
            }
        ],
        color: "bg-[rgba(138,52,209,0.3)]"
    },
]

import metaverse from "/public/assests/metaverse.jpg"
import ai from "/public/assests/ai.jpg"
import CNC from "/public/assests/cloud.jpg"
import ACIT from '/public/assests/ambient.jpg'
import GBS from '/public/assests/genomics.jpg'
import NPAS from '/public/assests/network.jpg'

export const WMDQuarters: IQuarterData[] = [
    // Quarter 4
    {
        id: '4',
        Quarter: "Quarter 4",
        objective: 'W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps',
        color: '',
        course_description: ['In this course, you will learn how to develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test them, and create user interfaces for them. We will also learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc.  Please note that in order to develop Web 3 applications you also need to build on top of Web 2.0 technologies which we have already covered in the previous quarters.'],
        duration_weeks: 13,
        outline: [
            // Blockchain and Metaverse Theory
            {
                title: 'Blockchain and Metaverse Theory',
                children: [
                    // The Metaverse: And How It Will Revolutionize Everything by Matthew Ball
                    [
                        {
                            type: 'text',
                            text: 'The Metaverse: And How It Will Revolutionize Everything by Matthew Ball',
                        },
                        {
                            type: 'link',
                            text: 'metaverse book by matthew ball',
                            url: 'https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0 ',
                        }
                    ],
                    // Mastering Blockchain Book by Imran Bashir
                    [
                        {
                            type: 'text',
                            text: 'Mastering Blockchain - Fourth Edition by Imran Bashir',
                        },
                        {
                            type: 'link',
                            text: 'Mastering Blockchain Book by Imran Bashir',
                            url: 'https://www.packtpub.com/product/mastering-blockchain-fourth-edition/9781803241067',
                        }
                    ],
                ]
            },
            // Smart Contract Development in Solidity 
            {
                title: 'Smart Contract Development in Solidity ',
                children: [
                    // Solidity Programming Essentials - Second Edition By Ritesh Modi
                    [
                        {
                            type: 'text',
                            text: 'Solidity Programming Essentials - Second Edition By Ritesh Modi',
                        },
                        {
                            type: 'link',
                            text: 'Solidity Programming Book By Ritesh Modi',
                            url: 'https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181',
                        }
                    ],
                    // Solidity Learning Repo
                    [
                        {
                            type: 'text',
                            text: 'Solidity Learning Repo',
                        },
                        {
                            type: 'link',
                            text: 'defi dapps solidity smart contracts repo',
                            url: 'https://github.com/panaverse/defi-dapps-solidity-smart-contracts',
                        }
                    ],
                ]
            },
            // Dapp Development using Ethers.js and Next.js 13
            {
                title: 'Dapp Development using Ethers.js and Next.js 13',
                children: [
                    // Dapp Learning Repo
                    [
                        {
                            type: 'text',
                            text: 'Dapp Learning Repo',
                        },
                        {
                            type: 'link',
                            text: 'dapps nextjs repo',
                            url: 'https://github.com/panaverse/dapps-nextjs',
                        }
                    ],
                ]
            },
            // Tokennomics
            {
                title: 'Tokennomics',
            },
            // Blockchain Project: Create a Token and Launch ICO/IEO/IDO
            {
                title: 'Blockchain Project: Create a Token and Launch ICO/IEO/IDO',
                children: [
                    // list of highest crowdfunding projects
                    [
                        {
                            type: 'text',
                            text: `As you probably know, the ICO ("Initial Coin Offering") industry has been booming, and it's completely reinventing the way new startups kickstart themselves. In fact, have a look at Wikipedia's list of highest crowdfunding projects`,
                        },
                        {
                            type: 'link',
                            text: 'list of highest crowdfunding projects',
                            url: 'https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects',
                        },
                        {
                            type: 'text',
                            text: "and you'll notice that blockchain projects absolutely dominate the list.",
                        },
                    ],
                    // Understand the difference between IDO vs. IEO vs. ICO 
                    [
                        {
                            type: 'text',
                            text: "Understand the difference between IDO vs. IEO vs. ICO ",
                        },
                        {
                            type: 'link',
                            text: 'IDO vs. IEO vs. ICO ',
                            url: 'https://phemex.com/blogs/what-is-a-dex-ido',
                        },
                    ],
                    // Also check these links for latest listings:
                    [
                        {
                            type: 'text',
                            text: "Also check these links for latest listings:",
                        },
                    ],
                    // ICO list at ICO Drops
                    [
                        {
                            type: 'link',
                            text: 'ICO list at ICO Drops',
                            url: 'https://icodrops.com ',
                        }
                    ],
                    // ICO List of Best New Initial Coin Offerings
                    [
                        {
                            type: 'link',
                            text: 'ICO List of Best New Initial Coin Offerings',
                            url: 'https://topicolist.com/ ',
                        }
                    ],
                    // Top-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and IDOsTop-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and IDOs 
                    [
                        {
                            type: 'text',
                            text: 'Top-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and IDOsTop-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and IDOs ',
                        },
                        {
                            type: 'link',
                            text: 'ico-list',
                            url: 'https://cryptototem.com/ico-list/ ',
                        },
                        {
                            type: 'link',
                            text: 'ICO List Online',
                            url: 'https://www.icolistingonline.com ',
                        },
                        {
                            type: 'link',
                            text: 'Binance Launchpad',
                            url: 'https://www.coinspeaker.com/ieo/platform/binance-launchpad/',
                        },
                        {
                            type: 'link',
                            text: 'IEO List',
                            url: 'https://icomarks.com/ieo',
                        },
                        {
                            type: 'link',
                            text: 'Polkastarter',
                            url: 'https://polkastarter.com',
                        },
                    ],
                    // Project Part 1: How to Launch a IEO on Binance Launchpad
                    [
                        {
                            type: "sub_heading",
                            text: "Project Part 1: How to Launch a IEO on Binance Launchpad",
                        },
                    ],
                    // 'Read How to Launch an IEO
                    [
                        {
                            type: 'text',
                            text: 'Read How to Launch an IEO',
                        },
                        {
                            type: 'link',
                            text: 'how to launch an ieo',
                            url: 'https://appinventiv.com/blog/how-to-launch-an-ieo/',
                        },
                    ],
                    // how to get started with binance launchpool
                    [
                        {
                            type: 'text',
                            text: 'Your first task of the project is to make a google slides presentation on how to start a IEO on the Binance Launch Pad ',
                        },
                        {
                            type: 'link',
                            text: 'how to get started with binance launchpool',
                            url: 'https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04',
                        },
                    ],
                    // Note
                    [
                        {
                            type: 'note',
                            text: 'Note: Also document the alternatives to Binance Launchpad.',
                        },
                    ],
                    // Project Part 2: How to Launch a IDO on Polkastarter
                    [
                        {
                            type: "sub_heading",
                            text: "Project Part 2: How to Launch a IDO on Polkastarter",
                        },
                    ],
                    // Review the [list of top fundraising platforms 
                    [
                        {
                            type: 'text',
                            text: 'Review the [list of top fundraising platforms ',
                        },
                        {
                            type: 'link',
                            text: 'fundraising platforms',
                            url: 'https://cryptorank.io/fundraising-platforms',
                        },
                    ],
                    // IDO on the Polkastarte
                    [
                        {
                            type: 'text',
                            text: 'Your second task of the project is to make a google slides presentation on how to start a IDO on the Polkastarte',
                        },
                        {
                            type: 'link',
                            text: 'Polkastarter',
                            url: 'https://polkastarter.com/',
                        },
                    ],
                    // Project Part 3: Create a Pako Token
                    [
                        {
                            type: "sub_heading",
                            text: "Project Part 3: Create a Pako Token",
                        },
                    ],
                    // creating a token and related contracts
                    [
                        {
                            type: 'text',
                            text: "By creating a token and related contracts, you'll also learn how to handle money sent to your contracts, which should come in handy if you want to create some kind of paid decentralized service in the future.",
                        },
                    ],
                    // crowd sale (the ICO).
                    [
                        {
                            type: 'text',
                            text: "Therefore, for the sake of this chapter, let's imagine that our  Pako DApp uses its own coin – the Pako Token. We will create two contracts – one for the token itself and one for the token crowd sale (the ICO).",
                        },
                    ],
                    // Pako ERC20 Token
                    [
                        {
                            type: 'text',
                            text: "Now Create your own Pako ERC20 Token and deploy it on a testnet. The Token should be to use OpenZeppelin contracts. You will use the Hardhat development environment. Also, write at least twenty automated tests. We will be using Solidity and Typescript for development.",
                        },
                    ],
                    // Project Part 4: Develop Crowd Sale Contract
                    [
                        {
                            type: "sub_heading",
                            text: "Project Part 4: Develop Crowd Sale Contract",
                        },
                    ],
                    // exchange ETH for our Pako Token
                    [
                        {
                            type: 'text',
                            text: "This contract will be responsible for allowing users to exchange ETH for our Pako Token. In order to do that we need to set a price for our token (1 ETH = 100 Pako Token)",
                        },
                    ],
                    // Implement a payable buyToken() function
                    [
                        {
                            type: 'text',
                            text: "Implement a payable buyToken() function",
                        },
                    ],
                    // Emit a BuyTokens
                    [
                        {
                            type: 'text',
                            text: "Emit a BuyTokens event that will log who’s the buyer, the amount of ETH sent and the amount of Token bought",
                        },
                    ],
                    // Crowd Sale contract at deployment time
                    [
                        {
                            type: 'text',
                            text: "Transfer 75% of the Tokens to the Crowd Sale contract at deployment time. i.e. Right after the contract is deployed, we want the token contract to send 75% of our token supply to it. While 25% remain in our personal 'owner' account.",
                        },
                    ],
                    // ownership of the Crowd Sale contract
                    [
                        {
                            type: 'text',
                            text: "Transfer the ownership of the Crowd Sale contract (at deploy time) to our frontend address so that we are able to withdraw the ETH.",
                        },
                    ],
                    // openzeppelin crowdsales contracts
                    [
                        {
                            type: 'text',
                            text: "You can use the openzeppelin crowd sale contracts ",
                        },
                        {
                            type: 'link',
                            text: "openzeppelin crowdsales contracts",
                            url: 'https://docs.openzeppelin.com/contracts/4.x/crowdsales'
                        },
                        {
                            type: 'text',
                            text: "however you will have to update the code to the latest solidity version",
                        },
                    ],
                    // transaction of 1 ETH
                    [
                        {
                            type: 'text',
                            text: "Also write extensive tests, for example we will simply send a transaction of 1 ETH from a random account to the contract. After the transaction, we should expect the account to have received Pako, while the contract's balance should have been reduced.",
                        },
                    ],
                    // Note
                    [
                        {
                            type: 'note',
                            text: 'Note: Before you get started writing the token contract we suggest you review the access control',
                        },
                        {
                            type: 'link',
                            text: 'access-control',
                            url: 'https://docs.openzeppelin.com/contracts/4.x/access-control'
                        },
                    ],
                    // Project Part 5: Trying it with MetaMask
                    [
                        {
                            type: "sub_heading",
                            text: "Project Part 5: Trying it with MetaMask",
                        },
                    ],
                    //  MetaMask wallet!
                    [
                        {
                            type: 'text',
                            text: "While it's always good to test your code, it's often more satisfying to see the results of your work wrapped in a nice UI. Let's see how we can deploy our contracts and get some Pako tokens into our MetaMask wallet!",
                        },
                    ],
                    // new token contracts
                    [
                        {
                            type: 'text',
                            text: "We start by running our deployment scripts for the test network so that the new token contracts are uploaded and deployed.",
                        },
                    ],
                    // contracts were uploaded to and copy it!
                    [
                        {
                            type: 'text',
                            text: "When it's done, take note of what addresses the contracts were uploaded to and copy it!",
                        },
                    ],
                    //  MetaMask wallet doesn't have any ethers
                    [
                        {
                            type: 'text',
                            text: "Now head to MetaMask, and send a transaction of 1 ETH to the crowd sale contract address. If your MetaMask wallet doesn't have any ethers, remember that you can use any faucet.",
                        },
                    ],
                    // transaction has been confirmed
                    [
                        {
                            type: 'text',
                            text: "After the transaction has been confirmed, you might be confused about why you can't see any tokens in your wallet. It turns out that you need to manually add the token address in MetaMask in order to 'register' it – after all, there are so many tokens out there, there's no way MetaMask could list them all by default!",
                        },
                    ],
                    // "Add token" button
                    [
                        {
                            type: 'text',
                            text: 'To do this, open the side menu and click on the "Add token" button to get started:',
                        },
                    ],
                    // Add custom token
                    [
                        {
                            type: 'text',
                            text: `Once you're on the token page, click on "Add custom token" and paste in the token contract's address in the address field.`,
                        },
                    ],
                    // Pako balance right next to your ETH balance in the wallet
                    [
                        {
                            type: 'text',
                            text: "After confirming that you want to add the token, you should be able to see your Pako balance right next to your ETH balance in the wallet. How cool!",
                        },
                    ],
                    //Project Part 6: Trying it with Multisignature Wallets
                    [
                        {
                            type: "sub_heading",
                            text: "Project Part 6: Trying it with Multisignature Wallets",
                        },
                    ],
                    //  multisignature wallets can keep your coins safer if you use them right
                    [
                        {
                            type: 'text',
                            text: "Read ",
                        },
                        {
                            type: 'text',
                            text: "multisignature wallets can keep your coins safer if you use them right",
                            url: 'https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/ '
                        },
                    ],
                    // Gnosis Safe
                    [
                        {
                            type: 'text',
                            text: "Now use Gnosis Safe with multi-sigs to do what you did in the last part.",
                        },
                        {
                            type: 'text',
                            text: "Gnosis Safe",
                            url: 'https://gnosis-safe.io/ '
                        },
                    ],
                    //Project Part 7: Sending Tokens using Ethers.js 
                    [
                        {
                            type: "sub_heading",
                            text: "Project Part 6: Trying it with Multisignature Wallets",
                        },
                    ],
                    // Write a Typescript program to send Pako Token to some friend's address using Ethers.js.
                    [
                        {
                            type: 'text',
                            text: "Write a Typescript program to send Pako Token to some friend's address using Ethers.js.",
                        },
                    ],
                    // You may follow this tutorial 
                    [
                        {
                            type: 'text',
                            text: "You may follow this tutorial ",
                            url: 'https://ethereum.org/en/developers/tutorials/send-token-etherjs/ '
                        },
                    ],
                    //Project Part 8 Advance: Create, Deploy, Mint, and Sell an NFT 
                    [
                        {
                            type: "sub_heading",
                            text: "Project Part 8 Advance: Create, Deploy, Mint, and Sell an NFT ",
                        },
                    ],
                    // how to write and deploy an nft
                    [
                        {
                            type: 'text',
                            text: "Read this NFT tutorial series",
                        },
                        {
                            type: 'link',
                            text: "how to write and deploy an nft",
                            url: 'https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/ '
                        },
                    ],
                    // "NFT contract using the openzepplen erc721 nft standard
                    [
                        {
                            type: 'text',
                            text: "Create a NFT contract using the [OpenZepplen ERC721 NFT Standard",
                        },
                        {
                            type: 'link',
                            text: "NFT contract using the openzepplen erc721 nft standard",
                            url: 'https://docs.openzeppelin.com/contracts/4.x/erc721 '
                        },
                    ],
                    // Presets erc721 contract
                    [
                        {
                            type: 'text',
                            text: "You may use the Preset ERC721 contract ",
                        },
                        {
                            type: 'link',
                            text: "Presets erc721 contract",
                            url: 'https://docs.openzeppelin.com/contracts/4.x/erc721#Presets '
                        },
                    ],
                    //OpenSea Marketplace
                    [
                        {
                            type: 'text',
                            text: "Deploy your NFT contract on a testnet, mint it, and view it on the MetaMask wallet and list it on OpenSea Marketplace for sale.",
                        },
                        {
                            type: 'link',
                            text: "OpenSea Marketplace",
                            url: 'https://opensea.io/'
                        },
                    ],
                    // Implement a ERC721 Market 
                    [
                        {
                            type: 'text',
                            text: "Implement a ERC721 Market",
                        },
                        {
                            type: 'link',
                            text: "how to Implement a ERC721 Market",
                            url: 'https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/'
                        },
                    ],
                ]
            },
        ]
    },
    // Quarter 5
    {
        id: '5',
        Quarter: "Quarter 5",
        objective: 'MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences',
        color: '',
        course_description: [
            "The Web is the Metaverse. The metaverse requires an infrastructure that connects all of the metaverses so that we can travel between them. This is only achievable with open web-based metaverses. The internet and its browsers are magical. Federated but linked experiences connect pages, people, technology, businesses, standards, and nations. It's unlike anything else. The metaverse should replicate the best qualities of the web - it should just be the web. We just have to extend online responsive design from mobile to desktop to 3D, Augmented Reality, and Virtual Reality. This course will teach you how to build the Open Social Spatial Web with WebXR and WebGPU technologies."],
        duration_weeks: 13,
        outline: [
            // Open Metaverse Web Development
            {
                title: 'Open Metaverse Web Development',
                children: [
                    // Open Metaverse Learning Repo 
                    [
                        {
                            type: 'link',
                            text: 'Open Metaverse Learning Repo ',
                            url: 'https://github.com/panaverse/metaverse-web',
                        }
                    ],
                ]
            },
            // Blender 3D asset Creation for the Metaverse (Remote Zoom Class)
            {
                title: 'Blender 3D asset Creation for the Metaverse (Remote Zoom Class)',
                children: [
                    // Blender development 
                    [
                        {
                            type: 'text',
                            text: 'Blender development is being funded by heavyweights in the real-time 3D (RT3D) space such as Apple, Unity, AMD, Intel, Meta, NVIDIA, AWS, Epic Games, Adobe, Microsoft, and Decentraland. It is expected to become the standard asset creation tool for metaverse.',
                        }
                    ],
                    // Blender 3.3+
                    [
                        {
                            type: 'text',
                            text: 'Blender 3.3+ Download',
                        },
                        {
                            type: 'text',
                            text: 'Download',
                            url: 'https://www.blender.org/download/'
                        },
                    ],
                    // Beginner Tutorial
                    [
                        {
                            type: 'link',
                            text: 'Blender 3.0 Beginner Tutorial',
                            url: 'https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD'
                        }
                    ],
                    // Blender 3.0 Hotkey
                    [
                        {
                            type: 'link',
                            text: 'Blender 3.0 Hotkey',
                            url: 'https://docs.google.com/document/d/1zPBgZAdftWa6WVa7UIFUqW_7EcqOYE0X743RqFuJL3o/edit'
                        }
                    ],
                    //Blender by Example 2nd Edition
                    [
                        {
                            type: 'text',
                            text: 'Blender Projects Textbook: Blender by Example 2nd Edition',
                        },
                        {
                            type: 'text',
                            text: 'blender 3d by example second edition',
                            url: 'https://www.packtpub.com/product/blender-3d-by-example-second-edition/978'
                        },
                    ],
                    // Complete Guide Blender Graphics Animation
                    [
                        {
                            type: 'text',
                            text: 'Blender Textbook: The Complete Guide to Blender Graphics: Computer Modeling & Animation 7th Edition by John M. Blain ',
                        },
                        {
                            type: 'text',
                            text: 'Complete Guide Blender Graphics Animation',
                            url: 'https://www.amazon.com/Complete-Guide-Blender-Graphics-Animation/dp/103212167X/ref=sr_1_5'
                        },
                    ],
                    // Best Hardware Performance for Blender Rendering 
                    [
                        {
                            type: 'text',
                            text: 'Best Hardware Performance for Blender Rendering ',
                        },
                        {
                            type: 'text',
                            text: 'best hardware performance for blender rendering ',
                            url: 'https://www.youtube.com/watch?v=H7T0SzdFHwg '
                        },
                    ],
                    //Assignment 1: 
                    [
                        {
                            type: "sub_heading",
                            text: "Assignment 1: ",
                        },
                    ],
                    // Build a 3D Donut using Blender 3
                    [
                        {
                            type: 'text',
                            text: "Build a 3D Donut using Blender 3 as shown in these video tutorials ",
                        },
                        {
                            type: 'link',
                            text: "Build a 3D Donut using Blender 3",
                            url: 'https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD '
                        },
                    ],
                    //Assignment 2: 
                    [
                        {
                            type: "sub_heading",
                            text: "Assignment 2: ",
                        },
                    ],
                    // Build a Viking Scene using Blender 3
                    [
                        {
                            type: 'text',
                            text: "Build a Viking Scene using Blender 3 as shown in chapter 2 of the Book [Blender by Example 2nd Edition ",
                        },
                        {
                            type: 'link',
                            text: "Build a Viking Scene using Blender 3",
                            url: 'https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561'
                        },
                    ],
                    //Assignment 3: 
                    [
                        {
                            type: "sub_heading",
                            text: "Assignment 3: ",
                        },
                    ],
                    // Modeling a Time Machine using Blender 3
                    [
                        {
                            type: 'text',
                            text: "Modeling a Time Machine using Blender 3 as shown in chapters 3 and 4 of the Book Blender by Example 2nd Edition",
                        },
                        {
                            type: 'link',
                            text: "Modeling a Time Machine using Blender 3",
                            url: 'https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561'
                        },
                    ],
                    //Assignment 4: 
                    [
                        {
                            type: "sub_heading",
                            text: "Assignment 4: ",
                        },
                    ],
                    // Build a Modern Kitchen using Blender 3
                    [
                        {
                            type: 'text',
                            text: "Build a Modern Kitchen using Blender 3 as shown in chapters 5, 6, and 7 of the Book Blender by Example 2nd Edition ",
                        },
                        {
                            type: 'link',
                            text: "Build a Modern Kitchen using Blender 3",
                            url: 'https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561'
                        },
                    ],
                    //Assignment 5: 
                    [
                        {
                            type: "sub_heading",
                            text: "Assignment 5: ",
                        },
                    ],
                    // Illustrating an Alien Hero with Grease Pencil
                    [
                        {
                            type: 'text',
                            text: "Illustrating an Alien Hero with Grease Pencil as shown in chapter 8 of the Book Blender by Example 2nd Edition",
                        },
                        {
                            type: 'link',
                            text: "Illustrating an Alien Hero with Grease Pencil",
                            url: 'https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561'
                        },
                    ],
                    //Assignment 6: 
                    [
                        {
                            type: "sub_heading",
                            text: "Assignment 1: ",
                        },
                    ],
                    // Build a 3D Sword in the Stone using Blender 3
                    [
                        {
                            type: 'text',
                            text: "Build a 3D Sword in the Stone using Blender 3 as shown in these video tutorials",
                        },
                        {
                            type: 'link',
                            text: "Build a 3D Sword in the Stone using Blender 3",
                            url: 'https://www.youtube.com/watch?v=bpvh-9H8S1g '
                        },
                    ],
                ]
            },
        ]
    },
]
export const AiQuarters: IQuarterData[] = [
    // Quarter 4
    {
        id: '4',
        Quarter: "Quarter 4",
        objective: 'AI-351: Developing Planet-Scale Intelligent APIs and Python Programming',
        color: '',
        course_description: [`Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. The AI and Deep Learning Specialization is a foundational program that will aid in your comprehension of deep learning's potential, difficulties, and effects as well as equip you to take part in the creation of cutting-edge AI technology.`,
            `We will start this course by understanding the fundamentals and use cases for AI and move on to building next-gen intelligent apps using OpenAI’s powerful models and Next.js 13.`,
            `We'll conclude the course by learning about basic programming concepts using Python, such as lists, dictionaries, classes, functions, and loops, and practice writing clean and readable code with exercises for each topic. We'll also learn how to make your programs interactive and how to test your code safely before adding it to a project. It is a fast-paced, thorough introduction to programming with Python 3.10+ that will have you writing programs, solving problems, and making things that work in no time. In this quarter we will also learn Git, the distributed version control system. We will also review Git-based GitHub services.`],
        duration_weeks: 13,
        outline: [
            // Introduction to Machine Learning, Data Science, and AI
            {
                title: 'Introduction to Machine Learning, Data Science, and AI',
                children: [
                    // AI for Everyone
                    [
                        {
                            type: 'text',
                            text: 'AI for Everyone',
                        },
                        {
                            type: 'link',
                            text: 'learn ai-for-everyone',
                            url: 'https://www.coursera.org/learn/ai-for-everyone',
                        }
                    ],
                    // AI for Everyone Quiz
                    [
                        {
                            type: 'text',
                            text: 'AI for Everyone Quiz in Week 3',
                        },
                        {
                            type: 'text',
                            text: 'Total Questions: 60, Total Time: 75 minutes',
                        }
                    ],
                ]
            },
            // Building Next-Gen Intelligent Apps with OpenAI’s Powerful Models We will cover GPT-4, ChatGPT, etc. and Next.js 13
            {
                title: `Building Next-Gen Intelligent Apps with OpenAI’s Powerful Models 
                We will cover GPT-4, ChatGPT, etc. and Next.js 13`,
                children: [
                    // Openai Api
                    [
                        {
                            type: 'link',
                            text: 'Openai Api',
                            url: 'https://openai.com/api/',
                        }
                    ],
                    // gpt-4-is-coming-soon-heres-what-we-know-about-it
                    [
                        {
                            type: 'link',
                            text: 'gpt-4-is-coming-soon-heres-what-we-know-about-it',
                            url: 'https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45 s',
                        }
                    ],
                ]
            },
            // Python Crash Course  for TypeScript Developers
            {
                title: 'Python Crash Course  for TypeScript Developers',
                children: [
                    // Dapp Learning Repo
                    [
                        {
                            type: 'text',
                            text: 'Python Crash Course, 2nd Edition: A Hands-On, Project-Based Introduction to Programming 2nd Edition',
                        },
                        {
                            type: 'link',
                            text: 'Python Crash Course 2nd Edition',
                            url: 'https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_5 ',
                        }
                    ],
                ]
            },
        ]
    },
    // Quarter 5
    {
        id: '5',
        Quarter: "Quarter 5",
        objective: 'AI-361: Deep Learning and MLOps',
        color: '',
        course_description: [
            "This course will help you understand the capabilities, challenges, and consequences of deep learning and prepare you to participate in the development of leading-edge AI technology. We will finish the program by learning how to envision, create, and maintain integrated systems that run constantly in production. Production systems must manage constantly changing data, in stark contrast to typical machine learning modeling. The production system must also operate continuously at the lowest possible cost while delivering the highest possible performance."],
        duration_weeks: 13,
        outline: [
            // Deep Learning with Tensorflow
            {
                title: 'Deep Learning with Tensorflow',
                children: [
                    // Deep Learning with Python, Second Edition 2nd Edition
                    [
                        {
                            type: 'text',
                            text: 'Deep Learning with Python, Second Edition 2nd Edition',
                        },
                        {
                            type: 'link',
                            text: 'Deep Learning by Second Edition',
                            url: 'https://www.amazon.com/Learning-Python-Second-Fran%C3%A7ois-Chollet/dp/1617296864/ref=sr_1_2',
                        }
                    ],
                ]
            },
            // Machine Learning Engineering for Production (MLOps) using Terraform for CDK
            {
                title: 'Machine Learning Engineering for Production (MLOps) using Terraform for CDK',
                children: [
                    // A Comprehensive Guide to MLOps Terraform: Infrastructure As Code(IaC)
                    [
                        {
                            type: 'text',
                            text: 'A Comprehensive Guide to MLOps Terraform: Infrastructure As Code(IaC)',
                        },
                        {
                            type: 'link',
                            text: 'a comprehensive guide to mlops infrastructure as code iac',
                            url: 'https://betterprogramming.pub/a-comprehensive-guide-to-mlops-infrastructure-as-code-iac-ef4c97742351 '
                        },
                    ],
                    // MLOps leveraging AWS SageMaker and Terraform
                    [
                        {
                            type: 'text',
                            text: 'MLOps leveraging AWS SageMaker and Terraform',
                        },
                        {
                            type: 'link',
                            text: 'mlops leveraging aws sagemaker terraform',
                            url: 'https://towardsdatascience.com/mlops-leveraging-aws-sagemaker-terraform-and-gitlab-e7d97eaa6dce'
                        },
                    ],
                ]
            },
        ]
    },
]

export const CNCQuarters: IQuarterData[] = [
    // Quarter 4
    {
        id: '4',
        Quarter: "Quarter 4",
        objective: 'CN-351: Certified Kubernetes Application Developer (CKAD)',
        color: '',
        course_description: [`Cloud-native architecture and technologies are an approach to designing, constructing, and operating workloads that are built in the cloud and take full advantage of the cloud computing model. Cloud-native technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds. Containers, service meshes, microservices, immutable infrastructure, and declarative APIs exemplify this approach.`,
            `These techniques enable loosely coupled systems that are resilient, manageable, and observable. Combined with robust automation, they allow engineers to make high-impact changes frequently and predictably with minimal toil.`,
            `Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications. In this course, you will learn how to develop cloud applications using cloud-native technologies like Containers, Kubernetes, and CDK for Kubernetes.`],
        duration_weeks: 13,
        outline: [
            //Kubernetes: Up and Running: Dive into the Future of Infrastructure 3rd Edition
            {
                title: 'Kubernetes: Up and Running: Dive into the Future of Infrastructure 3rd Edition',
                children: [
                    // Kubernetes Running Dive Future Infrastructure
                    [
                        {
                            type: 'link',
                            text: 'Kubernetes Running Dive Future Infrastructure',
                            url: 'https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_3 ',
                        }
                    ],
                ]
            },
            // Cloud Development Kit for Kubernetes 
            {
                title: 'Cloud Development Kit for Kubernetes',
                children: [
                    // Cloud Development Kit for Kubernetes
                    [
                        {
                            type: 'link',
                            text: 'Cloud Development Kit',
                            url: 'https://cdk8s.io/',
                        }
                    ],
                ]
            },
        ]
    },
    // Quarter 5
    {
        id: '5',
        Quarter: "Quarter 5",
        objective: 'CN-361: Developing Multi-Cloud Apps using CDK for Terraform',
        color: '',
        course_description: [
            `Terraform lets you use the same workflow to manage multiple providers and handle cross-cloud dependencies. This simplifies management and orchestration for large-scale, multi-cloud infrastructures.`,
            `Cloud Development Kit for Terraform (CDKTF) allows you to use familiar programming languages to define and provision infrastructure. This gives you access to the entire Terraform ecosystem without learning HashiCorp Configuration Language (HCL) and lets you leverage the power of your existing toolchain for testing, dependency management, etc.`],
        duration_weeks: 13,
        outline: [
            // CDK for Terraform
            {
                title: 'CDK for Terraform',
                children: [
                    // Open Metaverse Learning Repo 
                    [
                        {
                            type: 'link',
                            text: 'CDK for Terraform',
                            url: 'https://developer.hashicorp.com/terraform/cdktf',
                        }
                    ],
                ]
            },
        ]
    },
]
export const ACITQuarters: IQuarterData[] = [
    // Quarter 4
    {
        id: '4',
        Quarter: "Quarter 4",
        objective: 'AC-351: Ambient Computing with Voice Assistants and Matter Devices',
        color: '',
        course_description: [`Ambient computing, also commonly referred to as ubiquitous computing, is the concept of blending computing power into our everyday lives in a way that is embedded into our surroundings - invisible but useful. In a multi-device world, people don't want to spend their life fussing with technology. An ambient approach gets the tech out of your way so you can live your life while getting the help you need. It doesn't matter what device you're using, what context you're in, whether you're talking, typing, or tapping. The technology in your life works together seamlessly. Ambient computing uses all aspects of modern-day technology, including voice assistants, artificial intelligence, sensors, connectivity, cloud computing and more.`,
            `If you were thinking that the IoT and ambient computing sound a lot alike, you aren't wrong; the two concepts are intertwined. IoT refers to the vast array of devices that connect to the internet to optimize their functionality, like smart sensors and smart speakers: ambient computing builds on that. Ambient computing focuses on the interaction between these devices once they are connected.`,
            `Matter, the next-generation smart home standard, solves many smart home pain points while bringing all our IoT devices together. Some of the biggest tech companies are working together to make Matter a unified protocol for future smart homes. These companies include Apple, Amazon, and Google. This means Apple HomeKit, Amazon Alexa, Samsung SmartThings, Google Nest, and Samsung SmartThings will support the Matter standard by default for all new devices.`,
            `In this course we will learn to build smart homes with Amazon Alexa and Matter protocol. `],
        duration_weeks: 13,
        outline: [
            // Alexa Skill Developement 
            {
                title: 'Alexa Skill Developement ',
                children: [
                    // Alexa Skill Developement 
                    [
                        {
                            type: 'link',
                            text: 'Alexa Skill Developement ',
                            url: 'https://developer.amazon.com/en-US/alexa',
                        }
                    ],
                ]
            },
            // Alexa with Matter Protocol
            {
                title: 'Alexa with Matter Protocol',
                children: [
                    // Alexa with Matter Protocol
                    [
                        {
                            type: 'link',
                            text: 'Solidity Programming Book By Ritesh Modi',
                            url: 'https://developer.amazon.com/en-US/alexa/matter ',
                        }
                    ],
                    // alexa device-makers
                    [
                        {
                            type: 'link',
                            text: 'alexa device-makers',
                            url: 'https://developer.amazon.com/en-US/blogs/alexa/device-makers/2022/07/alexa-live-2022-ack-sdk-matter.html',
                        }
                    ],
                ]
            },
        ]
    },
    // Quarter 5
    {
        id: '5',
        Quarter: "Quarter 5",
        objective: 'AC-361: Embedded Programming using C and Rust',
        color: '',
        course_description: [`This is an introductory course about using the C and Rust Programming Languages on "Bare Metal" embedded systems, such as Microcontrollers. We will start by introducing embedded systems and move on to learn the  C++ and Rust programming languages. We'll learn about basic programming concepts using C and Rust, then we will explore key concepts in electronics, microcontrollers, and embedded programming. It is a fast-paced,  thorough introduction to programming with C and Rust that will have you writing programs, solving problems, burning your code on microcontrollers,  playing with GPIOs, and making things that work in no time.`],
        duration_weeks: 13,
        outline: [
            // Introduction to the Internet of Things and Embedded Systems (Weeks 1 and 2) 
            {
                title: 'Introduction to the Internet of Things and Embedded Systems (Weeks 1 and 2)',
                children: [
                    // Introduction to the Internet of Things and Embedded Systems (Weeks 1 and 2) 
                    [
                        {
                            type: 'link',
                            text: 'Intro to internet of things and embedded sysetems',
                            url: 'https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=sharing',
                        },
                        {
                            type: 'text',
                            text: 'What is the Fourth Industrial Revolution?',
                        },
                        {
                            type: 'text',
                            text: 'What is IoT?',
                        },
                        {
                            type: 'text',
                            text: 'Embedded Systems',
                        },
                        {
                            type: 'text',
                            text: 'Hardware and Software for IoT',
                        },
                        {
                            type: 'text',
                            text: 'Edge and Cloud Computing',
                        },
                        {
                            type: 'text',
                            text: 'The future of IoT is AI ',
                        },
                        {
                            type: 'text',
                            text: 'Blockchain in the Internet of Things?',
                        },
                        {
                            type: 'text',
                            text: 'IoT + AI + Blockchain: The Fourth Industrial Revolution has begun',
                        },
                        {
                            type: 'text',
                            text: 'How will Matter change the IoT Infrastructure and address issue',
                        },
                        {
                            type: 'text',
                            text: 'Metaverse and IoT',
                        },
                    ],
                    // Mid-Term I: Introduction to the Internet of Things (IoT) Qui
                    [
                        {
                            type: 'h2',
                            text: 'Mid-Term I: Introduction to the Internet of Things (IoT) Quiz in Week 3',
                        },
                        {
                            type: 'text',
                            text: 'Total Questions: 46, Total Time: 60 minutes',
                        },
                    ]
                ]
            },
            // The C Reference Book: The C programming language
            {
                title: 'The C Reference Book: The C programming language',
                children: [
                    // The C Reference Book: The C programming language
                    [
                        {
                            type: 'text',
                            text: 'Embedded Programming book: Internet of things with ESP8266',
                        },
                        {
                            type: 'link',
                            text: 'Download',
                            url: 'https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing',
                        },
                    ],
                ]
            },
            // Introduction to C Part 1 (Weeks 3B, 4, and 5) 
            {
                title: 'Introduction to C Part 1 (Weeks 3B, 4, and 5) ',
                children: [
                    // The C Reference Book: The C programming language
                    [
                        {
                            type: "text",
                            text: "C environment Setup for (Windows, Linux, and Mac OS systems)",
                        },
                        {
                            type: "text",
                            text: "Chapters 1-2 of  “The C programming language” ",
                        }
                    ],
                    // nested
                    [
                        {
                            type: 'nested',
                            children: [
                                // 'Variable names types'
                                [
                                    {
                                        type: 'text',
                                        text: 'Variable names types'
                                    }
                                ],
                                // Data types and sizes
                                [
                                    {
                                        type: 'text',
                                        text: 'Data types and sizes'
                                    }
                                ],
                                // Constants
                                [
                                    {
                                        type: 'text',
                                        text: 'Constants'
                                    }
                                ],
                                // Arithmetic operations
                                [
                                    {
                                        type: 'text',
                                        text: 'Arithmetic operations'
                                    }
                                ],
                                // Logical and relational operators
                                [
                                    {
                                        type: 'text',
                                        text: 'Logical and relational operators'
                                    }
                                ],
                                // Type conversions.
                                [
                                    {
                                        type: 'text',
                                        text: 'Type conversions.'
                                    }
                                ],
                                // Bitwise operators
                                [
                                    {
                                        type: 'text',
                                        text: 'Bitwise operators'
                                    }
                                ],
                                // Conditional expressions.
                                [
                                    {
                                        type: 'text',
                                        text: 'Conditional expressions.'
                                    }
                                ],
                            ]
                        }
                    ],
                    // Programming Assignments will also be given.
                    [
                        {
                            type: "text",
                            text: "Programming Assignments will also be given.",
                        },
                    ]
                ]
            },
            // C Programming Part 2 (Weeks 6 and 7) 
            {
                title: 'C Programming Part 2 (Weeks 6 and 7) ',
                children: [
                    // Topics 3 and 4  of  “The C programming language”
                    [
                        {
                            type: "text",
                            text: "Topics 3 and 4  of  “The C programming language”",
                        },
                    ],
                    // nested
                    [
                        {
                            type: 'nested',
                            children: [
                                // Control flow statements (else if, loops, switch, break continue)
                                [
                                    {
                                        type: 'text',
                                        text: 'Control flow statements (else if, loops, switch, break continue)'
                                    }
                                ],
                                // Function and Program structure(Returning and non-returning, scope rules, Recursion)
                                [
                                    {
                                        type: 'text',
                                        text: 'Function and Program structure(Returning and non-returning, scope rules, Recursion)'
                                    }
                                ],
                            ]
                        }
                    ],
                    [
                        {
                            type: "text",
                            text: "Programming Assignments will also be given.",
                        },
                    ]
                ]
            },
            // Introduction to Embedded systems Part 1 (Weeks 8) 
            {
                title: 'C Programming Part 2 (Weeks 6 and 7) ',
                children: [
                    // Basic Electronics and Introduction to microcontrollers
                    [
                        {
                            type: "text",
                            text: "Basic Electronics and Introduction to microcontrollers",
                        },
                        {
                            type: "text",
                            text: "Chapter 1 of  “Internet of things with ESP8266”",
                        }
                    ],
                    // nested
                    [
                        {
                            type: 'nested',
                            children: [
                                // Arduino IDE installation and env setup for ESP8266
                                [
                                    {
                                        type: 'text',
                                        text: 'Arduino IDE installation and env setup for ESP8266'
                                    }
                                ],
                                // Function and Program structure(Returning and non-returning, scope rules, Recursion)
                                [
                                    {
                                        type: 'text',
                                        text: 'Burning your first code on ESP8266'
                                    }
                                ],
                            ]
                        }
                    ],
                    [
                        {
                            type: "text",
                            text: "Programming Assignments will also be given.",
                        },
                    ],
                    // Mid-Term I: Introduction to the Internet of Things (IoT) Qui
                    [
                        {
                            type: 'h2',
                            text: 'Mid-Term II: C Programming Quiz 1 in Week 9 ',
                        },
                        {
                            type: 'text',
                            text: 'Total Questions: 62, Total Time: 75 minutes ',
                        },
                    ]
                ]
            },
            // Introduction to Embedded systems Part 2 (Weeks 9-12) 
            {
                title: 'Introduction to Embedded systems Part 2 (Weeks 9-12) ',
                children: [
                    // Chapters 2-5 of  “Internet of things with ESP8266” 
                    [
                        {
                            type: "text",
                            text: "Chapters 2-5 of  “Internet of things with ESP8266” ",
                        },
                    ],
                    // nested
                    [
                        {
                            type: 'nested',
                            children: [
                                // Connecting your hardware to wifi.
                                [
                                    {
                                        type: 'text',
                                        text: 'Connecting your hardware to wifi.'
                                    }
                                ],
                                // wifimanager with esp8266 autoconnect custom parameter and manage your ssid and password
                                [
                                    {
                                        type: 'link',
                                        text: 'wifimanager with esp8266 autoconnect custom parameter and manage your ssid and password',
                                        url: 'https://randomnerdtutorials.com/wifimanager-with-esp8266-autoconnect-custom-parameter-and-manage-your-ssid-and-password/ '
                                    }
                                ],
                                // Reading data from GPIOs.
                                [
                                    {
                                        type: 'text',
                                        text: 'Reading data from GPIOs.'
                                    }
                                ],
                                //esp8266 nodemcu digital inputs and digital outputs (arduino ide)
                                [
                                    {
                                        type: 'link',
                                        text: `esp8266 nodemcu digital inputs and digital outputs (arduino ide)`,
                                        url: 'https://randomnerdtutorials.com/esp8266-nodemcu-digital-inputs-outputs-arduino/#:~:text=ESP8266%20NodeMCU%20Read%20Digital%20Inputs,number'
                                    }
                                ],
                                // Controlling LEDs.
                                [
                                    {
                                        type: 'text',
                                        text: 'Controlling LEDs.'
                                    }
                                ],
                                //Reading data from digital sensors. 
                                [
                                    {
                                        type: 'text',
                                        text: 'Reading data from digital sensors. '
                                    }
                                ],
                                //esp32 dht11 dht22 temperature humidity sensor arduino ide
                                [
                                    {
                                        type: 'link',
                                        text: "tutorials of esp32 dht11 dht22 temperature humidity sensor arduino ide",
                                        url: 'https://randomnerdtutorials.com/esp32-dht11-dht22-temperature-humidity-sensor-arduino-ide/ '
                                    }
                                ],
                                //Cloud data logging.
                                [
                                    {
                                        type: 'link',
                                        text: "Cloud data logging.",
                                        url: 'https://tttapa.github.io/ESP8266/Chap16%20-%20Data%20Logging.html'
                                    }
                                ],
                                //nodemcu-datalogger-to-save-temperature-and-pressure-data-on-thinger-io-cloud-platform
                                [
                                    {
                                        type: 'link',
                                        text: "nodemcu-datalogger-to-save-temperature-and-pressure-data-on-thinger-io-cloud-platform",
                                        url: 'https://circuitdigest.com/microcontroller-projects/nodemcu-datalogger-to-save-temperature-and-pressure-data-on-thinger-io-cloud-platform'
                                    }
                                ],
                                //nodemcu-data-logger-to-upload-data-on-webserver
                                [
                                    {
                                        type: 'link',
                                        text: "nodemcu-data-logger-to-upload-data-on-webserver",
                                        url: 'https://iotdesignpro.com/projects/nodemcu-data-logger-to-upload-data-on-webserver'
                                    }
                                ],
                                //Displaying data on the cloud. 
                                [
                                    {
                                        type: 'text',
                                        text: 'Displaying data on the cloud. '
                                    }
                                ],
                                //NodeMCU-DHT-Data-to-Arduino-IoT-Cloud
                                [
                                    {
                                        type: 'link',
                                        text: "NodeMCU-DHT-Data-to-Arduino-IoT-Cloud",
                                        url: 'https://github.com/adesolasamuel/NodeMCU-DHT-Data-to-Arduino-IoT-Cloud'
                                    }
                                ],
                                //Controlling controller remotely. 
                                [
                                    {
                                        type: 'text',
                                        text: 'Controlling controller remotely. '
                                    }
                                ],
                                //Control-ESP8266-Over-the-Internet-from-Anywhere
                                [
                                    {
                                        type: 'link',
                                        text: "Control-ESP8266-Over-the-Internet-from-Anywhere",
                                        url: 'https://www.instructables.com/Control-ESP8266-Over-the-Internet-from-Anywhere/'
                                    }
                                ],
                                //Controlling a lamp anywhere in the world.  
                                [
                                    {
                                        type: 'text',
                                        text: 'Controlling a lamp anywhere in the world. '
                                    }
                                ],
                                //Interacting with different web services.
                                [
                                    {
                                        type: 'text',
                                        text: 'Interacting with different web services.'
                                    }
                                ],
                            ]
                        }
                    ],
                ]
            },
            // Embedded Programming using Rust (Extra Weeks in the Course)
            {
                title: 'Embedded Programming using Rust (Extra Weeks in the Course)',
                children: [
                    // embedded programming
                    [
                        {
                            type: "link",
                            text: "embedded programming",
                            url: 'https://www.rust-lang.org/what/embedded'
                        },
                    ],
                    // crates-esp8266
                    [
                        {
                            type: "link",
                            text: "crates-esp8266",
                            url: 'https://crates.io/crates/esp8266 '
                        },
                    ],
                ]
            },
            // Hardware Requirements 
            {
                title: 'Hardware Requirements',
                children: [
                    // nested
                    [
                        {
                            type: 'nested',
                            children: [
                                // Esp8266 (Node MCU)
                                [
                                    {
                                        type: 'text',
                                        text: 'Esp8266 (Node MCU)'
                                    }
                                ],
                                // Jumper Wires
                                [
                                    {
                                        type: 'text',
                                        text: 'Jumper Wires'
                                    }
                                ],
                                // Bread Board
                                [
                                    {
                                        type: 'text',
                                        text: 'Bread Board'
                                    }
                                ],
                                // LEDs
                                [
                                    {
                                        type: 'text',
                                        text: 'LEDs'
                                    }
                                ],
                                // Sensors: (Dht11, ultrasonic sensor, IR sensor)
                                [
                                    {
                                        type: 'text',
                                        text: 'Sensors: (Dht11, ultrasonic sensor, IR sensor)'
                                    }
                                ],
                            ]
                        }
                    ],
                ]
            },
        ]
    },
]
export const GBSQuarters: IQuarterData[] = [
    // Quarter 4
    {
        id: '4',
        Quarter: "Quarter 4",
        objective: 'Bio-351: Python for Biologists',
        color: '',
        course_description: ['This course will focus on learning the basics of the Python programming language through genomics examples.'],
        duration_weeks: 13,
        outline: [
            // Textbook
            {
                title: 'Textbook',
                children: [
                    // python for biologists
                    [
                        {
                            type: 'link',
                            text: 'python_for_biologists',
                            url: 'https://www.pythonforbiologists.org/ ',
                        }
                    ],
                ]
            },
        ]
    },
    // Quarter 5
    {
        id: '5',
        Quarter: "Quarter 5",
        objective: 'Bio-361: Bioinformatics with Python',
        color: '',
        course_description: [
            "In this course we will discover modern, next-generation sequencing libraries from the powerful Python ecosystem to perform cutting-edge research and analyze large amounts of biological data."],
        duration_weeks: 13,
        outline: [
            // Bioinformatics-Python-Cookbook-applications-computational
            {
                title: 'Textbook',
                children: [
                    // Bioinformatics-Python-Cookbook-applications-computational
                    [
                        {
                            type: 'link',
                            text: 'Bioinformatics Python Cookbook applications computational',
                            url: 'https://www.amazon.com/Bioinformatics-Python-Cookbook-applications-computational/dp/1803236426/ref=sr_1_1',
                        }
                    ],
                ]
            },
        ]
    },
]
export const NPASQuarters: IQuarterData[] = [
    // Quarter 4
    {
        id: '4',
        Quarter: "Quarter 4",
        objective: 'NPA-351: CCNA 200-301 Certification',
        color: '',
        course_description: ['This course will focus on learning the basics of the networking and preparing for the new Cisco Certified Network Associate (CCNA) exam. This comprehensive course focuses on the solutions and technologies needed to implement and administer a broad range of modern networking and IT infrastructure.'],
        duration_weeks: 13,
        outline: [
            // Textbook: 
            {
                title: 'Textbook',
                children: [
                    // CCNA-200-301-Official-Guide-Library
                    [
                        {
                            type: 'link',
                            text: 'CCNA 200 301 Official Guide Library',
                            url: 'https://www.amazon.com/CCNA-200-301-Official-Guide-Library/dp/1587147149/ref=sr_1_1',
                        }
                    ],
                ]
            },
        ]
    },
    // Quarter 5
    {
        id: '5',
        Quarter: "Quarter 5",
        objective: 'NPA-361: Network Programmability and Automation',
        color: '',
        course_description: [
            "Traditional network management techniques can't be effectively automated and don't scale well. By implementing network programmability based on Application Programming Interfaces, this course will assist in overcoming issues of the future and help you develop the skills required for the Next-Generation Network Engineer."],
        duration_weeks: 13,
        outline: [
            // Textbook: 
            {
                title: 'Textbook',
                children: [
                    // Network-Programmability-Automation-Networking-Technology 
                    [
                        {
                            type: 'link',
                            text: 'Network Programmability Automation Networking Technology',
                            url: 'https://www.amazon.com/Network-Programmability-Automation-Networking-Technology/dp/1587145146/ref=sr_1_3',
                        }
                    ],
                ]
            },
        ]
    },
]

export const CoursesData: ICourseData[] = [
    // WMDQuarters
    {
        id: 'WMD',
        name: 'Web 3.0 and Metaverse',
        description: 'This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.',
        image: metaverse,
        Quarter_Data: [
            ...WMDQuarters
        ],
    },
    // AiQuarters
    {
        id: 'AI',
        name: 'Artificial Intelligence (AI) and Deep Learning',
        description: 'The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models',
        image: ai,
        Quarter_Data: [
            ...AiQuarters
        ],
    },
    // CNCQuarters
    {
        id: 'CNC',
        name: 'Cloud-Native Computing',
        description: 'The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes',
        image: CNC,
        Quarter_Data: [
            ...CNCQuarters
        ],
    },
    // ACITQuarters
    {
        id: 'ACIT',
        name: 'Ambient Computing and IoT',
        description: 'The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.',
        image: ACIT,
        Quarter_Data: [
            ...ACITQuarters
        ],
    },
    // GBSQuarters
    {
        id: 'GBS',
        name: 'Genomics and Bioinformatics',
        description: 'Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.',
        image: GBS,
        Quarter_Data: [
            ...GBSQuarters
        ],
    },
    // NPASQuarters
    {
        id: 'NPAS',
        name: 'Network Programmability and Automation',
        description: 'More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.',
        image: NPAS,
        Quarter_Data: [
            ...NPASQuarters
        ],
    },
]


export const OutComeData = [
    {
        line: "Top 5 'Metaverse' jobs that will rule the future of tech industry",
        url: "https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms",
    },
    {
        line: "Blockchain Developer Salary - Jun 2022",
        url: "https://web3.career/web3-salaries/blockchain-developer",
    },
    {
        line: "Web3 Salaries Soar to $750,000 for Rank-and-File Devs",
        url: "https://thedefiant.io/web3-soaring-salaries",
    },
    {
        line: "The Metaverse, Blockchain Gaming, and NFTs: Navigating the Internet’s Uncharted Waters",
        url: "https://newzoo.com/resources/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022",
    },
    {
        line: "How To Become Metaverse Developer: Scope, Skills, and Salary",
        url: "https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer/",
    },
]