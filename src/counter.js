import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { GrPowerReset } from 'react-icons/gr'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './counter.scss'

const Counter =() => {

    const [counter, setCounter] = useState(0);

    const handleClick = (val) => {
        if(val<0) val=0;
        setCounter(val);
    }
  return (
    <div className="counter-container">
    <div className="counter">
     <ButtonGroup>
      <Button variant="info" onClick = {() => handleClick(counter+1)}><AiOutlinePlusCircle/></Button>
      <Button className="text" variant="light" disabled>{counter}</Button>
      <Button variant="warning" onClick = {() => handleClick(counter-1)} disabled ={!counter}><AiOutlineMinusCircle/></Button>
      <Button variant="danger"onClick = {() => handleClick(0)} disabled ={!counter}><GrPowerReset/></Button>
    </ButtonGroup>
    </div>
    </div>
  );
}

export default Counter;