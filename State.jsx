import { useState } from "react";
const State = () => {
   let [ name,setName]=useState("arijit")
//    
let [count,setCount]=useState(0)
// 
let [text,setText]=useState(true)

function handelChange(ankur){
  console.log(ankur.type);
  console.log(ankur.target);
  console.log(ankur.target.type);
  console.log(ankur.target.placeholder);
  console.log(ankur.target.value);
  
}

  
    return <>

     <br></br><br></br><br></br>


    name :
     <input type="text" onChange={handelChange} placeholder="enter name" ></input>


    <br></br><br></br><br></br>

    <hr></hr>
   <h1> Name : {name} </h1>
   <button onClick={()=>{setName("sumon")}}> Click to change name </button>

   <hr></hr>

   <h1>Counter :{count}</h1>
   <button onClick={()=>{setCount(count+1)}}>Increase</button> &nbsp; &nbsp;
   <button onClick={()=>{setCount(count-1)}}>decrease</button> &nbsp; &nbsp;
   <button onClick={()=>{setCount(0)}}>reset</button> &nbsp; &nbsp;

   <hr></hr>
   <button onClick={()=>{setText(!text)}}>CLick for {text ? "hide" :" show"} </button>
  {
    text ?  <h1>Text </h1> : null
  }
<hr></hr>

<h1>Multiple condition ternary operator</h1>
<button onClick={()=>{setCount(count+1)}}> incement </button>

{

  (count==0) ? <h1>condition 1  - {count}</h1> :
   (count==1) ?  <h1>condition 2  - {count}</h1> :
    (count==2) ? <h1>condition 3  - {count}</h1> :
    (count==3) ? <h1>condition 4  - {count}</h1> :
    (count==4) ? <h1>condition 5  - {count}</h1> :
    (count==5) ? <h1>condition 6  - {count}</h1> :
     <h1> other condition</h1>
   
}
   
    </>
}

export default State