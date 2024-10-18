
import './App.css'
// import CategoryBtn from './CategoryDetails'
// import Products from './Products'
import CategoryDetails from './CategoryDetails'
import Posts from './Posts'
import Counter from './Counter'
function App() {

    // const products = [
    //   {Id:1, name: 'Laptop', price: 2200, color: 'Silver', brand: 'Hp'},
    //   {Id:2, name: 'Mobile', price: 2000, color: 'Yellow', brand: 'Hp'},
    //   {Id:3, name: 'Monitor', price: 2600, color: 'Purple', brand: 'Hp'},
    //   {Id:4, name: 'Mouse', price: 200, color: 'Black', brand: 'Hp'}
    // ]

    // const products = [
    //   {Id:1, name: 'Shirt', price: 2200, color: 'Silver', brand: 'Hp', isSell: true},
    //   {Id:2, name: 'T-shirt', price: 2000, color: 'Yellow', brand: 'Hp', isSell: false},
    //   {Id:3, name: 'Punjabi', price: 2600, color: 'Purple', brand: 'Hp', isSell: true},
    //   {Id:4, name: 'Lungi', price: 200, color: 'Black', brand: 'Hp', isSell: false}
    // ]

  return (
    <>

   
      {/* <h3>React All Core Concepts Practice</h3> */}
      <Counter></Counter>
      <CategoryDetails ></CategoryDetails>
      <Posts></Posts>

      {/* <Products product={products}></Products> */}

    {/* {
      products.map(product => <Products product={product}></Products>)
    } */}

      
      
    </>
  )
}

export default App
