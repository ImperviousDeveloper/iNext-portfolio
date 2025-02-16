import {BASE_PATH} from "@/data/constants";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: `${BASE_PATH}/b1.svg`,
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: `${BASE_PATH}/grid.svg`,
    spareImg: `${BASE_PATH}/b4.svg`,
  },

  {
    id: 5,
    title: "Currently building a Spring project integrating with Angular",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: `${BASE_PATH}/b5.svg`,
    spareImg: `${BASE_PATH}/grid.svg`,
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "URL Shortner",
    des: "Simplify your links with this fast and intuitive URL shortener. Quickly generate short, shareable URLs with custom aliases and track their performance—all through a clean, modern interface.",
    img: `${BASE_PATH}/p1.svg`,
    iconLists: [`${BASE_PATH}/re.svg`, `${BASE_PATH}/tail.svg`, `${BASE_PATH}/ts.svg`, `${BASE_PATH}/three.svg`, `${BASE_PATH}/fm.svg`],
    link: "https://imperviousdeveloper.github.io/about",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: `${BASE_PATH}/p2.svg`,
    iconLists: [`${BASE_PATH}/next.svg`, `${BASE_PATH}/tail.svg`, `${BASE_PATH}/ts.svg`, `${BASE_PATH}/stream.svg`, `${BASE_PATH}/c.svg`],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: `${BASE_PATH}/p3.svg`,
    iconLists: [`${BASE_PATH}/re.svg`, `${BASE_PATH}/tail.svg`, `${BASE_PATH}/ts.svg`, `${BASE_PATH}/three.svg`, `${BASE_PATH}/c.svg`],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: `${BASE_PATH}/p4.svg`,
    iconLists: [`${BASE_PATH}/next.svg`, `${BASE_PATH}/tail.svg`, `${BASE_PATH}/ts.svg`, `${BASE_PATH}/three.svg`, `${BASE_PATH}/gsap.svg`],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: `${BASE_PATH}/cloud.svg`,
    nameImg: `${BASE_PATH}/cloudName.svg`,
  },
  {
    id: 2,
    name: "appwrite",
    img: `${BASE_PATH}/app.svg`,
    nameImg: `${BASE_PATH}/appName.svg`,
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: `${BASE_PATH}/host.svg`,
    nameImg: `${BASE_PATH}/hostName.svg`,
  },
  {
    id: 4,
    name: "stream",
    img: `${BASE_PATH}/s.svg`,
    nameImg: `${BASE_PATH}/streamName.svg`,
  },
  {
    id: 5,
    name: "docker.",
    img: `${BASE_PATH}/dock.svg`,
    nameImg: `${BASE_PATH}/dockerName.svg`,
  },
];

export const workExperience = [
  {
    id: 1,
    title: "SDE Intern - Java",
    desc: "Assisted in the database optimization of a web-based platform using Spring MVC, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: `${BASE_PATH}/exp1.svg`,
  },
  {
    id: 2,
    title: "Full Stack Developer - Intern",
    desc: "Designed and developed HTML table generator using Svelte and Figma.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: `${BASE_PATH}/exp2.svg`,
  },
  {
    id: 3,
    title: "Software Engineer",
    // desc: "Led the dev of web app for a client, from initial concept to deployment on server.",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2", // change to md:col-span-2
    // thumbnail: "/exp3.svg",
    thumbnail: `${BASE_PATH}/exp4.svg`,
  },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: `${BASE_PATH}/git.svg`,
    link: "https://github.com/SharmaRajan/"
  },
  {
    id: 2,
    img: `${BASE_PATH}/twit.svg`,
    link: "https://x.com/RajanS5259"
  },
  {
    id: 3,
    img: `${BASE_PATH}/link.svg`,
    link: "https://www.linkedin.com/in/rajan-kumar-sharma-709a17229/"
  },
];
