import ChatList from 'components/ChatList';
import Filter from 'components/Filter';

import s from './ChatPanel.module.scss';

const ChatPanel = () => {
  return (
    <section className={s.chatControlsSection}>
      <div className={s.chatControlsHeader}>
        UserLogo
        <Filter />
      </div>
      <ChatList />
    </section>
  );
};

export default ChatPanel;
