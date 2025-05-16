import React,{useState} from 'react'
import './TicTacToe.css'
import circle from '../circle.png';
import cross from '../cross.png';

export function TicTacToe() {
  let data=["","","","","","","","",""];

  let [count,setCount] = useState(0);
  let [lock,setLock] = useState(false);

  const toggle = (e,num) =>{
    if (lock){
      return 0;
    }
    if(count%2===0)
    {
      e.target.innerHTML = `<img src='${cross}'>`;
      data[num]="x";
      setCount(++count);
    }
    else{
      e.target.innerHTML = `<img src="${circle}">`;
      data[num]="o";
      setCount(++count);
    }
    checkWin()

}

    const checkWin =() => {
  if(data[0]===data[1] && data[1]==[2] && data[2]!=="")
  {
    won(data);
  }
  else if(data[3]===data[4] && data[4]==[5] && data[5]!=="")
  { 
     won(data);
  }
  else if(data[6]===data[7] && data[7]==[8] && data[8]!=="")
  { 
     won(data);
  }
  else if(data[0]===data[3] && data[3]==[6] && data[6]!=="")
  { 
     won(data);
  }
  else if(data[1]===data[4] && data[4]==[7] && data[7]!=="")
  { 
     won(data);
  }
  else if(data[2]===data[5] && data[5]==[8] && data[8]!=="")
  { 
     won(data);
  }
  else if(data[0]===data[4] && data[4]==[8] && data[8]!=="")
  { 
     won(data);
  }
  else if(data[0]===data[1] && data[1]==[2] && data[2]!=="")
  { 
     won(data);
  }
  else if(data[2]===data[4] && data[4]==[6] && data[6]!=="")
  { 
     won(data);
  }
// const checkWin =() => {
//   if(data[0]===data[1] && data[1]===[2] && data[2]!=="")
//   {
//     won(data);
//   }
//   else if(data[3]===data[4] && data[4]===[5] && data[5]!=="")
//   { 
//      won(data);
//   }
//   else if(data[6]===data[7] && data[7]===[8] && data[8]!=="")
//   { 
//      won(data);
//   }
//   else if(data[0]===data[3] && data[3]===[6] && data[6]!=="")
//   { 
//      won(data);
//   }
//   else if(data[1]===data[4] && data[4]===[7] && data[7]!=="")
//   { 
//      won(data);
//   }
//   else if(data[2]===data[5] && data[5]===[8] && data[8]!=="")
//   { 
//      won(data);
//   }
//   else if(data[0]===data[4] && data[4]===[8] && data[8]!=="")
//   { 
//      won(data);
//   }
//   else if(data[0]===data[1] && data[1]===[2] && data[2]!=="")
//   { 
//      won(data);
//   }
//   else if(data[2]===data[4] && data[4]===[6] && data[6]!=="")
//   { 
//      won(data);
//   }

}

  return (
    <div className='container'>
      <h1 className="title">Tic Tac Toe Game In <span> React</span></h1>
      <div className="board">
        <div className="row1">
          <div className="boxes" onClick={(e) => { toggle(e, 0); } }></div>
          <div className="boxes" onClick={(e) => { toggle(e, 1); } }></div>
          <div className="boxes" onClick={(e) => { toggle(e, 2); } }></div>
        </div>
        <div className="row2">
          <div className="boxes" onClick={(e) => { toggle(e, 3); } }></div>
          <div className="boxes" onClick={(e) => { toggle(e, 4); } }></div>
          <div className="boxes" onClick={(e) => { toggle(e, 5); } }></div>
        </div>
        <div className="row3">
          <div className="boxes" onClick={(e) => { toggle(e, 6); } }></div>
          <div className="boxes" onClick={(e) => { toggle(e, 7); } }></div>
          <div className="boxes" onClick={(e) => { toggle(e, 8); } }></div>
        </div>
      </div>
      <button className="reset">Reset</button>
    </div>
  );
}
