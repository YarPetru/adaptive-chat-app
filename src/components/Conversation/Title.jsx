import { useSelector } from 'react-redux/es/exports';

const Title = () => {
  const currentChatId = useSelector(state => state.chat.activeChat);
  // const chats = useSelector(state => state.chat.chats);
  // подумать как в стейт сразу полную инфу о чате записывать
  // const [currentChat] = chats.filter(chat => chat.id === currentChatId);

  console.log(currentChatId);

  // return <div>{currentChat.name}</div>;
};

export default Title;
