import './App.css'
import LineChart from './components/LineChart/LineChart'
// import DaisyCard from './components/DaisyCard/DaisyCard'
// import DaisyNav from './components/Daisynave/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {


  return (
    <>
     <div className='container mx-auto'>
     <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      {/* <DaisyCard></DaisyCard> */}
      {/* <h1 className='text-7xl bg-red-600'> Vite + React</h1> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>     
     </div>
    </>
  )
}

export default App
