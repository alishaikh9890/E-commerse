import React from 'react'

const AddProduct = () => {
    const [butn, setButn] = React.useState()

    const CreateButton = () => {
        setButn(butn + 1)
    }

  return (
    <div>
    <button onClick={() => CreateButton()}>Add Product</button>

    <div>{
        
    }</div>
    </div>
  )
}

export default AddProduct