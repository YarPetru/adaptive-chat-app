import { useSelector } from 'react-redux/es/exports';

// import chatSelectors from 'redux/selectors';

import s from './Conversation.module.scss';

const Title = () => {
  // const currentChat = useSelector(chatSelectors.getCurrentChat());
  const currentChat = useSelector(
    state => state.listing.chats.byId[state.listing.activeChatId]
  );

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
