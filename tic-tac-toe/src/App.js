import './App.css';
import { useState } from 'react';
import Select from 'react-select';
import Button from '@mui/material/Button';  

function Square(){
  return (
    <div
    class="square"
    >
      this is your square
    </div>
  );
}

function App() {

  function PickAGame(setSelected){
    const options = [
      { value: 1, label: 1 },
      { value: 2, label: 2 },
      { value: 3, label: 3 },
      { value: 4, label: 4 },
      { value: 5, label: 5 },
      { value: 6, label: 6 },
    ]
    return(
      <div>
        <Select options={options} onChange={handleChange} autoFocus={true}/>
        <Button variant="outlined" onClick={()=>setNumberPicked(true)}>Outlined</Button>
      </div>
    );
  }
  function backGroundChange(setBgColor){
    const red=(0 + (Math.random() * (255 - 0)));
    const green=(0 + (Math.random() * (255 - 0)));
    const blue=(0 + (Math.random() * (255 - 0)));
    setBgColor([red,green,blue]);
  }
  function Game(){
    const list=[];
    for (var a=0;a<selected*selected;a++){
      list.push(Square);
    }
    return(
    <div className="grid-container">
        </div>
    );
  }
  const handleChange = (selectedOption) => {
    setSelected(selectedOption.value);
    console.log(`Option selected:`, selectedOption.value);
  };



  const [bgColor,setBgColor]=useState([0,0,0]);
  const [numberPicked,setNumberPicked]=useState(false);
  const [selected, setSelected] = useState(1);
  return (
    <div className="main-container" style={{backgroundColor:`rgb(${bgColor[0]},${bgColor[1]},${bgColor[2]})`}}
    >
    {(numberPicked===true) ?(
        <Game/>
    ):(
        <PickAGame setNumberPicked={setNumberPicked} setSelected={setSelected} />
    )
    }
    </div>
  );
}

export default App;
