import React, { useState } from 'react';

function generatePassword() {
  let output = ''
  for (let i = 0; i < 9; i += 1) {
    output += String.fromCharCode(Math.floor(Math.random() * 94) + 33);
  }
  const beginning = output.slice(0, 3);
  const middle = output.slice(3, 6);
  const end = output.slice(6);
  return `${beginning}-${middle}-${end}`
}

function Password() {
  const [password, setPassword] = useState('p@$$w0rd');
 
  return (
    <div>
      <div>{password}</div>
      <div>
        <button onClick={(e) => {
          setPassword(generatePassword())
        }}>Generate</button>
      </div>
    </div>
  );
}

export default Password;