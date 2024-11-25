function TodoItem(mander)
{

    const activityArr2 = mander.activityArr1
    const setActivity2 = mander.setActivity1
    
    function handledel(deleteid) {
var temparr = activityArr2.filter(function (binders)
{

    if (binders.id === deleteid) {
        return false
    }
    else {
        return true
    }

})
setActivity2(temparr)
    }

 
    
    return(
<div className="flex justify-between">
<p>{mander.index + 1}.{mander.manny.activity}</p>
<button className="text-red-500  cursor-pointer" onClick={()=>{handledel(mander.geater)}} >Delete</button>
</div>
    )
    
}
export default TodoItem