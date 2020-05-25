import React from 'react';
import InfoBar from 'components/InfoBar/InfoBar';
import Messages from 'components/Messages/Messages';
import Input from 'components/Input/Input';
import 'components/Chat/chat.less';

const Chat = () => {
  return (
      <div className="container">
        <InfoBar />
        <Messages />
        <Input />
      </div>
  );
}
export default Chat;