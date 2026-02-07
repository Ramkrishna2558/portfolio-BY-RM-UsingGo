/**
 * Site Configuration
 * Centralized site settings and contact information
 */
import type { SiteConfig, ContactInfo } from '../types';

export const siteConfig: SiteConfig = {
    title: 'Ramkrishna More | Full Stack Developer',
    description: 'Full Stack Developer specializing in .NET 8, Angular 19, and Azure AI. Building scalable web applications with modern technologies.',
    author: 'Ramkrishna More',
    siteUrl: 'https://ramkrishna.dev'
};

export const contactInfo: ContactInfo = {
    email: 'ramkrishnamore2558@gmail.com',
    phone: '+91 9922957425',
    location: 'Pune, India',
    socialLinks: [
        {
            platform: 'GitHub',
            url: 'https://github.com/Ramkrishna2558',
            icon: 'fab fa-github',
            label: 'GitHub Profile'
        },
        {
            platform: 'LinkedIn',
            url: 'https://linkedin.com/in/ramkrishnamore',
            icon: 'fab fa-linkedin',
            label: 'LinkedIn Profile'
        },
        {
            platform: 'Twitter',
            url: 'https://twitter.com/ramkrishnamore',
            icon: 'fab fa-twitter',
            label: 'Twitter Profile'
        }
    ]
};
