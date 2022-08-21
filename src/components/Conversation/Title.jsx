import { useSelector } from 'react-redux/es/exports';

import s from './Conversation.module.scss';

const Title = () => {
  const currentChat = useSelector(state => state.chat.activeChat);

  return (
    <div className={s.titleWrapper}>
      {currentChat && (
        <>
          <img
            className={s.chatAvatar}
            src={currentChat.photo}
            alt={`${currentChat.name} avatar`}
            width="60"
          />
          <h3 className={s.chatTitle}>{currentChat.name}</h3>
          <p className={s.status}>
            {currentChat.isOnline ? 'online' : 'offline'}
          </p>
        </>
      )}
      {!currentChat && <p>Choose chat</p>}
    </div>
  );
};

export default Title;
