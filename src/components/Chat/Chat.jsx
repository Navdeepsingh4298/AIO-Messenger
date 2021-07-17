import React, { useEffect } from 'react';
import { useChat } from 'context';
import { getChats, ChatEngine } from 'react-chat-engine';

export const Chat = () => {
  const {myChats, setMyChats, chatConfig, selectedChat } = useChat();

  useEffect(() => {
    console.log("my Chats: ", myChats);
  },[myChats]);

  return (
    <>
      {!!chatConfig && (
        <ChatEngine
          hideUI={true}
          userName={chatConfig.userName}
          projectId={chatConfig.projectId}
          userSecret={chatConfig.userSecret}
          onConnect={() => {
            getChats(chatConfig, setMyChats);
          }}
        />
      )}
      <div className="chat-container">
        <div className="current-chat">
          {selectedChat ? <></> :
            <div className="no-chat-selected">
              <span className="point-left">👈</span>
              <span>Select a Chat</span>
          </div>}
        </div>
      </div>
    </>
  )
}
