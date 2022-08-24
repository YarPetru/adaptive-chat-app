const getFilterValue = state => state.listing.filter;

const getChats = state => state.listing.chats;

const getMessages = state => state.listing.messages;

const getActiveChatId = state => state.listing.activeChatId;

const chatSelectors = {
  getFilterValue,
  getChats,
  getMessages,
  getActiveChatId,
};

export default chatSelectors;
