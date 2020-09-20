import React from 'react';
import './App.css';
import ProductTable from './ProductTable';


let products=[
  {price :180,name:'dcMartens',category:'clothes'},
  {price :69,name:'stanSmith',category:'clothes'},
  {price :359,name:'goPro',category:'electronics'},
  {price :449,name:'appleWatch',category:'electronics'}
];

function App() {
  return (
    <div className="App">
      <ProductTable products={products}/>
    </div>
  );
}

export default App;
