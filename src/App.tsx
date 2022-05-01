import React, { Children, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';

// export const Box: React.FunctionComponent = (children)=>{
// return (
// <>  
// {children}
// </>
// )}

const List: React.FunctionComponent<{
  items: string[];
  onClick?: (item: string)=> void
}> 
= ({items, onClick})=>{
return (
  <ul>
{items.map((i, index)=>
  <li key={index} onClick={()=>onClick?.(i)} >{i}</li>
)}
  </ul>
)
}

function App() {
  const onListClick  = useCallback((i: string)=>{
    alert(i)}, []);
  return (
    <div className="App">
      <header className="App-header">
      </header>
      {/* <Box /> */}
      <List items={['1', 'two', 'tli']} onClick={onListClick} />
    </div>
  );
}

export default App;
