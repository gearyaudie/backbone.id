import React from 'react';
import '../styles/speech-bubble.module.scss';

const SpeechBubble = ({ messages }: any) => {
  return (
    <div className="speech">
      <div className="container">
        {messages.map((message: any, index: number) => (
          <div key={index} className={message.fromMe ? 'imessage from-me' : 'imessage from-them'}>
            {message.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpeechBubble;