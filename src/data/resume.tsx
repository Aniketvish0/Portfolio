import { Icons } from "@/components/icons";
import { HomeIcon, Notebook } from "lucide-react";

export const DATA = {
  name: "Aniket Vishwakarma",
  initials: "DV",
  url: "https://aniketvish0.vercel.app",
  location: "Gurugram, Haryana",
  locationLink: "https://www.google.com/maps/place/gurugram",
  description:
    "Software Engineer. I love building things and solve problems, adaptive and flexible in technologies" ,
  summary:
    "I started my tech journey in 2nd year of my college. Currently Pursuing, [degree in computer science ](/#education) (final year), actively seeking opportunities to work in great technical environment with passionate people.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Python",
    "Javascript",
    "Typescript",
    "Node.js",
    "Mysql",
    "MongoDB",
    "Tailwind Css",
    "Java",
    "C++",
    "git"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {href : "https://anivish.hashnode.dev", icon: Notebook, label: "Blog"},
    { href: "/", icon: HomeIcon, label: "Home" },
    {href : "https://anivish.hashnode.dev", icon: Notebook, label: "Blog"}
  ],
  contact: {
    email: "aniketvishwakarma2004@gmail.com",
    tel: "+917509395093",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/aniket-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/aniket-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/aniket-twitter",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:aniketvishwakarma2004@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  education: [
    {
      school: "Baderia Global Institute of Engineering and Management",
      href: "https://www.globalengineeringcollege.com/",
      degree: "Bachelor's of Technology in Computer Science",
      logoUrl: "https://i.ibb.co/2c4Lw3q/Screenshot-2025-01-25-182040.png",
      start: "2021",
      end: "2025",
    }
  ],
  projects: [
    {
      title: "BitLink",
      href: "https://bitlink-client.vercel.app",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Created a link shortner service that can track your links and can generate qr codes for that link, that can be tracked seperately, build custom zookeeper algorithm to generate psuedo random ids.",
      technologies: [
        "React.js",
        "Typescript",
        "MongoDB",
        "Mongoose",
        "TailwindCSS",
        "Node.js",
        "Radix UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://bitlink-client.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Aniketvish0/BitLink-Client-Morden",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/bitlink.png",
      video:
        "",
    },
    {
      title: "ProShop",
      href: "",
      dates: "jan 2025 - feb 2025",
      active: true,
      description:
        "Created a MERN E-commerce application with admin panel and also integrated payment system with paypal.",
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Bootstrap",
        "Paypal",
        "Mongoose"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Aniketvish0/Proshop-Ecommerce",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://media-hosting.imagekit.io//0ec6daf989654faf/Untitled video - Made with Clipchamp (1).mp4?Expires=1833176538&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=sb-3M8RdIajkKAxWyE2ZKBkf10Pp4TrEt9clZzonU7V6HI7GQBEeqMgxQ0cH~iCj-kTUvH5-vaVcTEMzGR0-dKb9dt8FwBC3-vSRV2aqJCtAA15S~FQpZapQHhmd9lBiaEi87LDX3AhSAu3vmTigPZJxddwu1MLxqkJEUOXp5q2E3ZzTatPQwEtlXJPhVLFVwSbsdn~QmF7LuUSpKtajMpxm2jaqZokjtt~VsY8NK9jD3uwWDq1OW8Umis88a5OmczoPoyYQiVnzbg5E4S8vEWTbv678K8dqomWZmtPeKnmOjzlrKsVl0TUQU5Tjh5X~DL6jmIQuwcTUAVx-nO5UTQ__",
    },
    {
      title: "6bithash",
      href: "https://www.npmjs.com/package/6bithash",
      dates: "Dec 2024 - Dec 2024",
      active: true,
      description:
        "Developed an open-source npm package to hash numbers into alphanumeric ids using a 6 bit map, user can also provide their own custom map.",
      technologies: [
        "TypeScript",
        "Node.js",
        "tsup",
        "pnpm",
        "jest"
      ],
      links: [
        {
          type: "Website",
          href: "https://www.npmjs.com/package/6bithash",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Aniketvish0/6bithash",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/6bithash.png",
      video: "",
    },
    {
      title: "Aidea-Gen",
      href: "https://aidea-gen.vercel.app/",
      dates: "Sep 2024 - Oct 2024",
      active: true,
      description:
        "Developed an Frontend for Idea Generation app using AI with the help of youtube videos.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Vite",
        "Radix ui"
      ],
      links: [
        {
          type: "Website",
          href: "https://aidea-gen.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/aideagen.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "",
      dates: "",
      location: "",
      description:
        "",
      image:
        "",
      mlh: "",
      links: [],
    },
  ],
} as const;
