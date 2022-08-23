import { useSelector } from 'react-redux/es/exports';
import { nanoid } from 'nanoid';
import s from './Conversation.module.scss';

const Dialog = () => {
  const activeChatId = useSelector(state => state.chat.activeChatId);
  const chats = useSelector(state => state.chat.chats);
  // const newMessageData = useSelector(state => state.chat.listing);
  const [activeChat] = chats.filter(chat => chat.id === activeChatId);

  const messages = activeChat?.history;

  // for (const chat of chats) {
  //   if (chat.id === newMessageData.id) {
  //     let chatHistory = [...chat.history, newMessageData.data];
  //     console.log(chatHistory);
  //   }
  // }

  return (
    <div className={s.dialogWrapper}>
      <ul className={s.messageList}>
        {messages &&
          messages.map(message => (
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
                    src={activeChat.photo}
                    alt={`${activeChat.name} avatar`}
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
    </div>
  );
};

export default Dialog;
