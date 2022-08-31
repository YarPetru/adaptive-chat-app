import { useSelector, useDispatch } from 'react-redux/es/exports';
import chatSelectors from 'redux/selectors';
import * as actions from 'redux/actions';
import chekPic from 'img/green-check.png';
// import { ReactComponent as CloseIcon } from 'img/error-20.svg';
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

  // const onDeleteBtnClick = chatId => {
  //   dispatch(actions.deleteChat(chatId));
  // };

  const openAddNewChatModal = () => {
    alert(
      'Уявімо, що після натискання на кнопку тут відкривається модалка з формою, де необхідно ввести дані для нового діалогу, і по сабміту викликається action chats/create_chat'
    );
  };

  // const openRemoveChatModal = () => {};

  return (
    <>
      {chats && (
        <div className={s.chatsWrapper}>
          <div className={s.headerWrapper}>
            <h2 className={s.title}>Chats</h2>
            <button
              type="button"
              className={s.newChatBtn}
              onClick={openAddNewChatModal}
            >
              Create new chat
            </button>
          </div>
          {/* <div
            className={s.chatListWrapper}
            style={{ height: hasScroll ? '120px' : 'auto', minHeight: '120px' }}
            ref={chatsWrap}
          > */}
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
                    </div>
                    <div className={s.contactMsgWrapper}>
                      <h3 className={s.chatName}>{chat.name}</h3>
                      {chat.messages.length !== 0 && (
                        <p className={s.lastMsgText}>
                          {
                            messagesObj[chat.messages[chat.messages.length - 1]]
                              .text
                          }
                        </p>
                      )}
                    </div>
                  </div>
                  {chat.messages.length !== 0 && (
                    <p className={s.lastMsgDate}>
                      {messagesObj[
                        chat.messages[chat.messages.length - 1]
                      ].date.toLocaleString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </p>
                  )}
                  {/* <button
                    type="button"
                    className={s.deleteChatButton}
                    onClick={openRemoveChatModal}
                  >
                    <CloseIcon className={s.closeIcon} width="16" height="16" />
                  </button> */}
                </li>
              ))}
          </ul>
          {/* </div> */}
        </div>
      )}
    </>
  );
};

export default ChatList;
