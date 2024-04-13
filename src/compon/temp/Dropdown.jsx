import React from "react";

const Dropdown = ({title, options,func}) => {
  return (
    <div className="relative">
      <select defaultValue="0" name="format" onChange={func}
        className="block appearance-none w-fit bg-[#9786cd] border-gray-700 text-white py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-gray-700 focus:border-gray-700 hover:bg-gray-700"
      >
        <option>{title.toUpperCase()}</option>
        {options.map((item,index)=>{
            return (
              <option key={index}>{item.toLowerCase()}</option>
            )
        })}
        
      </select>

    </div>
  );
};

export default Dropdown;
