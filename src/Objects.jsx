import { useState } from "react"

export default function Objects(){

    const [user, setUser] = useState({name: 'jahid hasan', age: 21});

    const incrementAge = () =>{
        const newUser = {...user, age:user.age + 1};
        setUser(newUser)
    }

    return (
        <div>
            <h3>Name: {user.name}, Age: {user.age}</h3>
            <button onClick={incrementAge}>Increment Age</button>
        </div>
    )
}