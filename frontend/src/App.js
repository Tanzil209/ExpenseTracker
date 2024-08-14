import styled from "styled-components";
import bg from "./img/bg.png";
import { MainLayout } from "./styles/Layouts";
import Orb from "./Components/Orb/Orb";
function App() {
  return (
    <AppStyled bg={bg} className="App">
      <Orb></Orb>
      <MainLayout>
        <h1>App</h1>
      </MainLayout>
    </AppStyled>
  );
}
const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  background-size: cover; /* Ensures the background covers the entire area */
  background-position: center; /* Centers the image */
  position: relative;
`;

export default App;
