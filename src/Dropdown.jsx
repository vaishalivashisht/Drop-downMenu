import React, { useState } from 'react';
import './dropdown.css';



const Dropdown = ({selected, setSelected}) => {

    const options = ['React', 'Javascript', 'Angular', 'Html'];

    const handleSelectChange = (event) => {
        setSelected(event.target.value);
      };
    
      return (

      <div className='dropdown_content'>
                     
        <select id="dropdown" value={selected} onChange={handleSelectChange}>
        <option>Select an option</option>
        {options.map((option, index) => (
        <option value={option} key={index}>{option}</option>
        ))}
      </select> 
    
        
        </div> 
      );     

// const [isOpen, setIsOpen] = useState(false);

// const options = ['React', 'Javascript', 'Angular', 'Html'];


// const handleOpen = () =>{

//     setIsOpen(true);

//     console.log("Hello");

// }

// const handleSelect =(option) =>{

//     setSelected(option);
//     setIsOpen(false); 
// } 

//   return ( 
//    <>
//    <div className='dropdown-input'>  
      
//     <input type='text' value={selected} onBlur={() => setIsOpen(false)} onFocus={handleOpen} 
//     className='inp_box' placeholder='Choose One'/> 

//     </div> 

//     {isOpen && (
        
// <div className='dropdown_content'> 
                   
// {options.map((option,index)=> (
//  <div onClick={() => handleSelect(option)} key={index}>{option}</div>

// )

// )}

// </div> 
    
//     )} 
//   </>  
//   );






} 

export default Dropdown;


