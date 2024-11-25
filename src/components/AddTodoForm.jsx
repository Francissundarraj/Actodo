import { useState } from "react"


function AddTodoForm({bravery ,trophy }) {
    const newActivity = bravery
    const newSetActivity = trophy
    const [addValue,setValue] = useState("")

    const adderBtn=(event)=> {
        setValue(event.target.value)
    }
const actchange =()=> {

    newSetActivity([...newActivity,{id:newActivity.length+1, activity:addValue}])
    setValue("")
}

    return (

        

        <div className="flex flex-col gap-3" >
        <h1 className="text-2xl font-medium">Manage Activities</h1>
        <div >
            <input value={addValue} onChange={adderBtn}  className="border border-black p-1 " type="text" placeholder="Next Activity?" />
            <button onClick={actchange} className="bg-black text-white p-1 border border-black">Add</button>
        </div>
       
    </div>
    )
}

export default AddTodoForm