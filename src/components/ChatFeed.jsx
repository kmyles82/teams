import React from 'react'
import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'

const ChatFeed = (props) => {
  
  const { chats, activeChat, userName, messages } = props
  const chat = chats && chats[activeChat]

  console.log(chats, userName, messages)

  const renderMessages = () => {
      const keys = Object.keys(messages)

      return keys.map((key, index) => {
        const message = messages[key]
        const lastMessageKey = index === 0 ? null : keys[index - 1]
        const isMyMessage = userName === message.sender.username

        return (
            <div key={`msg_${index}`} style={{width: '100%'}}>
                <div className="message_block">
                    {
                        
                    }
                </div>
            </div>
        )
      })
  }

    renderMessages()

  return <div>ChatFeed</div>
}

export default ChatFeed
