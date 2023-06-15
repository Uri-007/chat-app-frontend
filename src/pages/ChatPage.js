import React, { useContext } from 'react'
import '../css/chat.css'
import { ImboxPeople } from '../components/ImboxPeople'
import { Messages } from '../components/Messages'
import { Chatselect } from '../components/Chatselect'
import { ChatContext } from '../context/chat/ChatContext'



export const ChatPage = () => {

  const {chatState} = useContext(ChatContext)

  return (
    <div className="messaging">
    <div className="inbox_msg">

        
       <ImboxPeople/>

        {
          (chatState.chatActivo)
            ? <Messages/>
            : <Chatselect/>
        }

       

        {/*<Messages/>*/}

        

    </div>


</div>
  )
}
