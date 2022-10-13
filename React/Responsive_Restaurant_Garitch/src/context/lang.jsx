import React,{createContext,useContext,useReducer} from 'react';
import en from '../language/en.json';
import es from '../language/es.json';




const langReducer=(state, action)=>{
    switch(action.type){
        case "SET_LANGUAGE":
            return{
                language:action.payload
            }
        default:
            return state;
    }

}
const localStorageLang=localStorage.getItem('language');

const initialState={
    language: localStorageLang ? localStorageLang:'EN'
}

export const LangContext=createContext({});

const LangState=({children})=>{
    
    const [state, dispatch]=useReducer(langReducer,initialState);
    
    const setLanguage=(lang)=>{
        localStorage.setItem('language',lang);
        dispatch({
            type:"SET_LANGUAGE",
            payload:lang
        });
    }
    //The translate function has a single parameter that requires that the argument passed in has a property called key of type string. 
    const translate =(key)=>{
        const {language}=state;
        let langData={};
        if(language==='EN'){
            langData=en;
        }else if(language==='ES'){
            langData=es;
        }
        return langData[key];  
    }
    return(
        <LangContext.Provider value={{state,dispatch:{setLanguage,translate}}}>
            {children}
        </LangContext.Provider>
    )
}
export default LangState;