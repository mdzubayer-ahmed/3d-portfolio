import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "AI Trainer",
        company_name: "Outlier.AI",
        //icon: starbucks,
        iconBg: "#accbe1",
        date: "Oct 2024 - Present",
        points: [
            "Quality assurance for Multimodal Audio-to-Text (ATT) and Image-to-Text (ITT) prompts and responses by Google Gemni or Meta AI.",
            "Extracting nuanced contextual information from audio/video/image files, including environmental cues, situational context, emotional undertones, underlying meaning, and human perception of the footage/image enabling LLM(Gemini/Meta AI) to achieve more human-like comprehension",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Worked on several projects for response evaluation, response ranking, fact-checking, content refinement, and applying selective censorship protocols to ensure accuracy and appropriateness in LLM outputs.",
        ],
    },
    {
        title: "3D Data Analyst",
        company_name: "Hibernia Enhanced Oil Recovery Group",
        //icon: tesla,
        iconBg: "#fbc3bc",
        date: "Sep 2024 - Dec 2024",
        points: [
            "Analyzing CT scan data of rock samples to identify and characterize fractures, and other structural features for Enhanced Oil Recovery (EOR) research.",
            "Extracting, interpreting and analyzing volumetric and frequency data from 3D models for further studies.",
            "Quantifying fracture sizes, shapes, locations and orientations using 3D imaging software and machine learning techniques.",
            "Skilled in DICOM file analysis, 3D modelling, and 3D data analysis to support Hibernia Enhanced Oil Recovery Laboratory project goals.",
        ],
    },
    {
        title: "Volunteer Software Developer",
        company_name: "Atlantic Developers",
        //icon: shopify,
        iconBg: "#b7e4c7",
        date: "Feb 2024 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with  other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Sales Associate",
        company_name: "TJX Canada – Winners, Marshalls, HomeSense",
        //icon: meta,
        iconBg: "#a2d2ff",
        date: "Jul 2022 - Oct 2023",
        points: [
            "Assist customers, process high-volume transactions, respond to queries, and recommend products.",
            "Develop smooth communication and cooperative relationships with more than 200 co-workers and managers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/mdzubayer-ahmed',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/mdzubayer-ahmed',
    }
];

export const projects = [
    {
        //iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Image Processor',
        description: ' A Java based application for image filtering, thresholding, refinement and visualization of effects. Implemented Gaussian, Median, Triangle & Kuwahara filtering and Otsu’s thresholding algorithms.',
        link: 'https://github.com/mdzubayer-ahmed/Image-Processor',
    },
    {
        //iconUrl: threads,
        theme: 'btn-back-green',
        name: 'MovieStreamDB',
        description: ' A database management platform for a movie streaming service with interactive webapp in local server.Utilized MySQL, Flask, HTML & Bootstrap to create users, subscriptions, & payments management features.',
        link: 'https://github.com/mdzubayer-ahmed/MovieStreamDB',
    },
    {
        //iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Cellular Automata Simulation (Academic)',
        description: ' A Java program to simulate Conway\'s Game of Life to observe evolution based on predefined rules. Implemented Swing framework to visualize graphics with adjustable speed over 1000 iterations. ',
        link: 'https://github.com/mdzubayer-ahmed/Cellular-Automata',
    },
    {
        //iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'FrugalFrames',
        description: 'Created and maintaining an interactive web application for my Amazon brand using waterfall model. Built using Node.js for backend development and React.js, Three.js, Vite and Tailwind CSS for frontend. ',
        link: 'https://github.com/mdzubayer-ahmed/frugalframes',
    },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];