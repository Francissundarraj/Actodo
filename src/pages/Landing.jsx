
import { useLocation } from "react-router-dom"
import Header from "../components/Header"
import Card from "../components/Card"
import TodoContainer from "../components/To do container"


function Landing() {

    const data = useLocation()
    

    return(
        <div className="bg-black p-16">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
          <Header name= {data.state.user} />
  
          <div className="flex justify-between gap-7 my-5 flex-wrap">
            <Card bgcolor={"#8271D9"} title={"23°"} subtitle={"Chennai"} />
            <Card bgcolor={"#FC6662"} title={"20 December"} subtitle={"14:02:34"} />
            <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />
          </div>
  
         <TodoContainer/>
  
  
  
        </div>
      </div>
    )

}

export default Landing