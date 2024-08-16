import { useState } from "react"
function App() {
  const [add , setadd] = useState([])
  const InputPlace = (e)=>{
    e.preventDefault()
    // console.log(e.target.name.value)
    // newAdd = e.target.name.value
    // user = [...add , e.target.name.value]
    setadd([...add , e.target.name.value])
    e.target.reset()
  }
  
  const display = add.map((item , i)=> <ul key={i}>
    <li>{item}</li>
  </ul>
  )
  

  return (
    <>
    <div className="container">
      <div className="box" >
  <form onSubmit={InputPlace}>
  <label htmlFor="name"></label>
  <input
    type="text"
    name="name"
    required=""
 />
</form>    
<div>
  {display}
</div>
    
      </div>
    </div>
    </>
  )

}

export default App
