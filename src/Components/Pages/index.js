import { lazy } from 'react';

export const LandingPageLazy = lazy(() => import('../Landing/LandingPage'))
export const SkillsLazy = lazy(() => import('../Skills/Skills'));
export const ProjectsLazy = lazy(() => import('../Projects/Project'));
export const ContactLazy = lazy(() => import('../Contact/Contact'));
export const FooterLazy = lazy(() => import('../Footer'));
