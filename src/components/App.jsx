import { useSelector } from 'react-redux';
import chatSelectors from 'redux/selectors';
import ChatPanel from './ChatPanel/ChatPanel';
import Conversation from './Conversation';
import Layout from './Layout';

export const App = () => {
  const activeChatId = useSelector(chatSelectors.getActiveChatId);
  return (
    <div>
      <Layout>
        <ChatPanel />
        {activeChatId && <Conversation />}
      </Layout>
    </div>
  );
};
