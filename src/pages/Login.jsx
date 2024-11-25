import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"


function Login({newusers, newSets})
{

    const navigate = useNavigate()
    const [login,details] = useState("")
    const [pass,word] = useState("")
    const [ruser,setRuser] = useState(true)


    function handleInput(event){
        details(event.target.value)
    }

    function handlePassword(event){
        word(event.target.value)
    }

    function checkUser() {
var userfound =false

newusers.forEach(function(item) {

    if(item.username===login && item.password===pass) {
console.log("Login Successful")
userfound=true
navigate("/landing", {state:{user:login}})

    }
    if(userfound===false){
        console.log("Login failed")

        setRuser(false)
    }
})
    }

   
    return(
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-10 flex items-center justify-center min-h-screen " >

        <div className="bg-white shadow-lg rounded-lg p-16 ">
            <h1 className="text-3xl font-semibold text-center text-gray-800">Hey Hi</h1>
            {ruser?<p className="text-center text-gray-600 mt-2">I help you manage your activities after you login :)</p>:<p className="text-red-600 text-center mt-2"> "Please SignUp before login"</p>}
            <div className="flex flex-col gap-2 mt-6">
                <input value={login} onChange={handleInput} className=" w-full bg-gray-100 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500" type="text" placeholder="Username" />
                <input value={pass} onChange={handlePassword} className=" w-full bg-gray-100 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500" type="text" placeholder="Password" />
                
                <button onClick={checkUser} className="bg-purple-600 text-white w-full py-2 rounded-md hover:bg-purple-700 transition duration-200 ">Login</button>
            </div>
            <p className="text-center mt-4">Don't Have an account? <Link className="underline text-purple-600" to="/signup">SignUp</Link>  </p>
        </div>
text-purple-600

    </div>
    )
}

export default Login