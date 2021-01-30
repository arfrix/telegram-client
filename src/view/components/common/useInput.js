// jshint esversion: 6

import { useState} from 'react';




function useInputChange(userInputValue){
    const [inputValue , setInput] = useState()

    function valueHandler(e){
        setInput(e.target.value)
    }

    return {
        value : inputValue ,
        onChange : valueHandler ,
        placeholder : userInputValue
    }
}



export default useInputChange