'use client'

import { useEffect, useState } from 'react';
import io from 'socket.io-client';

export default function Chat() {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState('');
  const [receivedMessage, setReceivedMessage] = useState('');
  const [roomID, setRoomID] = useState('');
  const [roomMessages, setRoomMessages] = useState({});
  const [joinedRoom, setJoinedRoom] = useState(false);

  useEffect(() => {
    const socket = io('http://localhost:8000'); // Replace with your server URL
    setSocket(socket);

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on('receiveMessage', ({ sender, room, message }) => {
        // Update the roomMessages state with the received message
        setRoomMessages((prevMessages) => ({
          ...prevMessages,
          [room]: [...(prevMessages[room] || []), `${sender}: ${message}`],
        }));
      });
    }
  }, [socket]);

  const sendMessage = () => {
    if (socket && message.trim() !== '') {
      socket.emit('sendMessage', { sender: 'UserA', room: roomID, message });
      setMessage('');
    }
  };

  const joinRoom = () => {
    if (socket && roomID.trim() !== '') {
      socket.emit('joinRoom', roomID);
      setJoinedRoom(true);
    }
  };

  return (
    <div>
      <h1>Real-time Chat</h1>
      <div>
        {/* Display messages for the current room */}
        {roomMessages[roomID] &&
          roomMessages[roomID].map((message, index) => (
            <p key={index}>{message}</p>
          ))}
      </div>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div>
        <input
          type="text"
          value={roomID}
          onChange={(e) => setRoomID(e.target.value)}
          placeholder="Enter Room ID"
        />
        <button onClick={joinRoom}>Join Room</button>
      </div>
    </div>

  );
}
