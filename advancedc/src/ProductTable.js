import React from 'react';      
import propTypes from 'prop-types';
import './style.css';

const ProductTable = ({products}) => {

 


    return (
       <table style={{backgroundColor: 'black', borderColor: 'gold teal',color:'white', width:'70%',margin:'15%'}}>
           <tr>
               <th style={{border: '1px solid #999', padding: 0.5}} >
                   name 
               </th>
               <th style={{border: '1px solid #999', padding: 0.5}}>
                   price
               </th>
               <th style={{border: '1px solid #999', padding: 0.5}}>
                   category
               </th>
           </tr>
           {
                products.map(product=><tr>
                    <td style={{border: '1px solid #999', padding: 0.5}}>{product.name}</td>
                    <td style={{border: '1px solid #999', padding: 0.5}}>{product.price}</td>
                    <td style={{border: '1px solid #999', padding: 0.5}}>{product.category}</td>
                    
                    </tr>)
           }
       </table>
    )
}


ProductTable.propTypes ={
    products: propTypes.arrayOf(propTypes.shape({
        price:propTypes.number,
        name:propTypes.string,
        category:propTypes.oneOf(['clothes','electronics'])

    }))
}

export default ProductTable;