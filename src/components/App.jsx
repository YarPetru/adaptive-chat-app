import ChatPanel from './ChatPanel/ChatPanel';
import Conversation from './Conversation';
import Layout from './Layout';

export const App = () => {
  return (
    <div>
      <Layout>
        <ChatPanel />
        <Conversation />
      </Layout>
    </div>
  );
};
