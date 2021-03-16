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
  const [primes, setPrimes] = useState(null);
  const [min, setMin] = useState();
  const [max, setMax] = useState();

  console.log(min, max)

  const handleClick = async () => {
    if(loading){
      return;
    }
    setLoading(true);
    console.log(`/primes/${min}/${max}`);
    let response = await fetch(`/primes/${min}/${max}`);

    if (response.ok) {
      let json = await response.json();
      setPrimes(json.primes);
      console.log(json)
    } else {
      alert("HTTP-Error: " + response.status);
    }
    setLoading(false);
  }

  return (
    <div className="App">
        <Title>Calcule seus números primos</Title>
        <Wrapper>
          <Input type='number' onChange={(e) => {setMin(parseInt(e.target.value))}}></Input>
          <Input type='number' onChange={(e) => {setMax(parseInt(e.target.value))}}></Input>
          <Button onClick={()=>{handleClick()}}>{
            loading ?
            <div class="lds-dual-ring"></div>
            :
            'Cálcular'
          }</Button>
        </Wrapper>
        <Lista>Lista de números primos: {primes ? primes.join(', ') : ''}</Lista>      
    </div>
  );
}

export default App;
