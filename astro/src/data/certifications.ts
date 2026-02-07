/**
 * Certifications Data
 * Professional certifications information
 */
import type { Certification } from '../types';

export const certifications: Certification[] = [
    {
        id: 'az-900',
        title: 'Microsoft Azure Fundamentals (AZ-900)',
        icon: 'fab fa-microsoft',
        issuer: 'Microsoft',
        date: '2024'
    },
    {
        id: 'ai-900',
        title: 'Microsoft Azure AI Fundamentals (AI-900)',
        icon: 'fas fa-brain',
        issuer: 'Microsoft',
        date: '2024'
    },
    {
        id: 'dp-900',
        title: 'Microsoft Azure Data Fundamentals (DP-900)',
        icon: 'fas fa-database',
        issuer: 'Microsoft',
        date: '2024'
    },
    {
        id: 'sc-900',
        title: 'Microsoft Security Fundamentals (SC-900)',
        icon: 'fas fa-shield-alt',
        issuer: 'Microsoft',
        date: '2024'
    },
    {
        id: 'aws-cloud',
        title: 'AWS Cloud Practitioner',
        icon: 'fab fa-aws',
        issuer: 'Amazon Web Services',
        date: '2023'
    },
    {
        id: 'github-foundations',
        title: 'GitHub Foundations',
        icon: 'fab fa-github',
        issuer: 'GitHub',
        date: '2024'
    }
];
