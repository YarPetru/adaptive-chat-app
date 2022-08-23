import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { IconContext } from 'react-icons';
import { MdOutlineSend } from 'react-icons/md';

import { sendMessage } from 'redux/actions';

import s from './Conversation.module.scss';

const MessageForm = () => {
  const [msg, setMsg] = useState('');

  const activeChatId = useSelector(state => state.chat.activeChatId);
  // const chats = useSelector(state => state.chat.chats);
  // const newMessage = useSelector(state => state.chat.listing);

  const dispatch = useDispatch();

  const handleInputChange = e => {
    setMsg(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(msg);
    dispatch(sendMessage(activeChatId, msg));
    setMsg('');
  };

  return (
    <IconContext.Provider
      value={{
        style: { verticalAlign: 'middle', color: 'var(--dark-blue)' },
        className: 'sendIcon',
      }}
    >
      <form className={s.sendMsgForm} onSubmit={handleSubmit}>
        <input
          className={s.sendMsgInput}
          id="message-input"
          value={msg}
          type="text"
          name="filter"
          title="Find chat"
          placeholder="Type your message"
          autoComplete="off"
          required
          onChange={handleInputChange}
        />
        <button className={s.sendMsgBtn} type="submit">
          <MdOutlineSend />
        </button>
      </form>
    </IconContext.Provider>
  );
};

export default MessageForm;
