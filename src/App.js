
import './App.css';
import AddProduct from './Components/AddProduct';
import ProductList from './Components/ProductList';
import ProductPicker from './Components/ProductPicker';

function App() {
  return (
    <div className="App">
    <h2>Add Product</h2>
    <ProductList />
    <ProductPicker />
    <AddProduct />
    
    </div>
  );
}

export default App;
