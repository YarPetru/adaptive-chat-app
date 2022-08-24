import ChatList from 'components/ChatList';
import Filter from 'components/Filter';
import userAvatar from 'img/user-logo.jpg';
import chekPic from 'img/green-check.png';

import s from './ChatPanel.module.scss';

const ChatPanel = () => {
  return (
    <section className={s.chatControlsSection}>
      <div className={s.chatControlsHeader}>
        <div className={s.avatarWrapper}>
          <img
            className={s.userAvatar}
            src={userAvatar}
            alt={`users avatar`}
            width="60"
          />
          <img src={chekPic} alt="online" className={s.checkPic} width="16" />
        </div>
        <Filter />
      </div>
      <ChatList />
    </section>
  );
};

export default ChatPanel;
