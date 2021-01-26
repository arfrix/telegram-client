export function ChatReducer(state , action){
    console.log(state)
    switch (action.type) {
        case 'GET_CHATS_REQUEST':
            return{
                ...state ,
                chats:{
                    status : 'LOADING' ,
                    data : null ,
                    error : null        
                }
            }
        case 'GET_CHATS_SUCCESSFUL':
            return{
                ...state ,
                chats:{
                    status : 'FINICHED' ,
                    data : action.payload ,
                    error : null        
                }
            }
        case 'GET_CHATS_FAILURE':
            return{
                ...state ,
                chats:{
                    status : 'FAILED' ,
                    data : null ,
                    error : action.payload        
                }
            }

        default:
            break;
    }
}