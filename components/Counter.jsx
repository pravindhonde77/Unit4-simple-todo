import React from 'react'

const Counter = () => {
//    let count=0;

const [count,setCount]=React.useState(100);

//    const incrementCount =()=>{
//       setCount(count+1)
//    }

//    const decrementCount =()=>{
//     setCount(count-1)
//  }

  return (
    <div>
      <h1>Counter app:{count} </h1>
      <button onClick={()=> setCount(count+1)}>Increment</button>
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
