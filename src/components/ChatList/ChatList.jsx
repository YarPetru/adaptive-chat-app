import { useSelector, useDispatch } from 'react-redux/es/exports';

import * as actions from 'redux/actions';
import s from './ChatList.module.scss';

const ChatList = () => {
  const chats = useSelector(state => state.chat.chats);
  const filterValue = useSelector(state => state.chat.filter);

  const dispatch = useDispatch();

  const filteredChats = chats.filter(item =>
    item.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const onChatClick = currentChat => {
    // console.log(currentChat);
    dispatch(actions.selectChat(currentChat));
  };

  // const onChatClick = chatId => {
  //   console.log(chatId);
  //   dispatch(actions.selectChat(chatId));
  // };

  return (
    <>
      {chats && (
        <div className={s.chatsWrapper}>
          <h2 className={s.title}>Chats</h2>

          <ul className={s.chatList}>
            {filteredChats.length === 0 && (
              <p className={s.noChatsMsg}>There not related chats</p>
            )}
            {filteredChats.map(chat => (
              <li
                data-id={chat.id}
                key={chat.id}
                className={s.chatItem}
                onClick={() => onChatClick(chat)}
              >
                <div className={s.mainContentWrapper}>
                  <div className={s.contactStatusWrapper}>
                    <img
                      src={chat.photo}
                      alt={`${chat.name} avatar`}
                      width="60"
                    />
                    <p className={s.status}>
                      {chat.isOnline ? 'online' : 'offline'}
                    </p>
                  </div>
                  <div className={s.contactMsgWrapper}>
                    <h3 className={s.chatName}>{chat.name}</h3>
                    <p className={s.lastMsgText}>
                      {chat.history[chat.history.length - 1].text}
                    </p>
                  </div>
                </div>
                {chat.history[chat.history.length - 1].date && (
                  <p className={s.lastMsgDate}>
                    {chat.history[chat.history.length - 1].date.toLocaleString(
                      'en-US'
                    )}
                  </p>
                )}
                <p className={s.lastMsgDate}>10 Jun 2021</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ChatList;
