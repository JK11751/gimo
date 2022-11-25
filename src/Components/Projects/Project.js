import React from 'react';
import { Box, Stack } from '@chakra-ui/react'
import ProjectCard from '../Card/ProjectCard';
import  ProjectList from '../Data/ProjectList';


const Project = () => {
    return(
      <Box>
      <Stack>
         {ProjectList.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}  
      </Stack>
    </Box>
    );
    }
 export default Project