import './App.css';
import styled from 'styled-components';
import React, { useState } from 'react';


const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: "palevioletred";
  background: white;
  border: none;
  border-radius: 3px;
`;

const Button = styled.button`
  padding: 0.5em;
  margin: 0.5em;
  color: "palevioletred";
  background: white;
  border: none;
  border-radius: 3px;
`;


const Wrapper = styled.div`
  padding: 10px 0;

`

const Title = styled.h1`
  padding: 100px 0 0 10px;
`

const Lista = styled.p`
  padding: 10px 0 0;
`


function App() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
        <Title>Calcule seus números primos</Title>
        <Wrapper>
          <Input></Input>
          <Input></Input>
          <Button onClick={()=>{console.log('button pressed')}}>{
            loading ?
            'loading'
            :
            'Cálcular'
          }</Button>
        </Wrapper>
        <Lista>Lista de números primos: 2, 3, 5, 7...</Lista>      
    </div>
  );
}

export default App;
