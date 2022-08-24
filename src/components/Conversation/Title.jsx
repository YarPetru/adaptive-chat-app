import { useSelector } from 'react-redux/es/exports';

import chekPic from 'img/green-check.png';
import s from './Conversation.module.scss';

const Title = () => {
  const currentChat = useSelector(
    state => state.listing.chats.byId[state.listing.activeChatId]
  );

  return (
    <div className={s.titleWrapper}>
      {currentChat && (
        <>
          <div className={s.avatarWrapper}>
            <img
              className={s.userAvatar}
              src={currentChat.photo}
              alt={`${currentChat.name} avatar`}
              width="60"
            />
            {currentChat.isOnline ? (
              <img
                src={chekPic}
                alt="online"
                className={s.checkPic}
                width="16"
              />
            ) : (
              <p className={s.status}>{`offline`}</p>
            )}
          </div>
          <h3 className={s.chatTitle}>{currentChat.name}</h3>
        </>
      )}
      {!currentChat && <p>Choose chat</p>}
    </div>
  );
};

export default Title;
