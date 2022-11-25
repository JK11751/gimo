import { React } from 'react';
import {
  Box,
  SimpleGrid,
  Text,
  CircularProgress,
  CircularProgressLabel,
  Stack,
  Flex,
  Container,
} from '@chakra-ui/react';

const Feature = ({ title, text, icon }) => {
  return (
    <Stack mt={5}>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'#9DECF9'}
        mb={1}
      >
        {icon}
      </Flex>
      <Container bgColor={""} borderRadius={"lg"}>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
      </Container>
    </Stack>
  );
};

const Skills = () => {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={
            
            <CircularProgress value={90} color="green.400">
              <CircularProgressLabel textColor={"gray"}>90%</CircularProgressLabel>
            </CircularProgress>
          }
          title={'Java'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          icon={
            
            <CircularProgress value={90} color="green.400">
              <CircularProgressLabel textColor={"gray"}>90%</CircularProgressLabel>
            </CircularProgress>
          }
          title={'Javascript'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          icon={
            
            <CircularProgress value={90} color="green.400">
              <CircularProgressLabel textColor={"gray"}>90%</CircularProgressLabel>
            </CircularProgress>
          }
          title={'C'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          icon={
            
            <CircularProgress value={90} color="green.400">
              <CircularProgressLabel textColor={"gray"}>90%</CircularProgressLabel>
            </CircularProgress>
          }
          title={'React'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          icon={
            
            <CircularProgress value={90} color="green.400">
              <CircularProgressLabel textColor={"gray"}>90%</CircularProgressLabel>
            </CircularProgress>
          }
          title={'React Native'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          icon={
            
            <CircularProgress value={90} color="green.400">
              <CircularProgressLabel textColor={"gray"}>90%</CircularProgressLabel>
            </CircularProgress>
          }
          title={'Python'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          icon={
            
            <CircularProgress value={90} color="green.400">
              <CircularProgressLabel textColor={"gray"}>90%</CircularProgressLabel>
            </CircularProgress>
          }
          title={'Django'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
      </SimpleGrid>
    </Box>
  );
};
export default Skills;
