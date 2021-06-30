import React, { useState } from 'react';

function generatePassword() {
  let output = ''
  for (let i = 0; i < 8; i += 1) {
    output += String.fromCharCode(Math.floor(Math.random() * 94) + 33);
  }
  return output;
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