import React,{useState} from 'react'

const PeopleDetails = ({nextStep}) => {
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    

    const next = (e)=>{
        e.preventDefault();
       
        nextStep()

    }
    
    return (
        
        <div>
            <form >
                <label for="name">Name</label>
                <input type="text" required value={name} placeholder="Enter your Name" onChange={e=>setName(e.target.value)} />
                <label for="password">Password</label>
                <input type="password" required="required" value={password} placeholder="Password please" onChange={e=>setPassword(e.target.value)} />
                <button onClick={next} className="button" >Next</button>
            </form>
            
        </div>
    )
}

export default PeopleDetails
