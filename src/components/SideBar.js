import React, { useContext } from 'react'
import { SidebarChatItem } from './SidebarChatItem'
import {AuthContext} from '../auth/AuthContext'
import { ChatContext } from '../context/chat/ChatContext'

export default function SideBar() {
    
  const {chatState} = useContext(ChatContext)
  const {auth} = useContext(AuthContext)



  const { uid } = auth;

  return (
    <div className="inbox_chat">
        {
            chatState.usuarios
                .filter( user => user.uid !== uid )
                .map((usuario) => (
                <SidebarChatItem 
                  key={usuario.uid}
                  usuario={usuario}
                />
            ))
        }

    



    <div className="extra_space"></div>


</div>
  )
}
