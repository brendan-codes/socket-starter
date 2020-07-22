import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
import logo from './logo.svg';
import './App.css';

function App() {

  const [socket] = useState(() => io(':9002'));
  const [number, setNumber] = useState(0);


  useEffect(() => {
    socket.on("update-number", data => {
      console.log("Update number has fired!");
      setNumber(number + data.number);
    })

    return () => socket.disconnect(true);
  }, [])

  const clickHandler = (e) => {
    socket.emit("message-from-client", {"message": "hey this is the client!", "number": number + 1});
    setNumber(number + 1);
  };

  return (
    <div className="App">
      <h1>Hello World!!!!</h1>
      <p>Clicked: {number}</p>
      <button onClick={clickHandler}>Click me!</button>
    </div>
  );
}

export default App;
