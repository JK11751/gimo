import { NavLink } from 'react-router-dom';
import { Button } from '@chakra-ui/button';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, HStack, Text } from '@chakra-ui/layout';
import {ROUTES} from '../../Utils/constants/Routes'
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import Sidebar from '../Sidebar/Sidebar';
import {
    Avatar,
    Link,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Center,
  } from '@chakra-ui/react';

  import john from "../../Images/gimasejohn.jpg";

const Header = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const navMenuColor = useColorModeValue('#000', '#fff');


	return (
		<Box
			background={useColorModeValue('white', 'gray.900')}
			shadow='md'
			borderRadius={{ base: 0, sm: 'md' }}
			position={{ base: 'fixed', md: 'relative' }}
			zIndex='1000'
			width={{ base: '100vw', md: '100%' }}
		>
			<HStack justifyContent={{ base: 'space-between', md: 'space-around' }}>
				<Box cursor='pointer' >
          <Sidebar/>
				</Box>

				<HStack justifyContent='space-between' spacing={{ base: 4, md: 12 }}>
					<HStack
						as='nav'
						display={{ base: 'none', md: 'block' }}
						spacing={{ md: '6', lg: '10', xl: '16' }}
					>
						{ROUTES.map(({ to, label }) => (
							<Text
								as={NavLink}
								to={to}
								fontSize='small'
								letterSpacing={{ md: '2px', lg: '4px' }}
								style={({ isActive }) => ({
									color: isActive ? navMenuColor : '#858585',
								})}
								key={label}
							>
								{label}
							</Text>
						))}
					</HStack>
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
                    src={john}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'xl'}
                      src={john}
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
              </HStack>
			</HStack>
		</Box>
	);
};

export default Header;