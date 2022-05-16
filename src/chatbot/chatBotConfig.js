import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import BotAvatar from './BotAvatar';

const config = {
  lang: 'no',
  botName: 'KSN Bot',
  customStyles: {
    botMessageBox: {
      backgroundColor: '#a1c3f0',
    },
    chatButton: {
      backgroundColor: '#ccdbfd',
    },
  },
  initialMessages: [
    createChatBotMessage(`Hi,😁 I'm here to provide you help with KSN!`),
  ],
  customComponents: {
    header: () => (
      <div
        style={{
          backgroundColor: '#567572ff',
          padding: '5px',
          borderTopLeftRadius: '5px',
          borderTopRightRadius: '5px',
          display: 'flex',
          fontSize: '0.85rem',
          paddingTop: '12.5px',
          paddingBottom: '12.5px',
          paddingRight: '12.5px',
          paddingLeft: '12.5px',
          fontWeight: '700',
          alignItems: 'center',
        }}
      >
        Conversation with KSN Bot
      </div>
    ),
    customComponents: {
      botAvatar: (props) => <BotAvatar {...props} />,
    },
  },
  state: {},
};

export default config;
