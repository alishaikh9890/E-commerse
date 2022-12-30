import React from 'react'
import { v4 as uuid } from "uuid";
import ProductPicker from './ProductPicker';
import Draggable from 'react-draggable';

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

const AddProduct = () => {
    const { isOpen, onOpen, onClose, scrollBehavior,btnRef } = useDisclosure()

    const [list, setList] = React.useState([]);

    const [hold, setHold] = React.useState("Select Product")

    const [ide, setIde] = React.useState("")
   


        const handleAdd = () => {
          const payload = {
            status: false,
            id: uuid()
          };
          setList([...list, payload]);
        };

        const hanldeDelete = (id) => {  
                const update = list.filter((el) => el.id !== id);
                setList(update);
              }

              const handleadd = (now) => {
                    setHold(now)
              }
            
        
  return (
    <div>

   <h2>Add Products</h2>
   
    <Modal  size={"full"} style={{ position: "absolute", right:"0px"}} closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}> 
      <ModalOverlay />
      <ModalContent className='model' w={"50%"} h={"50vh"} m={10} style={{borderRadius:"5px"}} >
        <ModalHeader>Add products</ModalHeader>
        <ModalCloseButton />

        <ModalBody style={{borderTop:"1px solid gainsboro"}} p={0} >

        <ProductPicker handleadd={handleadd} btn={onClose} />

        </ModalBody>

        <ModalFooter>
       

        </ModalFooter>
      </ModalContent>
    </Modal> 

    <div>
    
    {list.map((el) =>
    
        <Draggable>
        <div className='dragable'>
       <h1 style={{fontSize:"4vh", color:"gray", fontWeight:"900"}}>⋮⋮</h1>
        <div className='input' key={el.id}>
        <p >{hold}</p>
        <Button  style={{background:"none"}} 
       
         onClick={onOpen}> 🖋️</Button>
        </div>
        <button className='addbutton' >Add Discount</button>
        <button onClick={() => {hanldeDelete(el.id)
             setIde(el.id) }}>✕</button>
     
        </div> 
        </Draggable>
        
        )}
    
    </div>

    <button  style={{border:"2px solid #008060", color:"#008060",
    padding:"5px 10vh"}} onClick={handleAdd}>Add Product</button>

    <div>{ 
        
    }</div>
  
   
    </div>
  )
}

export default AddProduct