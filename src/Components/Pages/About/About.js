import { Image } from '@chakra-ui/image';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Center, Text, VStack } from '@chakra-ui/layout';
import useDocumentTitle from '../../../Hooks/DocumentTitle';

const About = () => {
	useDocumentTitle();

	return (
		<Box
			minHeight={{ md: 'calc(100vh - 120px)' }}
			background={useColorModeValue('gray.50', 'black')}
			p={5}
		>
			<Center minHeight={{ md: 'calc(100vh - 250px)' }}>
				<VStack>
					<Image
						borderRadius='full'
						boxSize='120px'
						src='/images/thumb.jpeg'
						alt='hari kotha cover'
					/>
					<Text fontSize={{ base: '3xl', md: '7xl' }} fontWeight='600'>
						Hi, I'm Gimase 👋
					</Text>
					<Text fontSize={{ base: 'xl', md: '4xl' }}>
						a passionate{' '}
						<Text
							display='inline'
							borderBottomColor='gray.500'
							borderBottomWidth='5px'
						>
							Web Developer
						</Text>{' '}
						from India.
					</Text>
					<Text fontSize={{ base: 'xl', md: '4xl' }} as='span'>
						I specialize in building responsive UI with modern{' '}
						<Text
							display='inline'
							borderBottomColor='gray.500'
							borderBottomWidth='5px'
						>
							JavaScript
						</Text>{' '}
						tools
					</Text>
				</VStack>
			</Center>
		</Box>
	);
};

export default About;