import React, { createContext, useReducer } from "react";
import { chatReducer } from "./chatReducer";


export const ChatContext = createContext();

const initialState = {
    uid: '',
    chatActivo: null, //uid dek usuario al que se le quiere enviar mensaje
    usuarios: [],   //todos los usuarios de la base de datos
    mensajes: [],  //chat seleccionado
}


export const ChatProvider = ({children}) => {

    const [chatState, dispatch] = useReducer(chatReducer, initialState)

  return (
    <ChatContext.Provider value={{
        chatState,
        dispatch
    }}>
        {children}
    </ChatContext.Provider>
  )
}


