import { useState } from "react";
import ListView from "./ListView";
import "./Counter.css"

const Counter=()=>{
    const [count, setCount]=useState(0);
    const [list, setList]=useState([]);
    const [isAscending, setIsAscending]=useState(false);
    
    function countInc(){
        setCount(prev=>prev+1);
    }
    function countDec(){
        if (count>0){
            setCount(prev=>(prev>0 ? prev-1 : 0));
        }
    }
    function addToList(){
        if (count>0){
            setList(prevList=>[...prevList,count])
            console.log(count)
            setCount(0);
        }
    }
    function toggleSort(){
        setIsAscending(prev=>!prev);
    }
    function resetList(){
        setList([]);
    }

    return(
        <div className="parent-container">
        <h1>Counter & List App</h1>
        <div className="counter-container">
            <h2>Counter</h2>
            <div className="countBtns">
                <button onClick={countDec}>-</button>
                <p>{count}</p>
                <button onClick={countInc}>+</button>
            </div>
            <button className="addToListbtn" onClick={addToList}>Add to List</button>
        </div>
        <ListView numbers={list} isAscending={isAscending} toggleSort={toggleSort} resetList={resetList}/>
        </div>
    )
}

export default Counter;