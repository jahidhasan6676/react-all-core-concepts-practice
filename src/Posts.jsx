// import { useEffect } from "react";
// import { useState } from "react"
// import ShowPost from "./ShowPost";
// import CategoryDetails from "./CategoryDetails";

// export default function Posts(){

   

//         const [post, setPost] = useState([]);

//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(res => res.json())
//         .then(data => setPost(data))
//     })

    

//     return (
//         <div >
//             <h3>All Posts: {post.length} </h3>
//             {
//                 post.map(post => <ShowPost post={post}></ShowPost>)
//             }
//         </div>
//     )
  

    
// }