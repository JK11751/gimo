import { useColorModeValue } from '@chakra-ui/color-mode';
import { Image } from '@chakra-ui/image';
import { Box,Stack, Text } from '@chakra-ui/layout';
//import useDocumentTitle from '../hooks/useDocumentTitle';
//import { SKILLS } from '../utils/constants';
const SkillCard = ({ label, icon }) => {
	return (
		<Box
			p={5}
			bg='white'
			borderRadius='xl'
			minWidth={{ base: '280px', sm: '200px', md: '280px' }}
			maxWidth={{ base: '300px', md: '350px' }}
			shadow='sm'
			background={useColorModeValue('white', 'gray.900')}
			color={useColorModeValue('black', 'white')}
			transition='all 0.15s'
			_hover={{
				shadow: 'md',
				transform: 'translateY(-5px)',
			}}
		>
			<Stack direction='row' align='center' spacing={3}>
				<Image boxSize='50px' src={`/images/${icon}`} alt={icon} loading='lazy' />
				<Text>{label}</Text>
			</Stack>
		</Box>
	);
};
export default SkillCard