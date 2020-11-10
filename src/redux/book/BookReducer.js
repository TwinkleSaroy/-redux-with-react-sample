import {BUY_BOOK} from './BookType';

const IntialState={
    numberOfBooks:60
}
const BookReducer=(state=IntialState,action)=>{
    switch(action.type){
        case BUY_BOOK: return{
            ...state,
            numberOfBooks:state.numberOfBooks-action.payload
        }
        default: return state
    }
}

export default BookReducer;