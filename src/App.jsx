import React from 'react';
import { useState } from 'react';
import './App.css';
import GenerateButton from './Buttons';
import WriteHere from './WriteHere';
import style from './App.module.css';

function App() {
  const AllButtons = ['C', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', '*', '/',"="];
      const [TotalNum,setTotalNum]=useState("");
      const onButtonClick=(NameofButton)=>{
        if(NameofButton==='C'){
          setTotalNum("");
        }
        else if(NameofButton==="="){
          const result=eval(TotalNum);
          setTotalNum(result)
        }
          else{
          const newVal=TotalNum+NameofButton;
          setTotalNum(newVal);
          }
      };    
  return (
    <>
    <div className={style.calculator}>
    <WriteHere displayVal={TotalNum}/>
      <GenerateButton  buttons={AllButtons} showButton={onButtonClick}></GenerateButton>
   </div> </>
  );
}
export default App;