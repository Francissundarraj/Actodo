import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
import { useState } from "react"

function TodoContainer() {

    const [activityArr, setActivity] = useState([

        {
            id: 1,
            activity: "Go for a walk"
        }
        

    ])

    return (
        <div>
            <div className="flex gap-5 flex-wrap ">
                <AddTodoForm bravery={activityArr} trophy={setActivity} />
                <TodoList bravery={activityArr} trophy={setActivity} />
            </div>
        </div>
    )
}

export default TodoContainer