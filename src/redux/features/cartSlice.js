
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartItem:[]
}

// cart Slice
const cartSlice=createSlice({
    name:"cartslice",
    initialState,
    reducers:{

        // add to cart
        addCart:(state,action)=>
        {
            const itemIndex=state.cartItem.findIndex((item)=>item.id===action.payload.id)

            if(itemIndex>=0)
            {
                state.cartItem[itemIndex].qty +=1
            }
            else{
                const temp={...action.payload,qty:1}
                state.cartItem=[...state.cartItem,temp]
            }
        },

        // remove cart item
          removeCart:(state,action)=>
          {
            const data=state.cartItem.filter((el)=>el.id !==action.payload)
            state.cartItem=data
          },

        //   remove single item
            removeSingleItem:(state,action)=>
            {
                const itemIndex_dec=state.cartItem.findIndex((item)=>item.id===action.payload.id)

                if(state.cartItem[itemIndex_dec].qty >=1)
                {
                    state.cartItem[itemIndex_dec].qty -=1
                }
            }


    }
})

export const {addCart,removeCart,removeSingleItem}=cartSlice.actions
export default cartSlice.reducer