
import './dropdown.css';
import Dropdown from './Dropdown';
import { useState } from 'react';


function App() {

  const [selected, setSelected] = useState("");

  return (
    <div className="App">
      
    <h1> The Drop Down Menu </h1>

    <Dropdown selected={selected} setSelected={setSelected}/>

    </div>
  );
}

export default App;


