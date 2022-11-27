import { Box, Spacer } from '@chakra-ui/react';
import { LandingPageLazy, SkillsLazy, ProjectsLazy, ContactLazy, FooterLazy } from '../Pages/index';

const Home = () => {
	return (
		<Box>
			<LandingPageLazy />
			<Spacer id='skills' />
			<SkillsLazy />
			<Spacer id='projects'  />
			<ProjectsLazy />
			<Spacer id='contact'/>
			<ContactLazy />
			<FooterLazy />
		</Box>
	);
};

export default Home;