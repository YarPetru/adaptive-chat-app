import { useSelector } from 'react-redux/es/exports';

import s from './Conversation.module.scss';

const Title = () => {
  const currentChat = useSelector(state => state.chat.activeChat);
  // const chats = useSelector(state => state.chat.chats);
  // подумать как в стейт сразу полную инфу о чате записывать
  // const [currentChat] = chats.filter(chat => chat.id === currentChatId);

  console.log(currentChat);

  return (
    <div className={s.titleWrapper}>
      <img
        className={s.chatAvatar}
        src={currentChat.photo}
        alt={`${currentChat.name} avatar`}
        width="60"
      />
      <h3 className={s.chatTitle}>{currentChat.name}</h3>
      <p className={s.status}>{currentChat.isOnline ? 'online' : 'offline'}</p>
    </div>
  );
};

export default Title;
