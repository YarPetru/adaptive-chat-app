import { useSelector } from 'react-redux';
import chatSelectors from 'redux/selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ChatPanel from './ChatPanel/ChatPanel';
import Conversation from './Conversation';
import Layout from './Layout';

export const App = () => {
  const activeChatId = useSelector(chatSelectors.getActiveChatId);
  return (
    <>
      <Layout>
        <ChatPanel />
        {activeChatId && <Conversation />}
      </Layout>
      <ToastContainer theme="light" position="top-center" autoClose={4000} />
    </>
  );
};
