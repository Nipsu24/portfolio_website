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
import libftImg from './assets/projects/libftImg.png';
import solongImg from './assets/projects/solongImg.png';
import minitalkImg from './assets/projects/minitalkImg.png';
import philoImg from './assets/projects/philo.png';
import pushSwapImg from './assets/projects/pushSwapImg.png';
import gnlImg from './assets/projects/gnlImg.png';
import printfImg from './assets/projects/printf.png';



// Main text elements on website
export const greeting = '<Hi there, nice to meet you/>';
export const aboutText = 'I am an Espoo based software developer with main interest in backend and API development. Open-minded, curious, and always eager to learn about new technologies and tools.';
export const hintToProjects = 'Find out what I have been working on recently \u{1F680}';
export const headerTopThree = 'SOME OF MY LATEST PROJECTS';
export const headerFurtherProjects = 'ADDITIONAL PROJECTS';

// contact section

export const contactIcons = [
  {
    imageLight: atSign,
    imageDark: atSignDark,
    title: '@ logo',
    type: 'image' as const,
    href: 'mailto:contact@mariusmeier.fi',
    label: 'Opens e-mail',
    text: 'contact@mariusmeier.fi'
  },
  {
    imageLight: LinkedInLight,
    imageDark: LinkedInDark,
    title: 'LinkedIn Logo',
    type: 'image' as const,
    href: 'https://linkedin.com/in/marius-meier-msc',
    label: 'Visits LinkedIn profile',
    text: 'LinkedIn'
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
    highlightProject: false
  },
  {
    image: Cub3DImg,
    title: 'Cub3D',
    description: 'Custom 3D renderer written in C, inspired by early FPS games. Featuring map parsing, raycasting techniques, texture mapping, and player navigation.',
    link: 'https://github.com/Nipsu24/42_Cub3D',
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
    image: libftImg,
    title: 'Libft',
    description: 'A library of 34 custom made functions, mainly orienting to the respective standard library functions of the C programming language. Used throughout Hive (42 school) projects.',
    link: 'https://github.com/Nipsu24/42_libft',
    highlightProject: false
  },
  {
    image: solongImg,
    title: 'Retro-style 2D game',
    description: 'A small 2D top-down game written in C, using the MLX42 graphics library (built on GLFW and OpenGL) for window management, sprite rendering and animation.',
    link: 'https://github.com/Nipsu24/42_so_long',
    highlightProject: false
  },
  {
    image: minitalkImg,
    title: 'mini_talk',
    description: 'Minimalist client-server-program utilising i.a. the C signal.h library, UNIX signals, and bitshifting to enable communication between the 2 executables.',
    link: 'https://github.com/Nipsu24/42_mini_talk',
    highlightProject: false
  },
  {
    image: philoImg,
    title: 'Dining Philosophers',
    description: 'Simulation based on the dining philosophers problem. Uses threading and mutexes for deadlock and data race protection.',
    link: 'https://github.com/Nipsu24/42_philosophers',
    highlightProject: false
  },
  {
    image: pushSwapImg,
    title: 'Sorting Algorithm (push_swap)',
    description: 'A program to sort a sequence of numbers, using only a limited set of operations.',
    link: 'https://github.com/Nipsu24/42_push_swap',
    highlightProject: false
  },
  {
    image: gnlImg,
    title: 'Custom getline function',
    description: 'C function that reads and returns a line from a given file descriptor (e.g. files, stdin). Familiarises with manual memory allocation and freeing.',
    link: 'https://github.com/Nipsu24/42_get_next_line',
    highlightProject: false
  },
  {
    image: printfImg,
    title: 'Custom printf function',
    description: 'A reimplementation of the C printf function, supporting the following conversions: c, s, p, d, i, u, x, X, %.',
    link: 'https://github.com/Nipsu24/42_ft_printf',
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
