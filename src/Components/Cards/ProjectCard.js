import React from 'react';
import { Card, Image, CardBody, CardFooter, Stack,Text,Heading, Divider,Button} from '@chakra-ui/react'
import { BiChat,BiLike, BiShare } from 'react-icons/bi';
import { useState } from 'react';

const ProjectCard = ({project}) => {
  const [likeCount, setLikeCount] = useState(50);
  const [commentcount, setCommentCount] = useState(100);
    return(
        <Card maxW='md'
        transition='all 0.15s'
			_hover={{
				shadow: 'md',
				transform: 'translateY(-5px)',
			}}>
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
              minW: '100px',
            },
          }}
        >
          <Button flex='1' variant='ghost' leftIcon={<BiLike /> }
          onClick={() => setLikeCount(likeCount + 1) }
          
          >
            Like {likeCount + 1}
          </Button>
          <Button flex='1' variant='ghost' leftIcon={<BiChat />}
          onClick={() => setCommentCount(commentcount + 1)}>
            Comment {commentcount + 1}
          </Button>
          <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
            Share
          </Button>
        </CardFooter>
      </Card>



    );
}
export default ProjectCard;