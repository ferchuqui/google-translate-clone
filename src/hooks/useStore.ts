import type {State, Action }  from '../types.d.ts';


/* 1- Create a initialState */
const initialState: State = {
    fromLanguage: 'auto',
    toLanguage: 'en',
    fromText: '',
    result: '',
    loading: false 
  }
  /* 2- Create a context / Reducer */
  function reducer (state: State, action: Action) {
  
    const { type } = action
  
    if (type === 'INTERCHANGE_LANGUAGES') {
      return{
        ...state,
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage
      } 
  }
  if (type === 'SET_FROM_LANGUAGE') {
     return{
       ...state,
       fromLanguage: action.payload
      }
    }
  if (type === 'SET_TO_LANGUAGE') {
      return{
        ...state,
        toLanguage: action.payload
      }
    }
  if (type === 'SET_FROM_TEXT') {
      return{
        ...state,
        loading: true,
        fromText: action.payload,
        result: ''
      }
    }
  if (type === 'SET_RESULT') {
      return{
        ...state,
        loading: false,
        result: action.payload
      }
    }
  
  return state
  }

  export function useStore() {
      /* 3- Usar el Hook useReducer */
  const [{
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading
}, dispatch] = useReducer(reducer, initialState)

const interchangeLanguages = () => {
  dispatch({ type: 'INTERCHANGE_LANGUAGES' })
}

const setFromLanguage = (payload) =>{
    dispatch ({ type: 'SET_FROM_LANGUAGE', payload })
}
const setToLanguage = (payload) =>{
    dispatch ({ type: 'SET_TO_LANGUAGE', payload })
}
const setFromText = (payload) =>{
    dispatch ({ type: 'SET_FROM_TEXT', payload })
}
const setResult = (payload) =>{
    dispatch ({ type: 'SET_RESULT', payload })
}   

return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  }
}
  }
