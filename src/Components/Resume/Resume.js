import { Box, Center, VStack } from '@chakra-ui/layout';
import useDocumentTitle from '../../Hooks/DocumentTitle';
import { Button } from '@chakra-ui/button';

const Resume = () => {
	useDocumentTitle();

	const downloadResume = () => {
		window.open('./John_Gimase.pdf');
	};

	return (
		<Box>
			<Center>
				<VStack>
					<Box p={10}>
						<Button onClick={downloadResume} fontWeight='light'>
							Checkout my resume
						</Button>
					</Box>
				</VStack>
			</Center>
		</Box>
	);
};

export default Resume;