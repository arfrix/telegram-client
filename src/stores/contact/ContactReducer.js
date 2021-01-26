export function contactReducer(state , action){
    console.log(state)
    switch (action.type) {
        case 'GET_CONTACTS':
            return{
                ...state ,
                contacts:{
                    status : 200 ,
                    data : action.payload ,
                    error : null        
                }
            }

        default:
            break;
    }
}