export function contactReducer(state , action){
    console.log(state)
    switch (action.type) {
        case 'GET_CONTACTS_REQUEST':
            return{
                ...state ,
                contacts:{
                    status : 'LOADING' ,
                    data : null ,
                    error : null        
                }
            }
        case 'GET_CONTACTS_SUCCESSFUL':
            return{
                ...state ,
                contacts:{
                    status : 'FINICHED' ,
                    data : action.payload ,
                    error : null        
                }
            }
        case 'GET_CONTACTS_FAILURE':
            return{
                ...state ,
                contacts:{
                    status : 'FAILED' ,
                    data : null ,
                    error : action.payload        
                }
            }

        default:
            break;
    }
}