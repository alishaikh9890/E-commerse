import React from 'react'

const ProductPicker = () => {
    const [loading, setLoading]  = React.useState(false)
    const [error, setError] = React.useState(false)
    const [data, setData] = React.useState([])


    React.useEffect(() => {
   
    fetchAndUpdateData()
      
    }, [])

    const fetchAndUpdateData = () => {

        fetch(`https://stageapibc.monkcommerce.app/admin/shop/product?search=F&page=`)
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((err) => setError(true))
        .finally(() => setLoading(false))
    }
    console.log(data)
    
  return (
    <div>
    {
        loading ? (
            <h1>loading...</h1>
        ) : error ? (
            <h1>something went wrong</h1>
        ) : (
            <div>
            {data.map((item) => 
                <div key ={item.id}>
                <h1>{item.id}</h1>
                <h1>{item.src}</h1>
                

                </div>
                )}
            </div>
        )
    }
    </div>
  )
}

export default ProductPicker