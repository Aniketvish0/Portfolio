import { Icons } from "@/components/icons";
import { HomeIcon, Notebook } from "lucide-react";

export const DATA = {
  name: "Aniket Vishwakarma",
  initials: "DV",
  url: "https://aniketvish0.vercel.app",
  location: "pune, India",
  locationLink: "https://www.google.com/maps/place/pune",
  description:
    "Software Engineer that loves building products, solving problems and exploring.",
  summary:
    "My journey started in tech in 2nd year of my college, since then I have worked on multiple projects and tried to solve my daily problems with tech. Currently I am contributing to open source and building my own projects.",
  avatarUrl: "/me.png",
  skills: [
    "Next.js",
    "React",
    "Python",
    "Javascript",
    "Typescript",
    "Node.js",
    "FastAPI",
    "Mysql",
    "PostgreSQL",
    "Prisma",
    "MongoDB",
    "Tailwind Css",
    "C++",
    "git",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://aniketvish.hashnode.dev", icon: Notebook, label: "Blog" },
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
    },
  ],
  projects: [
    {
      title: "Repofyi",
      href: "https://repofyi.vercel.app",
      dates: "Aug 2025 - Sep 2025",
      active: true,
      description:
        "Repofyi lets you share time‑boxed, read‑only access to your private GitHub repositories without adding collaborators. Enforce expiration and view limits; no downloads, no clones, no forks.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn",
        "NextAuth",
        "Monaco Editor",
      ],
      links: [
        {
          type: "Website",
          href: "https://repofyi.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/kalpaniks/prepoview",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://ik.imagekit.io/mski40t2b/repofyi.mp4?updatedAt=1757777244920",
    },
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
      image: "",
      video:
        "https://ik.imagekit.io/mski40t2b/bitlink.mp4?updatedAt=1757783962315",
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
        "Mongoose",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Aniketvish0/Proshop-Ecommerce",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://ik.imagekit.io/mski40t2b/proshop.mp4?updatedAt=1757785557937",
    },
    {
      title: "6bithash",
      href: "https://www.npmjs.com/package/6bithash",
      dates: "Dec 2024 - Dec 2024",
      active: true,
      description:
        "Developed an open-source npm package to hash numbers into alphanumeric ids using a 6 bit map, user can also provide their own custom map.",
      technologies: ["TypeScript", "Node.js", "tsup", "pnpm", "jest"],
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
  ],
  hackathons: [
    {
      title: "",
      dates: "",
      location: "",
      description: "",
      image: "",
      mlh: "",
      links: [],
    },
  ],
} as const;
