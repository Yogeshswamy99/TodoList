import React, { useState }from 'react'
import './todoList.css'
import ToDoLists from './ToDoLists';


const TodoList = () => {
    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);

    const itemEvent = (e) => {
        setInputList(e.target.value)
    };

    const itemClick = () => {
        setItems((oldItems) => {
            return [...oldItems,inputList]
        })
        setInputList("");
    
    };

    const deleteItems = (id) => {
        setItems((oldItems)=>{
            return oldItems.filter((arrEle,index) => {
                return index !== id;
            })
        })
    }

     
    return(
        <>
        <div className='Main_div'>
            <div className='Center_div'>
                <br/>
                <h1>ToDo List</h1>
                <br/>
                <input type='text' placeholder='Add Items' value={inputList} onChange={itemEvent}/>
                <button onClick={itemClick}> + </button>
                <br/>
                <ol>
                    
                   {items.map((itemval,index) => {
                        return <ToDoLists 
                        text = {itemval}
                        key = {index} 
                        id = {index}
                        onSelect = {deleteItems}/>
                    })}
                </ol>
            </div>
        </div>




        </>
    )
}
export default TodoList;



