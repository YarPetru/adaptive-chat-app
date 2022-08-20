import { IconContext } from 'react-icons';
import { MdOutlineSend } from 'react-icons/md';

import s from './Conversation.module.scss';

const MessageForm = () => {
  return (
    <IconContext.Provider
      value={{
        style: { verticalAlign: 'middle', color: 'var(--dark-blue)' },
        className: 'sendIcon',
      }}
    >
      <form
        className={s.sendMsgForm}
        // onSubmit={sendMessage}
      >
        <input
          className={s.sendMsgInput}
          id="message-input"
          // value={value}
          type="text"
          name="filter"
          title="Find chat"
          placeholder="Type your message"
          autoComplete="off"
          required
          // onChange={handleInputChange}
        />
        <button className={s.sendMsgBtn} type="submit">
          <MdOutlineSend />
        </button>
      </form>
    </IconContext.Provider>
  );
};

export default MessageForm;
