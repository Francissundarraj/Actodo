import { useState } from "react"
import TodoItem from "./TodoItem"


function TodoList({bravery,trophy}) {
    
    const activityArrs = bravery
const setActivitys = trophy
    return (
        <div className="bg-[#BEB5EB] border rounded-md p-2 flex flex-col gap-3 flex-grow">
            <h1 className="text-2xl font-medium">Today's Activity</h1>
             {activityArrs.length === 0?<p>You haven't added any activity</p>:""}
            
            {
                activityArrs.map(function (manny, index) {
                    return <TodoItem key={manny.id}  geater={manny.id} manny={manny} index={index} 
                    activityArr1={activityArrs} setActivity1 = {setActivitys}
                    />
                }
                )
            }
        </div>

    )
}

export default TodoList