import "./ListView.css"

const ListView=({numbers, isAscending, toggleSort, resetList})=>{
    const sortedNumbers=[...numbers].sort((a,b)=>isAscending ? a-b : b-a);
    return(
        <div className="list-container">
            <div className="insideList-container">
                <h2>Numbers List</h2>
                <div className="list-btns">
                    <button onClick={resetList}>Reset</button>
                    <button onClick={toggleSort}>Sort{isAscending ? "↑":"↓"}</button>
                </div>
            </div>
            {numbers.length===0 ? (<p>No numbers added</p>): (
                <div className="view-container">
                    {sortedNumbers.map((num, index)=>(
                        <div className="view-card" key={index}>{index+1}. {num}</div>
                    ))}
                </div>
            )}
            <p className="total-numbers">Total Numbers: {numbers.length}</p>
        </div>
    )
}

export default ListView;