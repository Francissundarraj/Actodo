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
        <div className="bg-black p-10" >

        <div className="bg-[#EFEFEF] p-10 border rounded-md ">
            <h1 className="text-3xl font-medium">Hey Hi</h1>
            {ruser?<p>I help you manage your activities after you login :)</p>:<p className="text-red-800"> "Please SignUp before login"</p>}
            <div className="flex flex-col gap-2">
                <input value={login} onChange={handleInput} className=" w-52 bg-transparent border border-black rounded-md p-1" type="text" placeholder="Username" />
                <input value={pass} onChange={handlePassword} className=" w-52 bg-transparent border border-black rounded-md p-1" type="text" placeholder="Password" />
                
                <button onClick={checkUser} className="bg-[#8271D9] w-24 border p-1 rounded-md ">Login</button>
            </div>
            <p >Don't Have an account? <Link className="underline" to="/signup">SignUp</Link>  </p>
        </div>


    </div>
    )
}

export default Login