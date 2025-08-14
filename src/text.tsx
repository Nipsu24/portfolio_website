import spaceImage from './assets/space.jpg';
import GithubLogoLight from './assets/logos/github_light.png';
import GithubLogoDark from './assets/logos/github_dark.png';
import LinkedInLight from './assets/logos/linkedin_light.png';
import LinkedInDark from './assets/logos/linkedin_dark.png';
import CvLogoLight from './assets/logos/resume_light.png';
import CvLogoDark from './assets/logos/resume_dark.png';
import Cub3DImg from './assets/projects/Cub3D.png';

// Main text elements on website
export const greeting = '<Hi there, nice to meet you/>';
export const aboutText = 'I am an aspiring software developer with main interest in backend/api development. Open minded and always up to learn about new tech and tools';
export const hintToProjects = 'Find out what I have been working on recently \u{1F680}';
export const headerTopThree = 'SOME OF MY LATEST PROJECTS';
export const headerFurtherProjects = 'FURTHER PROJECTS';

// Project tiles information
export const projects = [
	  {
    id: 1,
    image: spaceImage,
    title: 'Shell Interpreter',
    description: 'A project written in C, orienting on the behaviour of the bash shell.',
    link: 'https://github.com/Nipsu24/42_minishell'
  },
  {
    id: 2,
    image: spaceImage,
    title: 'React Portfolio',
    description: 'A modern portfolio website built with React and Tailwind CSS.',
    link: '#'
  },
  {
    id: 3,
    image: Cub3DImg,
    title: 'Cub3D',
    description: 'Custom 3D renderer written in C, inspired by early FPS games. Featuring map parsing, raycasting techniques, texture mapping, and player navigation.',
    link: 'https://github.com/Nipsu24/42_Cub3D/tree/main'
  },
  {
    id: 4,
    image: spaceImage,
    title: 'Test for further section',
    description: 'Another test juhu!!! Another test juhu!!! Another test juhu!!! Another test juhu!!!',
    link: '#'
  },
  {
    id: 4,
    image: spaceImage,
    title: 'Second further Section tile',
    description: 'Another test juhu!!! Another test juhu!!! Another test juhu!!! Another test juhu!!!',
    link: '#'
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
