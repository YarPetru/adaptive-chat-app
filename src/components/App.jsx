import { useSelector } from 'react-redux';
import chatSelectors from 'redux/selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ChatPanel from './ChatPanel/ChatPanel';
import Conversation from './Conversation';
import Layout from './Layout';
import useMatchMedia from 'hooks/useMatchMedia';

export const App = () => {
  const { isMobile, isTablet, isDesktop } = useMatchMedia();

  // console.log(useMatchMedia());

  console.log(isMobile, isTablet, isDesktop);
  const activeChatId = useSelector(chatSelectors.getActiveChatId);
  return (
    <>
      <Layout>
        {!activeChatId && <ChatPanel />}
        {activeChatId && !isMobile && <ChatPanel />}
        {activeChatId && !isMobile && <Conversation />}
        {activeChatId && isMobile && <Conversation />}
      </Layout>
      <ToastContainer theme="light" position="top-center" autoClose={4000} />
    </>
  );
};
