import React, { useMemo,useState } from 'react'
import styled from 'styled-components'
import bg from './img/bg.png'
import Orb from './Components/Orb/Orb'
import Navigation from './Components/Navigation/Navigation'
import Dashboard from './Components/Dashboard/Dashboard'
import Incomes from './Components/Incomes/Income'
import Expenses from './Components/Expenses/Expenses'
import { useGlobalContext } from './context/globalContext.jsx'


const App = () => {

  const [active,setActive] = useState(1);

  const orbMemo = useMemo(()=>{         // used to prevent the reset functioning of orb when selecting anything
    return <Orb />
  },[])


  const displayData = () =>{
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard/>
      case 3:
        return <Incomes />
      case 4:
        return <Expenses />
      default:
        return <Dashboard/>
    }
  }

  const global = useGlobalContext();
  console.log(global);

  return (
    <AppStyled bg={bg}>
      {orbMemo}
      <MainContainer>
        <Navigation active={active} setActive={setActive}/>
         <main>
            {displayData()}
         </main>
      </MainContainer>
    </AppStyled>
  )
}


export default App

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  } 
  
`

const MainContainer = styled.div`
    padding: 2rem;
    height: 100%;
    display: flex;
    gap: 2rem;
`


 