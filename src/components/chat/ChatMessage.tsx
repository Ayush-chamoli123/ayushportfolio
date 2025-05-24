
import React from "react";

type MessageProps = {
  text: string;
  sender: "user" | "ai";
  isTyping?: boolean;
};

const ChatMessage = ({ text, sender, isTyping = false }: MessageProps) => {
  if (isTyping) {
    return (
      <div className="mb-4 text-left">
        <div className="inline-block rounded-2xl px-4 py-2.5 max-w-[85%] bg-white shadow-sm border border-gray-100 rounded-tl-none">
          <div className="flex space-x-1.5">
            <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`mb-4 ${sender === "user" ? "text-right" : "text-left"}`}>
      <div
        className={`inline-block rounded-2xl px-4 py-2.5 max-w-[85%] ${
          sender === "user"
            ? "bg-apple-blue text-white rounded-tr-none"
            : "bg-white shadow-sm border border-gray-100 rounded-tl-none"
        }`}
      >
        <p className="text-sm whitespace-pre-wrap">{text}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
