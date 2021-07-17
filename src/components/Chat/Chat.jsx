import React, { useEffect } from 'react';
import { useChat } from 'context';

export const Chat = () => {
  const {chatConfig} = useChat();

  useEffect(() => {
    console.log(chatConfig);
  },[chatConfig]);

  return (
    <div>
      This is Chat
    </div>
  )
}
