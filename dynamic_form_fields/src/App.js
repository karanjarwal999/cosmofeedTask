import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Button, Input } from '@chakra-ui/react';

function App() {
  const [output, setOuptput] = useState([])
  const [inputs, setinputs] = useState([{ id: 1, value: '' }])

  function handlesubmit() {
    let newAns = inputs.map(input => input.value)
    setOuptput(newAns)
  }
  function addInputBox() {
    setinputs((prev) => [...prev, { id: (prev[prev.length - 1]?.id + 1 || 1), value: '' }])
  }

  function handleDelete(id) {
    let newinputs = inputs.filter(input => input.id != id)
    setinputs(newinputs)
  }
  function handlechange(Id, Value) {
    let temp = inputs
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].id == Id) {
        temp[i].value = Value
        break
      }
    }
    setinputs(temp)
  }

  return (
    <div className="App">
      <h1 style={{ fontSize: '25px', margin: '30px', fontWeight: '700' }}>Dynamic input box</h1>
      <form style={{ padding: '20px', width: '600px', margin: "auto", textAlign: 'start', border: '1px solid black' }}>
        {inputs.map((i) =>
          <>
            <label htmlFor={`input${i.id}`}>{`Input ${i.id}`}</label>
            <div style={{ display: 'flex', gap: '5px' }}>
              <Input type='text' id={`input${i.id}`} onChange={(e) => handlechange(i.id, e.target.value)}  />
              <Button onClick={() => handleDelete(i.id)} colorScheme='white' color={'red'}>X</Button>
            </div>
          </>)}
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
          <Button onClick={addInputBox} colorScheme='green'>Add</Button>
          <Button onClick={handlesubmit} colorScheme='blue'>Submit</Button>
        </div>
      </form>
      <br />
      <br />
      <div>
        open console for result
      </div>
    </div>
  );
}

export default App;
