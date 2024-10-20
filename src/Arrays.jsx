import { useState } from "react"

export default function Arrays(){

    const [number, updateNumber] = useState([1, 2, 3]);

    const addNumber = () =>{
        const newNumber = [...number, number.length + 1];
       updateNumber(newNumber)
    }

    return (
        <div>
            <h3>Numbers: {number} </h3>
            <button onClick={addNumber}>Add Number</button>
        </div>
    )
}