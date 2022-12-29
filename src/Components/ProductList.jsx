import React from 'react'
import ProductPicker from './ProductPicker'


import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  scrollBehavior,
  btnRef
} from '@chakra-ui/react'

const ProductList = () => {
  const { isOpen, onOpen, onClose, scrollBehavior,btnRef } = useDisclosure()

  return (
    <div>
  
    <input placeholder='Add the Product List' />
    <Button onClick={onOpen}> 🖋️</Button>
  
    <Modal  size={"full"} style={{ position: "absolute", right:"0px"}} closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}> 
      <ModalOverlay />
      <ModalContent w={"50%"} m={10} style={{borderRadius:"5px"}} >
        <ModalHeader>Add products</ModalHeader>
        <ModalCloseButton />

        <ModalBody style={{borderTop:"1px solid gainsboro"}} p={0} >
        <ProductPicker count={15} />
        </ModalBody>

        <ModalFooter>
        <Button onClick={onClose} mr={3}>Cancel</Button>
        <Button colorScheme='blue' >Save</Button>
        </ModalFooter>
      </ModalContent>
    </Modal> 

    </div>
    
  )
}

export default ProductList