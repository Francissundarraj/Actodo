function Card(reming) {
    return(
       

<div style={{backgroundColor:reming.bgcolor}} className=" px-10 py-5 border rounded-md text-center flex-grow ">
<h2 className="text-2xl font-medium" >{reming.title}</h2>
<p>{reming.subtitle}</p>
</div>
    )
}

export default Card