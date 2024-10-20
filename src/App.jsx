
import { useState } from 'react'
import './App.css'
// import ChildToParent from './ChildToParent'

// import CategoryBtn from './CategoryDetails'
// import Products from './Products'
// import CategoryDetails from './CategoryDetails'
// import Posts from './Posts'
// import Counter from './Counter'
import Objects from './Objects'
import Arrays from './Arrays'
function App() {

  // const [state, setState] = useState(true)
  // console.log(state)

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

    // const send = (sum)=>{
    //   setState(sum)
    // }


  // console.log(state)
  //   const  transfer = (massage) => {

  //     setState(massage)
  //   }

  return (
    <>

   
      <h3>React All Core Concepts Practice</h3>
      <Objects></Objects>
      <Arrays></Arrays>
      {/* <ChildToParent value={send}></ChildToParent> */}

      {/* <ChildToParent name={transfer}></ChildToParent> */}
      {/* <Counter></Counter>  
      <CategoryDetails ></CategoryDetails>                                                                                          
      <Posts></Posts> */}

      {/* <Products product={products}></Products> */}

    {/* {
      products.map(product => <Products product={product}></Products>)
    } */}

      
      
    </>
  )
}
     
export default App