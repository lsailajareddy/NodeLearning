import React from "react";

const Dropdown = ()=>{
    var list =["sailu","chinnu","srij"];
    return <select>
        {list.map((item,index)=>{
            return <option value={index}>{item}</option>
        })}
       
    </select>
};
export default Dropdown;