import './App.css';
import { useState } from 'react';
import Select from 'react-select';
import Button from '@mui/material/Button';  

function App() {


  function Square(props){
    function defaultOnPress(){
      console.log("This is "+props.id+" square");
    }
    console.log("Id: "+props.id);
    console.log("Row: "+Math.floor(props.id/props.size)+" lol");
    console.log("Column"+props.id%props.size);
    var icon={
      0:"",
      1:"X",
      2:"O",
    };
    //style={{width:`${Math.floor(50/props.size)}vw`,height:`${Math.floor(50/props.size)}vw`,gridRow:(Math.floor(props.id/props.size))+1,gridColumn:(props.id%props.size)+1}}
    //{icon[props.onMove]}  `${Math.floor(50/props.size)}vw`
    console.log(`${Math.floor(50/props.size)}vw`);
    console.log("id:"+props.id+" row:"+((Math.floor(props.id/props.size))+1)+" column: "+((props.id%props.size)+1));
    return (
      <div
      className="squarer"
      onClick={defaultOnPress}
      style={{}}
      >
        <div className='icon'>
        x
        </div>
      </div>
    );
  }


  function PickAGame(setSelected){
    const options = [];
    for(var a=3;a<=15;a++){
      options.push({value:a,label:a});
    }
    const playModeOptions = [
      { value: 1, label: "Local" },
      { value: 2, label: "Easy (AI)" },
      { value: 3, label: "Medium (AI)" },
      { value: 4, label: "Hard (AI)" },
      { value: 5, label: "Ultra Hard (AI)" },
      { value: 6, label: "Shit Your Pants (AI)" },
    ];
    return(
      <div>
        <Select options={options} onChange={handleChange} autoFocus={true}/>
        <Select options={playModeOptions}/>
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
      list.push(<Square key={a} id={a} onMove={onMove} size={selected}/>);
    }
    var gridTemplate="";
    for (var a=0;a<selected;a++){
      gridTemplate+=` ${Math.floor(50/selected)}vw`;
    }
    console.log("Our template: "+gridTemplate+" lol");
    return(
      <div className="game-main-container">
        <div>
          Now moves: 
        </div>
        <div className="grid-container" style={{}} >
          {list}
        </div>
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
  const [onMove,setMove]=useState(0);
  console.log("This is on Move: "+onMove+" lol");
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
