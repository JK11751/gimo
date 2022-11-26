import { useColorModeValue } from '@chakra-ui/color-mode';
//import { Image } from '@chakra-ui/image';
import { Box, Center, SimpleGrid, Text } from '@chakra-ui/layout';
//import useDocumentTitle from '../hooks/useDocumentTitle';
import { SkillsList } from '../../../Utils/constants/SkillsList';
import SkillCard from '../../Cards/SkillCard';
const Skill = () => {

	return (
		<Box
			minHeight={{ md: 'calc(100vh - 120px)' }}
			background={useColorModeValue('gray.50', 'black')}
			my={{ base: 10, md: 0 }}
		>
			<Center p={5} pt={{ md: 8 }}>
				<Text>
					Here are the{' '}
					<Text
						display='inline'
						borderBottomColor='gray.500'
						borderBottomWidth='2px'
						pb='0.1rem'
					>
						technologies
					</Text>{' '}
					i worked on and familiar with!
				</Text>
			</Center>
			<Box p={{ base: 3, md: 10 }}>
				<Center>
					<SimpleGrid
						spacing={{ base: '5', md: '8' }}
						columns={{ base: 1, sm: 2, lg: 3 }}
					>
						{SkillsList.map((skill) => (
							<SkillCard {...skill} key={skill.label} />
						))}
					</SimpleGrid>
				</Center>
			</Box>
		</Box>
	);
};

export default Skill;