import {BUY_BOOK} from './BookType';

 export const BuyBook=(number=1)=>{
    return{
        type:'BUY_BOOK',
        payload:number
    }
}