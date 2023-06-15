import React, { useContext } from 'react'
import { SendMesagge } from './SendMesagge'
import { OutgoingMessage } from './OutgoingMessage'
import { CommingMesage } from './CommingMesage'
import { ChatContext } from '../context/chat/ChatContext'
import { AuthContext } from '../auth/AuthContext'

export const Messages = () => {

    const {chatState} = useContext(ChatContext);
    const {auth} = useContext(AuthContext);


  return (
    <div className="mesgs">

            <div 
              id='mensajes'
              className="msg_history"
            >

                {
                  chatState.mensajes.map(msg => (
                    (msg.para === auth.uid)
                        ? <CommingMesage key={msg._id} msg={msg}/>
                        : <OutgoingMessage key={msg._id} msg={msg}/>
                ))}

              {/** */}

                 

            </div>

            <SendMesagge/>

        </div>
  )
}
