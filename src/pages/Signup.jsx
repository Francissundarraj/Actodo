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
        <div className="bg-gradient-to-r from-green-400 to-blue-500 p-10 flex items-center justify-center min-h-screen" >

            <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-md ">
                <h1 className="text-3xl font-semibold text-center text-gray-800">Hey Hi</h1>
                <p className="text-center text-gray-600 mt-2">Sign Up Here  :)</p>
                <div className="flex flex-col gap-2 mt-6">
                    <input onChange={handleInput}  className=" w-full bg-gray-100 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500" type="text" placeholder="Username" />
                    <input onChange={handlePassword} className=" w-full bg-gray-100 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500" type="text" placeholder="Password" />
                    <input className=" w-full bg-gray-100 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500" type="text" placeholder="Confirm Password" />
                    <button onClick={addUser} className="bg-[#F7A404] text-white w-full py-2 rounded-md hover:bg-green-700 transition duration-200 ">Sign Up</button>
                </div>
                <p className="text-center mt-4 ">Already have an account? 
                <Link className=" underline text-green-600 "  to={"/"}>
                Login
                </Link>
                 </p>
            </div>


        </div>
    )

}

export default Signup