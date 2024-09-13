import React, { useEffect, useState } from 'react';
import { Chat, Channel, ChannelHeader, Thread, Window, MessageList, MessageInput } from "stream-chat-react";
import { StreamChat } from 'stream-chat';    
import 'stream-chat-react/dist/css/index.css';

const chatClient = new StreamChat('5e97hnqgej6y');
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiU2FyYSJ9.GAHKrNz9-2xCRJQEyBcn4JQKkOxazEQHy-FLSEaezNw';


  chatClient.setUser(
    {
      id: 'Sara',
      name: 'Fly Girl',
      image: 'https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100270.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726099200&semt=ais_hybrid'
    }, 
    userToken
  );

  const channel = chatClient.channel('messaging', 'godevs', {
    image: 'https://t3.ftcdn.net/jpg/05/77/07/02/360_F_577070248_gJ4n5rx0WQzZB6N7dUs2H7HCo6gZVMwB.jpg',
    name: 'Talk about Go',
    members: ['Sara'], 
  });

  const App = () => (
    <Chat client={chatClient} theme= {'messaging light'}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );

  export default App;