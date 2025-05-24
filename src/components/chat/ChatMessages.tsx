
import React, { useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";

type Message = {
  text: string;
  sender: "user" | "ai";
};

type ChatMessagesProps = {
  messages: Message[];
  isTyping: boolean;
};

const ChatMessages = ({ messages, isTyping }: ChatMessagesProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  return (
    <div className="h-[calc(100%-8rem)] overflow-y-auto p-4 bg-gray-50">
      {messages.map((msg, index) => (
        <ChatMessage key={index} text={msg.text} sender={msg.sender} />
      ))}
      
      {isTyping && <ChatMessage text="" sender="ai" isTyping={true} />}
      
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
