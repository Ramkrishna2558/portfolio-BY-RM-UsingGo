/**
 * Experience Data
 * Centralized work experience information
 */
import type { Experience } from '../types';

export const experiences: Experience[] = [
    {
        id: 'accenture-ase',
        title: 'Application Development Associate',
        company: 'Accenture',
        location: 'Pune, India',
        dateRange: 'Jan 2024 - Present',
        current: true,
        responsibilities: [
            'Upgraded legacy .NET Framework applications to .NET 8, improving performance by 40%',
            'Developed responsive Angular 19 components with RxJS for complex insurance workflows',
            'Implemented Azure AI services for document processing and automated data extraction',
            'Led code reviews and mentored junior developers on best practices'
        ]
    },
    {
        id: 'accenture-intern',
        title: 'Software Engineering Intern',
        company: 'Accenture',
        location: 'Pune, India',
        dateRange: 'Aug 2023 - Dec 2023',
        responsibilities: [
            'Built RESTful APIs using ASP.NET Core with Entity Framework for SQL Server',
            'Created automated testing suites using xUnit and Moq, achieving 85% code coverage',
            'Participated in Agile ceremonies and contributed to sprint planning'
        ]
    }
];
