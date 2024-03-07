import { useState } from "react";

const Form = ({addColor}) => {
    const [color,setColor] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        addColor(color);
    }

    return (
        <section className="container">
            <h4>Colour Generator</h4>
            <form className="color-form" onSubmit={handleChange}>
                <input type="color" value={color} placeholder="#f15025" onChange={(e)=>{setColor(e.target.value)}}></input>
                <input type="text" value={color} placeholder="#f15025" onChange={(e)=>{setColor(e.target.value)}}></input>
            <button className="btn" type="submit" style={{background:color}}>Submit</button>
            </form>
        </section>
    )
}

export default Form;