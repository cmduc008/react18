///////////////////////////////// useState()-EX1
const [name,setName] = useState("MinhDuc") // useState()
const changeName = () =>{
setName("Minh Duc Changed")
console.log({name})
}
/////////////////////////////////// useState()-EX2
const [name2,setName2] = useState({firstname:"Cao",LastName:"Duc"})
const changeName2 = () =>{
setName2({firstname:"Cao Updated",LastName:"Duc Updated"})
console.log({name2})
}
const changeName2_1 = () =>{
setName2({LastName:"Duc Updated With Out First Name"})
console.log({name2})
}
/////////////////////////////////// useState()-EX3
const [name3,setName3] = useState("Empty")
const changeName3 = (e) => {
e.preventDefault()
console.log({name3})
}

    return (
      <div className="Ex1" >
        <h1>useState() Ex</h1>
        <p>My name is {name}</p>
        <button onClick={changeName}>Option 1 - Click</button>
        <h1>useState() Ex-2</h1>
        <p>FirstName is {name2.firstname}</p>
        <p>lastName is {name2.LastName}</p>
        <button onClick={changeName2}>Option 2 - Click</button>
        <button onClick={changeName2_1}>Option 2.1 - Click</button>
        <h1>useState() Ex-3</h1>
        <form >
          <input
          type="text"
          value={name3}
          onChange={(e)=>setName3(e.target.value)}
          placeholder='input value'
          />
          <button onClick={changeName3}>SUMBIT - CLICK</button>
        </form>
        <p>Name After Click is {name3}</p>
      </div>

)
