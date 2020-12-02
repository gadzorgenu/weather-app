import React, {useState} from 'react'
import {
    useDisclosure,  
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Divider,
    Avatar,
    Text,
    Flex

} from '@chakra-ui/react'

const SideMenu = () => {
    const {isOpen, onClose, onOpen } = useDisclosure()
    const [menu, setMenu] = useState('left')

    return (
       <>
        <Button onClick={onOpen} w='80px' mt={8}> 
            {/* <Flex direction='column'>
                <Divider orientation ='horizontal' w='20px' borderColor='gray.500'/>
                <Divider orientation='horizontal'w='40px' borderColor='gray.500'/>
                <Divider orientation='horizontal' w='60'borderColor='gray.500'/>
            </Flex> */}
            Open
        </Button>
        <Drawer onClose={onClose} isOpen={isOpen} placement={menu}>
            <DrawerOverlay>
                <DrawerCloseButton/>
                <DrawerContent>
                    <Avatar name='Georgina Adzorgenu' src={'require(../assets/img.JPG)'} m='auto' mt={8}/>
                    <DrawerBody>
                        <Text>hi</Text>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
       </>
    )
}

export default SideMenu
