import React from 'react';
import { Card, Image, CardBody, CardFooter, Stack,Text,Heading, Divider,Button } from '@chakra-ui/react'
import { BiChat,BiLike, BiShare } from 'react-icons/bi';

const ProjectCard = ({project}) => {
    return(
        <Card maxW='md'>
        <CardBody>
          <Stack>
            <Heading size='md'>{project.title}</Heading>
            <Text>{project.content}</Text>
            </Stack>
          <Image
            src={project.image}
            borderRadius='lg'
          />
        </CardBody>
        <Divider />
        <CardFooter
          justify='space-between'
          flexWrap='wrap'
          sx={{
            '& > button': {
              minW: '136px',
            },
          }}
        >
          <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
            Like
          </Button>
          <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
            Comment
          </Button>
          <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
            Share
          </Button>
        </CardFooter>
      </Card>



    );
}
export default ProjectCard;