export const initialState = {
    basket : Array(0),
    name : "",
    isUserLoggedIn : false,
    email : "",
    password : ""
}

export const basketTotal = (basket) => {
    return(basket?.reduce((amount, item) => item.price + amount, 0));
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

        default :
            return state
    }
}

export default reducer
