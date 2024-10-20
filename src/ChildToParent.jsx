
// export default function ChildToParent({name}){
//     // console.log(name)
//     return (
//         <div>
//             <h2>This is service</h2>
//             <button onClick={()=>{name('my name is data')}}>Click From service</button>
//         </div>
//     )
// }


export default function ChildToParent({value}){
    // console.log(value)
  
    return (
        
        <div>
            <h2>This is service</h2>
            <button onClick={()=>{value('service dilam')}}>Service send</button>
        </div>
    )
}