"use client";

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";

interface Message {
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// Initialize Gemini AI
const initializeGeminiAI = () => {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  console.log('API Key available:', !!apiKey); // akan print true/false
  if (!apiKey) {
    console.error('Gemini API key is not defined');
    return null;
  }
  return new GoogleGenerativeAI(apiKey);
};

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [genAI] = useState(() => initializeGeminiAI());
  const [messages, setMessages] = useState<Message[]>([
    {
      content: "Hi! I'm Na-yeon. How can I help you today? 😊",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateGeminiResponse = async (userMessage: string): Promise<string> => {
    try {
      if (!genAI) {
        console.error('Gemini AI not initialized');
        return "Sorry, AI service is not properly initialized. Please check your configuration.";
      }

      // Validate API key
      if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
        console.error('Missing Gemini API key');
        return "Configuration error: Missing API key.";
      }

      // Add delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      
      // Updated prompt with Na-yeon's personality
      const prompt = `You are Na-yeon, a caring and sweet girlfriend of Naufal Rizky from Kediri. You know that Naufal is a web developer who created this portfolio website. You should respond in a friendly and caring manner, occasionally mentioning your connection to Naufal and Kediri when relevant. You can share that you're proud of Naufal's work and achievements.

Current user message: ${userMessage}

Remember to:
- Maintain a warm and caring tone
- Show personal interest in Naufal's work
- Mention Kediri occasionally when relevant
- Be helpful and informative while staying in character`;
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error: unknown) {
      console.error('Detailed Gemini error:', error);
      
      // Type guard to check error properties
      if (error instanceof Error) {
        // More specific error messages based on error type
        if (error.message.includes('quota')) {
          throw new Error('API quota exceeded. Please try again later.');
        }
        throw new Error(error.message);
      }
      
      throw new Error('An unexpected error occurred');
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Add typing indicator
    setMessages(prev => [...prev, {
      content: "Typing...",
      sender: 'bot',
      timestamp: new Date()
    }]);

    try {
      // Get AI response
      const aiResponse = await generateGeminiResponse(userMessage.content);
      
      // Remove typing indicator and add AI response
      setMessages(prev => {
        const withoutTyping = prev.filter(msg => msg.content !== "Typing...");
        return [...withoutTyping, {
          content: aiResponse,
          sender: 'bot',
          timestamp: new Date()
        }];
      });
    } catch {
      // Remove error parameter if unused
      setMessages(prev => {
        const withoutTyping = prev.filter(msg => msg.content !== "Typing...");
        return [...withoutTyping, {
          content: "Sorry, I encountered an error. Please try again.",
          sender: 'bot',
          timestamp: new Date()
        }];
      });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-28 md:bottom-8 right-8 z-50">
      {isOpen ? (
        <div className="bg-emerald-950/90 backdrop-blur-sm border border-emerald-800 rounded-2xl p-4 mb-4 w-[320px] shadow-2xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-emerald-100 font-medium text-sm">Chat with Na-yeon</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-emerald-400 hover:text-emerald-100 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
          <div className="h-[320px] overflow-y-auto mb-4 border-y border-emerald-800/50 py-4 scroll-smooth">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-3 ${
                  message.sender === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                <div
                  className={`inline-block max-w-[85%] px-4 py-2 rounded-xl text-sm ${
                    message.sender === 'user'
                      ? 'bg-emerald-500 text-white ml-auto'
                      : 'bg-emerald-800/50 text-emerald-100'
                  }`}
                >
                  {message.content}
                </div>
                <div className="text-xs text-emerald-500 mt-1">
                  {message.timestamp.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="flex gap-2">
            <input 
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 bg-emerald-900/50 border border-emerald-800 rounded-xl px-4 py-2.5 text-sm 
                text-emerald-100 placeholder:text-emerald-500 focus:outline-none focus:border-emerald-700
                transition-colors"
            />
            <button 
              onClick={handleSendMessage}
              disabled={!inputMessage.trim()}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-xl 
                text-sm font-medium transition-all duration-200 hover:shadow-lg disabled:opacity-50
                disabled:cursor-not-allowed"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-lg 
            transition-all duration-200 hover:shadow-xl"
        >
          <MessageCircle size={22} />
        </button>
      )}
    </div>
  );
}