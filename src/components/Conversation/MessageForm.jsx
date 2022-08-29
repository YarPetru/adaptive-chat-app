import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { IconContext } from 'react-icons';
import { MdOutlineSend } from 'react-icons/md';

import { sendMessage } from 'redux/actions';
import chatSelectors from 'redux/selectors';
import { useLazyGetAnswerQuery } from 'redux/answerApi/answerSlice';

import s from './Conversation.module.scss';

const MessageForm = () => {
  const [msg, setMsg] = useState('');

  const activeChatId = useSelector(chatSelectors.getActiveChatId);

  const currentChat = useSelector(
    state => state.listing.chats.byId[activeChatId]
  );

  const dispatch = useDispatch();

  const [getAnswer, { data: answer, error: getAnswerError, isSuccess }] =
    useLazyGetAnswerQuery();

  const rednerAnswer = () => {
    isSuccess &&
      dispatch(
        sendMessage(currentChat.id, currentChat.name, answer.value, 'incoming')
      );

    getAnswerError &&
      alert(
        'Oops.Something went wrong. We can`t deliver the answer. Try again please'
      );
  };

  const handleInputChange = e => {
    setMsg(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(sendMessage(currentChat.id, currentChat.name, msg, 'upcoming'));
    setMsg('');
    getAnswer();
    setTimeout(rednerAnswer, 6000);
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
