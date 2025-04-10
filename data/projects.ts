export type Project = {
    title: string,
    description: string,
    imgPath: string
    techs: string[],
    githubLink?: string,
    liveLink?: string,
    status: 'online' | 'building'
}

export const projects: Project[] = [
    {
        title: "EatsExpress",
        description: "Food Delivery Website",
        imgPath: "/project-images/food.png",
        techs: ["ReactJS", "Firebase","Acertinity Ui", "Redux" , "TailwindCSS", "Razorpay"],
        githubLink: "https://github.com/mohit15-web/Food-Delivery-Website",
        liveLink: "https://github.com/mohit15-web/Food-Delivery-Website",
        status: 'online'
    },
    {
        title: "Gemini Clone",
        description: "A clone of Gemini App",
        imgPath: "/project-images/gemini.png",
        techs: ["NextJS", "ReactJS", "TailwindCSS","Shadcn UI", "Framer Motion",'Acertinity Ui'],
        githubLink: "https://github.com/mohit15-web/Gemini-clone",
        liveLink: "https://gemini-clone-pearl-two.vercel.app/",
        status: 'online'
    },
    {
        title: "Portfolio",
        description: "My Personal Portfolio Website",
        imgPath: "/project-images/portfolioV1.png",
        techs: ["ReactJS","TailwindCSS","Gsap", "Acertinity Ui"],
        liveLink: "https://portfolio-react-seven-ochre.vercel.app/",
        status: 'online'
    },
    {
        title: "Snitch Clone",
        description: "A clone of Snitch App",
        imgPath: "/project-images/snitch.png",
        techs: ["ReactJS", "Redux", "TailwindCSS",],
        githubLink: "https://github.com/mohit15-web/Snitch",
        liveLink: "https://snitch-vert.vercel.app/",
        status: 'online'
    },
    // {
    //     title: "Similarity Search",
    //     description: "Similarity search on a dataset of movies using vector embeddings",
    //     imgPath: "/project-images/similaritysearch.png",
    //     techs: ["ReactJS", "NextJS", "TailwindCSS", "Vector Embeddings", "AstraDB"],
    //     githubLink: "https://github.com/ayushsharma74/similaritysearch-system",
    //     liveLink: "https://similaritysearch-system-t1mg.vercel.app/",
    //     status: 'online'
    // },
    // {
    //     title: "Portfolio V1",
    //     description: "My personal portfolio website.",
    //     imgPath: "/project-images/portfolio-v1.png",
    //     techs: ["ReactJS", "NextJS", "TailwindCSS", "MagicUI"],
    //     githubLink: "https://github.com/ayushsharma74/portfolio",
    //     liveLink: "https://ayushsharmaportfolio.vercel.app/",
    //     status: 'online'
    // },
]