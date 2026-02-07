/**
 * Projects Data
 * Centralized project information for type-safe usage
 */
import type { Project } from '../types';

export const projects: Project[] = [
    {
        id: 'pc-ai-app',
        title: 'PC AI Price Advisor',
        description: 'AI-powered web application for real-time gold/silver price advice with .NET 8 backend and Angular 19 frontend.',
        icon: 'fas fa-robot',
        tags: ['.NET 8', 'Angular 19', 'Azure AI', 'SQL Server'],
        github: 'https://github.com/Ramkrishna2558/PCAI',
        demo: 'https://pc-ai-web.onrender.com',
        featured: true
    },
    {
        id: 'grocery-flutter',
        title: 'Grocery App',
        description: 'Cross-platform Flutter mobile app for grocery shopping with Firebase backend, real-time updates, and payment integration.',
        icon: 'fas fa-shopping-cart',
        tags: ['Flutter', 'Firebase', 'Dart', 'Stripe'],
        github: 'https://github.com/Ramkrishna2558/Grocery-app',
        featured: true
    },
    {
        id: 'portfolio-fiber',
        title: 'Portfolio Website',
        description: 'Personal portfolio built with Go Fiber and Astro, featuring Liquid Glass UI design and smooth GSAP animations.',
        icon: 'fas fa-briefcase',
        tags: ['Go', 'Astro', 'GSAP', 'CSS'],
        github: 'https://github.com/Ramkrishna2558/portfolio-go-fiber',
        demo: 'https://ramkrishna.dev',
        featured: true
    },
    {
        id: 'task-manager',
        title: 'Task Manager Pro',
        description: 'Full-stack task management application with React frontend and Node.js backend, featuring real-time collaboration.',
        icon: 'fas fa-tasks',
        tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
        github: 'https://github.com/Ramkrishna2558/task-manager'
    }
];

export const featuredProjects = projects.filter(p => p.featured);
