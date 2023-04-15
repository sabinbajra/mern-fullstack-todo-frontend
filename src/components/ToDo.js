import React from 'react'
import {BiEdit, BiCut} from "react-icons/bi"


const ToDo = ({ text,updateMode, deleteToDo}) => {
  return (
    <div className='todo'>
        <div className="text"> {text} </div>
        <div className="icons">
            <BiEdit className="icon" onClick={updateMode}></BiEdit>
            <BiCut className='icon' onClick={deleteToDo}></BiCut>
        </div>
    </div>
    
  )
}

export default ToDo