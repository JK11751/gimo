import { React } from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { SiLinkedin, SiGithub } from 'react-icons/si';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  HStack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const NavLink = ({ children}) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

const Header=()=>{
  const { colorMode, toggleColorMode } = useColorMode();
  //const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
             <NavLink onClick={() => navigate("/")}>Home</NavLink>
             <NavLink onClick={() => navigate("/projects")}>Projects</NavLink>
             <NavLink>Skills</NavLink>
             <NavLink>Resume</NavLink>
             <NavLink onClick={() => navigate("/testimonials")}>Testimonials</NavLink>
             <NavLink>Contact</NavLink>
             <NavLink>About</NavLink>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Menu>
              
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'lg'}
                    src={'https://bit.ly/sage-adebayo'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'xl'}
                      src={'https://bit.ly/sage-adebayo'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p  fontWeight={600} 
                    fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                    lineHeight={'20%'}>Follow Me</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>
                  <Button w={'full'} colorScheme={'facebook'} leftIcon={<FaFacebook />}>
                       <Link>Facebook</Link>
                    </Button>
                    </MenuItem>
                  <MenuItem> <Button w={'full'} colorScheme={'facebook'} leftIcon={<SiLinkedin  />}>
                       <Link href='https://www.linkedin.com/in/john-gimase-3677771a1/'>Linkedin</Link>
                    </Button></MenuItem>
                  <MenuItem> <Button w={'full'} colorScheme={'facebook'} leftIcon={<FaTwitter />}>
                       <Link href='https://twitter.com/GimaseJohn'>Twitter</Link>
                    </Button>
                    </MenuItem>
                    <MenuItem> <Button w={'full'} colorScheme={'facebook'} leftIcon={<SiGithub />}>
                       <Link href='https://github.com/JK11751'>Github</Link>
                    </Button>
                    </MenuItem>
                </MenuList>
              </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
export default Header