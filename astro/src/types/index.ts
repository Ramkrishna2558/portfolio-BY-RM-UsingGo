/**
 * TypeScript Type Definitions
 * Enterprise-grade type safety for portfolio
 */

export interface Project {
    id: string;
    title: string;
    description: string;
    icon: string;
    tags: string[];
    github?: string;
    demo?: string;
    featured?: boolean;
}

export interface Experience {
    id: string;
    title: string;
    company: string;
    location?: string;
    dateRange: string;
    responsibilities: string[];
    current?: boolean;
}

export interface Certification {
    id: string;
    title: string;
    icon: string;
    issuer?: string;
    date?: string;
}

export interface Skill {
    name: string;
    icon?: string;
}

export interface SkillCategory {
    category: string;
    skills: Skill[];
}

export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
    label: string;
}

export interface ContactInfo {
    email: string;
    phone: string;
    location?: string;
    socialLinks: SocialLink[];
}

export interface SiteConfig {
    title: string;
    description: string;
    author: string;
    siteUrl: string;
}
