import  React,{createRef}  from "react";
import { useQuery,useMutation } from "@apollo/client";
import { createMessageMutation,getAllMessages } from "./gqlschema";
import './App.css';

function App() {

  const messageValue=createRef();
  const [addMessage] = useMutation(createMessageMutation); // used for update or saving data
  let {data,error,loading} = useQuery(getAllMessages); // used to query data only

  const Submit = ()=>{
    let message = messageValue.current.value;
    addMessage(
                {
                variables:{
                  data:{
                      message
                   }
                 }
               }
    ).then(data=>{
      console.log('Response ',data)
    }).catch(error=>{
      console.log("Error ",error)
    });
  }
  return (
    <div className="App">
      <input ref={messageValue} placeholder=""></input>
      <button onClick={Submit}>Insert</button>
    </div>
  );
}

export default App;
