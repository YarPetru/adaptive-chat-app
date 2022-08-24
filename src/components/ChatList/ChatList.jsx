import { useSelector, useDispatch } from 'react-redux/es/exports';
import chatSelectors from 'redux/selectors';

import * as actions from 'redux/actions';
import chekPic from 'img/green-check.png';
import s from './ChatList.module.scss';

const ChatList = () => {
  const filterValue = useSelector(chatSelectors.getFilterValue);
  const messages = useSelector(chatSelectors.getMessages);
  const chats = useSelector(chatSelectors.getChats);
  const chatsArr = Object.keys(chats.byId).map(id => chats.byId[id]);

  const dispatch = useDispatch();

  const messagesObj = messages.byId;
  const messagesArr = Object.keys(messagesObj).map(id => messagesObj[id]);

  const filteredChats = chatsArr.filter(item =>
    item.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  // 1------------сортуємо масив messagesArr по даті
  const sortedMessagesArr = messagesArr.sort(function (a, b) {
    if (a.date > b.date) {
      return 1;
    }
    if (a.date < b.date) {
      return -1;
    }
    return 0;
  });

  // 2------------шукаємо id останнього повідомлення з масива messages
  const lastAddedMessageId = sortedMessagesArr[sortedMessagesArr.length - 1].id;

  // 2------------якщо lastAddedMessageId містіться в елемент filteredChats у filteredChats.messages, цей елемент піднімаємо в нагору
  const sortedChats = filteredChats.sort(function (a, b) {
    if (
      a.messages.includes(lastAddedMessageId) <
      b.messages.includes(lastAddedMessageId)
    ) {
      return 1;
    }
    if (
      a.messages.includes(lastAddedMessageId) >
      b.messages.includes(lastAddedMessageId)
    ) {
      return -1;
    }

    return 0;
  });

  const onChatClick = currentChatId => {
    dispatch(actions.selectChat(currentChatId));
  };

  const openModal = () => {
    alert(
      'Уявімо, що після натискання кнопку тут відкривається модалка з формою, де необхідно ввести дані для нового діалогу, і по сабміту викликається action chats/create_chat'
    );
  };

  return (
    <>
      {chats && (
        <div className={s.chatsWrapper}>
          <div className={s.headerWrapper}>
            <h2 className={s.title}>Chats</h2>
            <button type="button" className={s.newChatBtn} onClick={openModal}>
              Create new chat
            </button>
          </div>
          <ul className={s.chatList}>
            {sortedChats.length === 0 && (
              <p className={s.noChatsMsg}>There not related chats</p>
            )}
            {sortedChats.length !== 0 &&
              sortedChats.map(chat => (
                <li
                  data-id={chat.id}
                  key={chat.id}
                  className={s.chatItem}
                  onClick={() => onChatClick(chat.id)}
                >
                  <div className={s.mainContentWrapper}>
                    <div className={s.contactStatusWrapper}>
                      <div className={s.avatarWrapper}>
                        <img
                          className={s.userAvatar}
                          src={chat.photo}
                          alt={`${chat.name} avatar`}
                          width="60"
                        />
                        {chat.isOnline && (
                          <img
                            src={chekPic}
                            alt="online"
                            className={s.checkPic}
                            width="16"
                          />
                        )}
                      </div>
                      {/* <p className={s.status}>
                        {chat.isOnline ? 'online' : 'offline'}
                      </p> */}
                    </div>
                    <div className={s.contactMsgWrapper}>
                      <h3 className={s.chatName}>{chat.name}</h3>
                      <p className={s.lastMsgText}>
                        {
                          messagesObj[chat.messages[chat.messages.length - 1]]
                            .text
                        }
                      </p>
                    </div>
                  </div>
                  <p className={s.lastMsgDate}>
                    {messagesObj[
                      chat.messages[chat.messages.length - 1]
                    ].date.toLocaleString('en-US')}
                  </p>
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ChatList;
