import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

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
    { href: "/", icon: HomeIcon, label: "Home" }
  ],
  contact: {
    email: "aniketvishwakarma2004@gmail.com",
    tel: "+123456789",
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

  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],
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
      href: "https://bitlink-client.vercel.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Create a link shortner service that can track your links and can generate qr codes for that link, that can be tracked seperately, build custom zookeeper algorithm to generate psuedo random ids.",
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
        "Designed, developed and sold animated UI components for developers.",
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
          href: "https://github.com/magicuidesign/magicui",
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
