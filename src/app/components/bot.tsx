"use client";
import { useState, useEffect, useRef } from 'react';
import { useChat } from "ai/react";
import { MdChat, MdAccountCircle } from 'react-icons/md';
import { FaRobot } from 'react-icons/fa';
import { HiOutlineChevronUp, HiOutlineChevronDown } from 'react-icons/hi';

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages]);

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-center items-center w-full p-3 bg-gray-800 text-white rounded-t-lg hover:bg-gray-600 active:bg-gray-700"
      >
        {isOpen ? <HiOutlineChevronDown /> : <HiOutlineChevronUp />}
        <MdChat className="ml-2"/>
        <span className="ml-2">BotBus</span>
      </button>
      {isOpen && (
        <div className="flex flex-col h-96 bg-white rounded-b-lg">
          <div className="overflow-auto p-4 flex-grow">
            {messages.map((message, index) => (
              <div key={message.id} className={`flex items-start mt-2 ${message.role === 'user' ? 'justify-end' : ''}`}>
                {message.role === 'user' ? <MdAccountCircle className="mr-2 text-blue-500" /> : <FaRobot className="mr-2 text-green-500" />}
                <p className={`p-2 rounded-lg ${message.role === 'user' ? 'bg-blue-200' : 'bg-green-200'}`}>
                  {message.content}
                </p>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSubmit} className="m-2">
            <input
              type="text"
              name="content"
              value={input}
              onChange={handleInputChange}
              className="w-full px-3 py-2 text-sm text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
              placeholder="Escribe tu mensaje aquí..."
            />
          </form>
        </div>
      )}
    </div>
  );
}
