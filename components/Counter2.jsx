import React,{useState} from 'react'

const Counter = ({initialValue}) => {
//    let count=0;

const [count,setCount]=useState(initialValue);// initial value
const [count1,setCount1]=useState(initialValue+1000);// initial value
//    const incrementCount =()=>{
//       setCount(count+1)
//    }

//    const decrementCount =()=>{
//     setCount(count-1)
//  }

  return (
    <div>
      <h1>Counter app:{count} </h1>
      <h1>Counter app:{count1} </h1>

      <button onClick={()=> { setCount(count+1);setCount1(count1+100);
        // count=count+1;
    }} >Increment</button>
    
      <button onClick={()=>{
        if(count>0)
        {
          setCount(count-1)}
        }}
   
        >Decrement</button>
    </div>
  )
}

export default Counter
