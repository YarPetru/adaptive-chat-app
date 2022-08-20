import Title from './Title';
import Dialog from './Dialog';
import MessageForm from './MessageForm';

import s from './Conversation.module.scss';

const Conversation = () => {
  return (
    <section className={s.conversationSection}>
      <Title />
      <Dialog />
      <MessageForm />
    </section>
  );
};

export default Conversation;
