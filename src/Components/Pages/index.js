import { lazy } from 'react';
export const AboutLazy = lazy(() => import('./About/About'));
export const SkillsLazy = lazy(() => import('../Skills/Skills'));
export const TestimonialLazy = lazy(() => import('../Testimonials/Testimonials'));
export const ProjectsLazy = lazy(() => import('../Projects/Project'));
export const ContactLazy = lazy(() => import('../Contact/Contact'));
export const FooterLazy = lazy(() => import('../Footer'));