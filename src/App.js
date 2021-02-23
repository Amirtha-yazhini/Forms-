import React,{useState,useEffect} from 'react';
import PeopleDetails from './components/PeopleDetails';
import UserData from './components/UserData';
import Success from './components/Success'


function App() {
  const [step , setStep] = useState(0)

  const nextStep = ()=>{
    setStep(step + 1)
     
  }
  const prevStep = ()=>{
    setStep(step - 1)
  }

switch(step){
  case 0 : 
  return(
    <PeopleDetails  nextStep={nextStep}/>
     

  )
  case 1:
    return(
      <UserData prevStep={prevStep} nextStep={nextStep} />
    )

    case 2:
      return(
        <Success/>
      )

}
 


 
}

export default App;
