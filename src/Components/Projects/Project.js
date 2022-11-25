import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react'
import ProjectCard from '../Cards/ProjectCard';
import  ProjectList from '../Data/ProjectList';


const Project = () => {
    return(
      <Box>
      <SimpleGrid columns={{ base: 1, sm: 2 }}
        spacing={'5'}
        mt={5}
        mx={'auto'}>
      {ProjectList.map(project => (
           <ProjectCard key={project.id} project={project}/>
        ))}  
      </SimpleGrid>
    </Box>
    );
    }
 export default Project