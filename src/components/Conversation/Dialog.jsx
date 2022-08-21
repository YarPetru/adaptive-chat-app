import { useSelector } from 'react-redux/es/exports';
// import { nanoid } from 'nanoid';
import s from './Conversation.module.scss';

const Dialog = () => {
  const messages = useSelector(state => state.chat.activeChat.history);
  console.log(messages);

  return (
    <div className={s.dialogWrapper}>
      <ul className={s.messageList}>
        {messages &&
          messages.map(message => (
            <li
              key={message.date}
              className={
                message.type === 'upcoming'
                  ? s.upcomingMessageItem
                  : s.incomingMessageItem
              }
            >
              <p className={s.upcomingMsg}>{message.text}</p>

              {/* варіант з розподілом рівнем глибше */}
              {/* <div className={s.messageWrapper}>
                {message.type === 'upcoming' && (
                  <p className={s.upcomingMsg}>{message.text}</p>
                )}
                {message.type === 'incoming' && (
                  <p className={s.incomingMsg}>{message.text}</p>
                )}
              </div> */}
              {/* <div className={s.messageWrapper}>{message.text}</div> */}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Dialog;
