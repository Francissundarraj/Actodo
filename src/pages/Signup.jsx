import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup({newusers, newSets}) {

    const navigate = useNavigate()

    const [login,details] = useState()
    const [pass,word] = useState()

    function handleInput(event){
        details(event.target.value)
    }

    function handlePassword(event){
        word(event.target.value)
    }

    function addUser() {

newSets([...newusers,{username:login, password:pass}])
navigate("/")
    }

    return (
        <div className="bg-black p-10" >

            <div className="bg-[#EFEFEF] p-10 border rounded-md ">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>Sign Up Here  :)</p>
                <div className="flex flex-col gap-2">
                    <input onChange={handleInput}  className=" w-52 bg-transparent border border-black rounded-md p-1" type="text" placeholder="Username" />
                    <input onChange={handlePassword} className=" w-52 bg-transparent border border-black rounded-md p-1" type="text" placeholder="Password" />
                    <input className=" w-52 bg-transparent border border-black rounded-md p-1" type="text" placeholder="Confirm Password" />
                    <button onClick={addUser} className="bg-[#F7A404] w-24 border p-1 rounded-md ">Sign Up</button>
                </div>
                <p >Already have an account? <Link className="underline" to={"/"}>Login</Link> </p>
            </div>


        </div>
    )

}

export default Signup