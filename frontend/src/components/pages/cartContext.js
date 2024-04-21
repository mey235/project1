import { createContext, useContext, useState,useEffect } from 'react';

const CartContext= createContext();
export const CartProvider=({children})=>
{
    const [cartItems, setCartItems] = useState([]);
    
    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (storedCartItems) {
          setCartItems(storedCartItems);
          console.log(storedCartItems);
        }
      }, []);

      useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        console.log(cartItems)
      }, [cartItems]);
   
    
    const addItem=(item)=>
    {
         setCartItems([...cartItems,item])
    }
    const RemoveItem=(index)=>
    {
        const newitems=[...cartItems];
        newitems.splice(index,1);
        setCartItems(newitems)
    }
    return(
        <CartContext.Provider value={{ cartItems, addItem, RemoveItem }}>
        {children}
      </CartContext.Provider>
    );


}
export const CartChangeContext=()=>
{
   return useContext(CartContext);
};
