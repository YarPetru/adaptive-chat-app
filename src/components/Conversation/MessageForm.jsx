import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { IconContext } from 'react-icons';
import { MdOutlineSend } from 'react-icons/md';
import { toast } from 'react-toastify';

import { getAnswer } from 'services/api';

import { sendMessage } from 'redux/actions';
import chatSelectors from 'redux/selectors';

import s from './Conversation.module.scss';

const MessageForm = () => {
  const [msg, setMsg] = useState('');

  const activeChatId = useSelector(chatSelectors.getActiveChatId);

  const currentChat = useSelector(
    state => state.listing.chats.byId[activeChatId]
  );

  const dispatch = useDispatch();

  const fetchAnswer = async () => {
    try {
      const answer = await getAnswer();
      dispatch(
        sendMessage(currentChat.id, currentChat.name, answer, 'incoming')
      );
      toast(`You recieved new message from ${currentChat.name}`);
    } catch (error) {
      toast.error(`Message delivery error. Please try again`, {
        toastId: 'error1',
        info: error.message,
      });
    }
  };

  const handleInputChange = e => {
    setMsg(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(sendMessage(currentChat.id, currentChat.name, msg, 'upcoming'));
    setMsg('');
    setTimeout(fetchAnswer, 6000);
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
