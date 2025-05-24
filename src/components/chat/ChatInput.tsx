
import React, { useState } from "react";

type ChatInputProps = {
  onSendMessage: (message: string) => void;
};

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    onSendMessage(input);
    setInput("");
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="p-3 bg-white border-t border-gray-100 rounded-b-2xl"
    >
      <div className="relative">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full px-4 py-2 pr-10 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-apple-blue/30 focus:bg-white transition-all"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-1 top-1 bg-apple-blue text-white p-1.5 rounded-full hover:bg-apple-blue/90 transition-colors"
          disabled={!input.trim()}
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
