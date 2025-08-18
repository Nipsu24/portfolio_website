import spaceImage from './assets/space.jpg';
import GithubLogoLight from './assets/logos/github_light.png';
import GithubLogoDark from './assets/logos/github_dark.png';
import LinkedInLight from './assets/logos/linkedin_light.png';
import LinkedInDark from './assets/logos/linkedin_dark.png';
import CvLogoLight from './assets/logos/resume_light.png';
import CvLogoDark from './assets/logos/resume_dark.png';
import Cub3DImg from './assets/projects/Cub3D.png';
import ReactImg from './assets/logos/react.png';
import CImg from './assets/logos/c.png';
import CPlusPlusImg from './assets/logos/cplusplus.png';
import NodeJsImg from './assets/logos/nodejs.png';
import JSImg from './assets/logos/javaScript.png';
import TSImg from './assets/logos/ts.png';
import atSign from './assets/logos/atSign.png';
import atSignDark from './assets/logos/atSign_dark.png';
import PongImg from './assets/projects/PongImg.png';
import IrcImg from './assets/projects/IRCIMG.png';
import minishellImg from './assets/projects/minishellImg.png';



// Main text elements on website
export const greeting = '<Hi there, nice to meet you/>';
export const aboutText = 'I am an aspiring software developer with main interest in backend/api development. Open minded and always up to learn about new tech and tools';
export const hintToProjects = 'Find out what I have been working on recently \u{1F680}';
export const headerTopThree = 'SOME OF MY LATEST PROJECTS';
export const headerFurtherProjects = 'FURTHER PROJECTS';

// contact section

export const contactIcons = [
  {
    imageLight: atSign,
    imageDark: atSignDark,
    title: '@ logo',
    type: 'image' as const,
    href: 'mailto:marius.meier24@gmail.com',
    label: 'Opens e-mail'
  },
  {
    imageLight: LinkedInLight,
    imageDark: LinkedInDark,
    title: 'LinkedIn Logo',
    type: 'image' as const,
    href: 'https://linkedin.com/in/marius-meier-msc',
    label: 'Visits LinkedIn profile'
  }
];

// tools/languages icons
export const toolSet = [
  {
    image: CImg,
    title: 'C programming language logo'
  },
  {
    image: CPlusPlusImg,
    title: 'C Plus Plus logo'
  },
  {
    image: JSImg,
    title: 'JavaScript logo'
  },
  {
    image: TSImg,
    title: 'TypeScript logo'
  },
  {
    image: ReactImg,
    title: 'React.js logo'
  },
  {
    image: NodeJsImg,
    title: 'Node.js logo'
  }
];

// Project tiles information
export const projects = [
  {
    image: PongImg,
    title: 'The Pong',
    description: 'Webbased pong game utilising a modern web tech stack with Typescript/React.JS (frontend), Node.JS/Fastify (backend) and a SQLite database (via Prisma client). Featuring user management, PvP, PvE and tournament mode.',
    link: 'https://github.com/Nipsu24/42_transcendence',
    highlightProject: true
  },
  {
    image: IrcImg,
    title: 'Internet Relay Chat (IRC)',
    description: 'A chat server written in C++, using socket programming to handle multiple client connections over TCP (IPv4). Enables real-time communication between clients and includes core features of the IRC protocol, such as: User management, channels, modes and command parsing.',
    link: 'https://github.com/Nipsu24/42_irc',
    highlightProject: true
  },
  {
    image: Cub3DImg,
    title: 'Cub3D',
    description: 'Custom 3D renderer written in C, inspired by early FPS games. Featuring map parsing, raycasting techniques, texture mapping, and player navigation.',
    link: 'https://github.com/Nipsu24/42_Cub3D/tree/main',
    highlightProject: true
  },
	  {
    image: minishellImg,
    title: 'Shell Interpreter',
    description: 'A custom shell written in C, orienting on the bash command line shell. Consisting of extensive parsing/lexing, command execution (built-in and external), process piping, redirections and signal handling.',
    link: 'https://github.com/Nipsu24/42_minishell',
    highlightProject: true
  },
  {
    image: spaceImage,
    title: 'Test for further section',
    description: 'Another test juhu!!! Another test juhu!!! Another test juhu!!! Another test juhu!!!',
    link: '#',
    highlightProject: false
  },
  {
    image: spaceImage,
    title: 'Second further Section tile',
    description: 'Another test juhu!!! Another test juhu!!! Another test juhu!!! Another test juhu!!!',
    link: '#',
    highlightProject: false
  }
];

// Logos within NavBar
export const imgItems = [
  {
    href: 'https://github.com/nipsu24', label: 'Github', lightSource: GithubLogoLight, darkSource: GithubLogoDark, type: 'image' as const
  },
  {
    href: 'https://linkedin.com/in/marius-meier-msc', label: 'LinkedIn', lightSource: LinkedInLight, darkSource: LinkedInDark, type: 'image' as const
  },
  {
    href: '/resume.pdf', label: 'Resume', lightSource: CvLogoLight, darkSource: CvLogoDark, type: 'pdf' as const
  }
];

export const navItems = [
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' }
];

export const externalLinks = [
  {
    href: 'https://github.com/nipsu24',
    target: '_blank',
    rel: 'noopener noreferrer',
    text: 'Github'
  },
  {
    href: 'https://linkedin.com/in/marius-meier-msc',
    target: '_blank',
    rel: 'noopener noreferrer',
    text: 'LinkedIn'
  },
  {
    href: '/resume.pdf',
    target: '_blank',
    rel: 'noopener noreferrer',
    text: 'Resume'
  }
];
