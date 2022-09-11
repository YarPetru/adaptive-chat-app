import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import chatSelectors from 'redux/selectors';
import * as actions from 'redux/actions';
import chekPic from 'img/green-check.png';
import { ReactComponent as CloseIcon } from 'img/delete-20.svg';
import Modal from 'components/Modal';
import { DeleteContactModalContent } from 'components/Modal/DeleteContactModalContent';
import { AddContactModalForm } from 'components/Modal/AddContactModalForm';
import s from './ChatList.module.scss';

const ChatList = () => {
  const filterValue = useSelector(chatSelectors.getFilterValue);
  const messages = useSelector(chatSelectors.getMessages);
  const chats = useSelector(chatSelectors.getChats);
  const chatsArr = Object.keys(chats.byId).map(id => chats.byId[id]);
  const currentChatId = useSelector(chatSelectors.getActiveChatId);
  const currentChat = useSelector(
    state => state.listing.chats.byId[currentChatId]
  );

  const dispatch = useDispatch();

  const messagesObj = messages.byId;
  const messagesArr = Object.keys(messagesObj).map(id => messagesObj[id]);

  const filteredChats = chatsArr.filter(item =>
    item.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  // фільтр по повідомленням - пройтись по повідомленням,
  // найти співпадіння та записати id повідомлень, де є співпадіння,
  // повернути елементи chatsArr, де зустрічаються ці id

  // 1------------сортуємо масив messagesArr по даті
  const sortedMessagesArr = messagesArr.sort(function (a, b) {
    if (a.date > b.date) {
      return 1;
    }
    if (a.date < b.date) {
      return -1;
    }
    return 0;
  });

  // 2------------шукаємо id останнього повідомлення з масива messages
  const lastAddedMessageId = sortedMessagesArr[sortedMessagesArr.length - 1].id;

  // 2------------якщо lastAddedMessageId містіться в елемент filteredChats у filteredChats.messages, цей елемент піднімаємо в нагору
  const sortedChats = filteredChats.sort(function (a, b) {
    if (
      a.messages.includes(lastAddedMessageId) <
      b.messages.includes(lastAddedMessageId)
    ) {
      return 1;
    }
    if (
      a.messages.includes(lastAddedMessageId) >
      b.messages.includes(lastAddedMessageId)
    ) {
      return -1;
    }

    return 0;
  });

  const onChatClick = currentChatId => {
    dispatch(actions.selectChat(currentChatId));
  };

  const onDeleteBtnClick = currentChatId => {
    dispatch(actions.deleteChat(currentChatId));
    setIsDeleteModalOpen(false);
  };

  //  modal
  // const  = () => {};
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const openRemoveChatModal = () => {
    setIsDeleteModalOpen(true);
  };

  const closeModal = () => {
    setIsDeleteModalOpen(false);
    setIsAddModalOpen(false);
  };

  const openAddNewChatModal = () => {
    setIsAddModalOpen(true);
  };

  const addContact = (values, formActions) => {
    const contactName = values.contactName;
    dispatch(actions.createChat(contactName));
    formActions.resetForm();
    setIsAddModalOpen(false);
  };

  return (
    <>
      {chats && (
        <div className={s.chatsWrapper}>
          <div className={s.headerWrapper}>
            <h2 className={s.title}>Chats</h2>
            <button
              type="button"
              className={s.newChatBtn}
              onClick={openAddNewChatModal}
            >
              Create new chat
            </button>
          </div>
          <ul className={s.chatList}>
            {sortedChats.length === 0 && (
              <p className={s.noChatsMsg}>There not related chats</p>
            )}
            {sortedChats.length !== 0 &&
              sortedChats.map(chat => (
                <li
                  data-id={chat.id}
                  key={chat.id}
                  className={s.chatItem}
                  onClick={() => onChatClick(chat.id)}
                >
                  <div className={s.mainContentWrapper}>
                    <div className={s.contactStatusWrapper}>
                      <div className={s.avatarWrapper}>
                        <img
                          className={s.userAvatar}
                          src={chat.photo}
                          alt={`${chat.name} avatar`}
                          width="60"
                        />
                        {chat.isOnline && (
                          <img
                            src={chekPic}
                            alt="online"
                            className={s.checkPic}
                            width="16"
                          />
                        )}
                      </div>
                    </div>
                    <div className={s.contactMsgWrapper}>
                      <h3 className={s.chatName}>{chat.name}</h3>
                      {chat.messages.length !== 0 && (
                        <p className={s.lastMsgText}>
                          {
                            messagesObj[chat.messages[chat.messages.length - 1]]
                              .text
                          }
                        </p>
                      )}
                    </div>
                  </div>
                  {chat.messages.length !== 0 && (
                    <p className={s.lastMsgDate}>
                      {messagesObj[
                        chat.messages[chat.messages.length - 1]
                      ].date.toLocaleString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </p>
                  )}
                  {currentChatId && (
                    <button
                      type="button"
                      className={s.deleteChatButton}
                      onClick={openRemoveChatModal}
                    >
                      <CloseIcon
                        className={s.closeIcon}
                        width="16"
                        height="16"
                      />
                    </button>
                  )}
                </li>
              ))}
          </ul>
        </div>
      )}
      {isDeleteModalOpen && (
        <Modal onClose={closeModal}>
          <DeleteContactModalContent
            onDelete={() => onDeleteBtnClick(currentChat.id)}
            onCancel={closeModal}
            contactName={currentChat.name}
          />
        </Modal>
      )}
      {isAddModalOpen && (
        <Modal onClose={closeModal}>
          <AddContactModalForm handleSubmit={addContact} onClose={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default ChatList;
