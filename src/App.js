import { useState } from "react";
import ColourList from "./ColourList";
import Form from "./Form";
import Values from "values.js";
import { ToastContainer,toast } from 'react-toastify';

function App() {
  const [colors,setColors] = useState(new Values('#f15025').all(10));
  
  const addColor = (color) => {
    try{
      const newColor = new Values(color).all(10);
      setColors(newColor);
    }
    catch(error){
      if(color === '')
      {
        toast.error('Empty Color Value');
      }
      else{
        toast.error(error.message);
      }
    }
  }

  return (
    <main>
      <Form addColor={addColor}/>
      <ColourList colors={colors}/>
      <ToastContainer position="top-center"/>
    </main>
  );
}

export default App;
