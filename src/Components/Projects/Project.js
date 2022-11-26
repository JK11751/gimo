import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react'
import ProjectCard from '../Cards/ProjectCard';
//import  ProjectList from '../../Utils/constants/ProjectList';
import ProjectList from '../../Utils/constants/ProjectList';


const Project = () => {
    return(
      <Box>
      <SimpleGrid columns={[2, null, 3]}
       spacing={'40px'}
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