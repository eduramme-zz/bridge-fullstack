import './App.css';
import styled from 'styled-components';
import React, { useState } from 'react';

const Title = styled.h1`
  padding: 100px 0 0 10px;
`

function Title(props) {
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
        <Title>{props.children}</Title>

  );
}

export default Title;
