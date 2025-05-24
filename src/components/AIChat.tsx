
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import AIChatSettings from "./AIChatSettings";
import ChatHeader from "./chat/ChatHeader";
import ChatMessages from "./chat/ChatMessages";
import ChatInput from "./chat/ChatInput";
import { Message, generateAIResponse, sendEmailNotification } from "@/utils/chatUtils";

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi there! I'm your AI assistant. Ask me anything about this portfolio!", sender: "ai" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [forwardEmail, setForwardEmail] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    // Load saved email from localStorage
    const savedEmail = localStorage.getItem("chat-forward-email");
    if (savedEmail) {
      setForwardEmail(savedEmail);
    }
  }, []);

  const handleSendMessage = async (input: string) => {
    // Add user message to chat
    setMessages(prev => [...prev, { text: input, sender: "user" }]);
    
    // Simulate AI thinking
    setIsTyping(true);
    
    try {
      // Get AI response
      const response = await generateAIResponse(input);
      
      // Add AI response to chat
      setMessages(prev => [...prev, { text: response, sender: "ai" }]);
      
      // Forward message to email if configured
      if (forwardEmail) {
        await sendEmailNotification(input, forwardEmail);
        toast({
          title: "Message Forwarded",
          description: "The message has been forwarded to your email address.",
          duration: 3000,
        });
      }
    } catch (error) {
      console.error("Error in chat:", error);
      toast({
        title: "Email Forwarding Failed",
        description: "Unable to forward the message to your email. Please check your settings.",
        variant: "destructive",
      });
    } finally {
      setIsTyping(false);
    }
  };

  const handleSaveSettings = (email: string) => {
    setForwardEmail(email);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat Button */}
      <button
        className={`bg-apple-blue w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
        onClick={() => setIsOpen(true)}
        aria-label="Open chat"
      >
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          ></path>
        </svg>
      </button>
      
      {/* Chat Window */}
      <div 
        className={`chat-window w-80 sm:w-96 h-96 overflow-hidden transition-all duration-300 ${
          isOpen 
            ? "scale-100 opacity-100 transform-origin-bottom-right" 
            : "scale-0 opacity-0 transform-origin-bottom-right"
        }`}
      >
        <ChatHeader 
          onClose={() => setIsOpen(false)} 
          onOpenSettings={() => setSettingsOpen(true)} 
        />
        
        <ChatMessages messages={messages} isTyping={isTyping} />
        
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
      
      {/* Settings Dialog */}
      <AIChatSettings 
        open={settingsOpen}
        onOpenChange={setSettingsOpen}
        onSave={handleSaveSettings}
      />
    </div>
  );
};

export default AIChat;
