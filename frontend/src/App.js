import './App.css';
import styled from "styled-components";
import LesRoutes from './Routes';

const cors = require('cors');

function my_fetch(){
fetch('http://localhost:8000/api')
  // method = "post"
  // headers: {
  //   Content-Type: "application/json",
  // },
  // body: JSON.stringify({
  //   email: this.state.registerEmail,
  //   password: this.state.registerPassword,
  // })
  .then(response => response.json())
  .then(json => console.log(json))

}
const Container = styled.div``;

const App = () => {
  return (
    <Container>
      <LesRoutes/>
    </Container>
  );
}

export default App;

 // "proxy": "http://localhost:8000"