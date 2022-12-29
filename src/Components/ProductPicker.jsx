import React from 'react'



const ProductPicker = () => {
    const [loading, setLoading]  = React.useState(false)
    const [error, setError] = React.useState(false)
    const [data, setData] = React.useState([])
    const [search, setSearch] = React.useState("")


    React.useEffect(() => {
   
    fetchAndUpdateData()
      
    }, [search])

    const fetchAndUpdateData = () => {
        

        fetch(`https://stageapibc.monkcommerce.app/admin/shop/product?search=${search}&page=1`)
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((err) => setError(true))
        .finally(() => setLoading(false))

    }
    
    
  return (
    <div className='ProductPicker'> 
    

    <input className='search' onChange={(e) => setSearch(e.target.value)}
            type="text" placeholder="🔍 search" />
            <h1>products</h1>
    {
        loading ? (
            <h1>loading...</h1>
        ) : error ? (
            <h1>something went wrong</h1>
        ) : (
            <div className='products'>
            {data.map((item) => 
                <div className='mainitem' key ={item.id}>
                <div className='variants'>
                <input className='checkmark' 
                       
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

   

    </div>
  )
}

export default ProductPicker