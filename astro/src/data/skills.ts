/**
 * Skills Data
 * Organized skill categories for display
 */
import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
    {
        category: 'Frontend',
        skills: [
            { name: 'Angular 19' },
            { name: 'React' },
            { name: 'TypeScript' },
            { name: 'HTML5/CSS3' },
            { name: 'GSAP' },
            { name: 'Tailwind CSS' }
        ]
    },
    {
        category: 'Backend',
        skills: [
            { name: '.NET 8' },
            { name: 'Go/Fiber' },
            { name: 'Node.js' },
            { name: 'Python' },
            { name: 'RESTful APIs' },
            { name: 'GraphQL' }
        ]
    },
    {
        category: 'Cloud & DevOps',
        skills: [
            { name: 'Azure' },
            { name: 'AWS' },
            { name: 'Docker' },
            { name: 'Kubernetes' },
            { name: 'CI/CD' },
            { name: 'GitHub Actions' }
        ]
    },
    {
        category: 'Database',
        skills: [
            { name: 'SQL Server' },
            { name: 'PostgreSQL' },
            { name: 'MongoDB' },
            { name: 'Redis' },
            { name: 'Firebase' }
        ]
    },
    {
        category: 'Mobile',
        skills: [
            { name: 'Flutter' },
            { name: 'React Native' },
            { name: 'Dart' }
        ]
    },
    {
        category: 'Tools',
        skills: [
            { name: 'Git' },
            { name: 'VS Code' },
            { name: 'Visual Studio' },
            { name: 'Postman' },
            { name: 'Jira' }
        ]
    }
];
