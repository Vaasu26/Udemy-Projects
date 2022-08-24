export const initialState = {
    basket : Array(0),
    name : "",
    isUserLoggedIn : false,
    email : "",
    password : ""
}

export const basketTotal = (basket) => {
    return(basket?.reduce((amount, item) => (item.itemQuantity>1 ? item.price * item.itemQuantity : item.price) + amount, 0));
}


const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_BASKET" :
            return {
                ...state,
                basket : [...state.basket, action.item]
            }

        case "USER_LOGGED_IN" :
            return{
                ...state,
                basket : [...action.basket],
                name : action.name,
                email : action.email,
                password : action.password,
                isUserLoggedIn : action.isUserLoggedIn
            }

        case "SIGN_OUT_TO_LOGIN_PAGE" :
            return{
                ...state,
                basket : [...action.basket],
                isUserLoggedIn : action.isUserLoggedIn,
                name : "",
                email : "",
                password : ""
            }

        case "REMOVE_FROM_BASKET" :
            const index = state.basket.findIndex(
                    (basketItem) => basketItem.id === action.item.id
                );

            let newBasket = [...state.basket];

            if(index >= 0){
                newBasket.splice(index, 1)
            }
            else{
                console.warn(
                    `Can't remove product(id: ${action.id}) as its not in the basket!`
                )
            }
            return {
                ...state,
                basket : newBasket
            }

        case "DECREMENT_QUANTITY" :
            state.basket.map(bask => {
                if(bask.id === action.item.id){
                    bask.itemQuantity = action.item.itemQuantity
                }
            })
            return{
                ...state,
                basket : [...state.basket]
            }

        case "INCREMENT_QUANTITY" :
            state.basket.map(bask => {
                if(bask.id === action.item.id){
                    bask.itemQuantity = action.item.itemQuantity
                }
            })
            return{
                ...state,
                basket : [...state.basket]
            }

        default :
            return state
    }
}

export default reducer
