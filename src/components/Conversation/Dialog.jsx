import { useSelector } from 'react-redux/es/exports';
// import { useRef, useEffect } from 'react';
import { nanoid } from 'nanoid';

import chatSelectors from 'redux/selectors';
import s from './Conversation.module.scss';

const Dialog = () => {
  // const bottomRef = useRef(null);
  const messagesObj = useSelector(chatSelectors.getMessages).byId;

  const currentChatId = useSelector(chatSelectors.getActiveChatId);

  const currentChat = useSelector(
    state => state.listing.chats.byId[currentChatId]
  );

  const currentChatMessageIds = currentChat?.messages;

  const currentMessagesObj = Object.keys(messagesObj)
    .filter(key => currentChatMessageIds?.includes(key))
    .reduce((obj, key) => {
      obj[key] = messagesObj[key];
      return obj;
    }, {});

  const currentMessagesArr = Object.keys(currentMessagesObj).map(
    id => currentMessagesObj[id]
  );

  // useEffect(() => {
  //   bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  // }, [currentMessagesArr]);

  return (
    <div className={s.dialogWrapper}>
      <div className={s.messageListWrapper}>
        <ul className={s.messageList}>
          {currentMessagesArr &&
            currentMessagesArr.map(message => (
              <li
                key={nanoid()}
                className={
                  message.type === 'upcoming'
                    ? s.upcomingMessageItem
                    : s.incomingMessageItem
                }
              >
                <div className={s.messageWrapper}>
                  {message.type === 'incoming' && (
                    <img
                      className={s.userAvatar}
                      src={currentChat.photo}
                      alt={`${currentChat.name} avatar`}
                      width="50"
                    />
                  )}
                  <p
                    className={
                      message.type === 'upcoming'
                        ? s.upcomingMessageText
                        : s.incomingMessageText
                    }
                  >
                    {message.text}
                  </p>
                </div>
                {message.date && (
                  <p
                    className={
                      message.type === 'upcoming'
                        ? s.upcomingDate
                        : s.incomingDate
                    }
                  >
                    {message.date.toLocaleString('en-US', {
                      month: 'numeric',
                      day: 'numeric',
                      year: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit',
                    })}
                  </p>
                )}
              </li>
            ))}
        </ul>
        {/* <div ref={bottomRef} /> */}
      </div>
    </div>
  );
};

export default Dialog;
