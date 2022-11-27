import {
    Container,
    Image,
    SimpleGrid,
  } from '@chakra-ui/react';
import ContainerCard from './Container';
  //import { Navigate, useNavigate } from "react-router-dom";
  const Contact=({navigation})=>{

    return(

    <Container bg="gray.400" maxW="full" mt={0} centerContent overflow="hidden" >
   <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
   <ContainerCard/>

   <Image
          color="white"
          borderRadius="lg"
          h={600}
          w={600}
          m={{ sm: 4, md: 16, lg: 10 }}
          
            rounded={'md'}
            alt={'feature image'}
            src={
                "https://camo.githubusercontent.com/8ba1e66bcfa048214cf17f235c341742347c9c248831d044aa888acbeec89502/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f313239323637372f73637265656e73686f74732f363133393136372f6d656469612f66636637666430633631396262383737303635333330373932343039313566332e676966"
            }
      />
        </SimpleGrid>
        </Container>
    );
  }
  export default Contact