import { createContext,useReducer } from "react";


export const Store=createContext();

const initialState={
    cart:{
        cartItems:[

        ]
    }
}

const reducer=(state,action)=>{
    switch(action.type) {
        case "ADD_CART_ITEM":
            console.log(action.payload);
            const newItem=action.payload;
            console.log(newItem);
            let cartItems=[]
            const existItem=state.cart.cartItems.find(item=>item._id===newItem._id);
            if(existItem) {
                 cartItems=state.cart.cartItems.map((item)=>{
                    if(item._id===newItem._id) {
                        return item=newItem;
                    }else{
                    return item;
                    }
                })
            }else{
                cartItems=[...state.cart.cartItems,newItem];
                console.log(cartItems);
            }
            return {...state,cart:{...state.cart,cartItems}}
        default:
            return state;
    }
}


export const StoreProvider=({children})=>{
           const [state,dispatch]= useReducer(reducer,initialState)
           const value={state,dispatch};
    return <Store.Provider value={value}>{children}</Store.Provider>
}