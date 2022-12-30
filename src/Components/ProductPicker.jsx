import React from 'react'
import { Spinner,
Button
 } from '@chakra-ui/react'



const ProductPicker = ({handleadd, btn}) => {



    const [loading, setLoading]  = React.useState(false)
    const [error, setError] = React.useState(false)
    const [data, setData] = React.useState([])
    const [search, setSearch] = React.useState("")
    const [check, setCheck] = React.useState(false)
    const [item, setItem] = React.useState([])
    const [value, setValue] = React.useState(true)
    
    React.useEffect(() => {
   
    fetchAndUpdateData()
      
    }, [search])

    const fetchAndUpdateData = () => {
        setLoading(true)
        fetch(`https://stageapibc.monkcommerce.app/admin/shop/product?search=${search}&page=1`)
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((err) => setError(true))
        .finally(() => setLoading(false))
    }

    // const handleAdd = (now) => {
        
    // }
    
   
  
  return (
    <div className='ProductPicker'> 
    

    <input className='search' onChange={(e) => setSearch(e.target.value)}
            type="text" placeholder="🔍 search" />
          
    {
        loading ? (
            <h1><Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          /></h1>
        ) : error ? (
            <h1>something went wrong</h1>
        ) : (
            <div className='products'>
            {data.map((item) => 
                <div className='mainitem' key ={item.id}>
                <div className='variants'>
                <input className='checkmark' 
                value={value}
                onChange={() => setValue(item.title)}
                 type="checkbox" />
                <img src={item.image.src} alt="" />
                <p>{item.title}</p>
                </div>
                

                <div className='subitem'>{item.variants.map((text) =>
                    <div className='items'>
                    <div>
                    <input className='check' type="checkbox"
                     />
                    <p>{text.title}</p>
                    </div>
                    <h4>₹ {text.price}</h4>
                    </div>
                    )}</div>

                </div>
                )}
            </div>
        )
    }
    <div style={{display:"flex", gap:"2vh", paddingRight:"2vh", flexDirection:"row-reverse"}}>
    
    <Button colorScheme='blue' 
    
    onClick={() => {handleadd(value)
    btn()}}
    >Add</Button>
    <Button onClick={btn} mr={3}>Cancel</Button>
    </div>
 
   

    </div>
  )
}

export default ProductPicker