import { useDisclosure, Flex, Button,  Drawer, DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  IconButton,
  DrawerContent,
  DrawerCloseButton} from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons'
import React from "react";

const Sidebar=()=> {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
return (
    <Flex >
    <IconButton
            icon={<ChevronRightIcon w={8} h={8} />}
            colorScheme="blackAlpha"
            variant="outline"
            ref={btnRef} 
            onClick={onOpen}
            />
      <Drawer
       isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
      <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
export default Sidebar