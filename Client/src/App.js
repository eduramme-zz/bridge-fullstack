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

const Form = styled.div`
  padding: 10px 0;
`

const Title = styled.h1`
  padding: 100px 0 0;
`

const Description = styled.p`
  padding: 0.2em 0.2em 1em;
  color: #0f0f0f;
`

const Lista = styled.p`
`

const Wrapper = styled.p`
  color: #0f0f0f;
  padding: 0 50px;
  max-width: 720px;

`

function App() {
  const [primes, setPrimes] = useState(null);
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if(loading){
      return;
    }
    setLoading(true);
    let response = await fetch(`/primes/${min}/${max}`);

    if (response.ok) {
      let json = await response.json();
      setPrimes(json.primes);
    } else {
      alert("HTTP-Error: " + response.status);
    }
    setLoading(false);
  }

  return (
    <div className="App">
      <Wrapper>
        <Title>Calcule seus números primos ☁️</Title>
        <Description>
          encontre os números primos entre dois determinados números
        </Description>
          <Form>
            <Input type='number' onChange={(e) => {setMin(parseInt(e.target.value))}}></Input>
            <Input type='number' onChange={(e) => {setMax(parseInt(e.target.value))}}></Input>
            <Button onClick={()=>{handleClick()}}>
              {
                loading ?
                <div class="lds-dual-ring"></div> :
                'Cálcular'
              }
            </Button>
          </Form>
        <Lista>
            Lista de números primos: <br /> <br />
        </Lista>
        <Lista>
            {primes ? primes.join(', ') : ''}
        </Lista>
      </Wrapper>
    </div>
  );
}

export default App;
