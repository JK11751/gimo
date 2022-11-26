import { React} from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcIpad, FcIphone, FcWebcam } from 'react-icons/fc';

const Feature = ({ title, text, icon })=> {
  return (
    <Stack

        >
    
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

const Services=()=> {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcWebcam} w={10} h={10} />}
          title={'Web Applications'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          icon={<Icon as={FcIphone} w={10} h={10} />}
          title={'Mobile Applications'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          icon={<Icon as={FcIpad} w={10} h={10} />}
          title={'Desktop Applications'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
      </SimpleGrid>
    </Box>
  );
}
export default Services