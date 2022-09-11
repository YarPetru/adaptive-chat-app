import { useEffect } from 'react';
import { ReactComponent as CloseIcon } from 'img/close-20.svg';

import s from './Modal.module.scss';

const Modal = ({ onClose, children }) => {
  // modal
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    e.code === 'Escape' && onClose();
  };

  const handleOverlayClick = e => {
    e.currentTarget === e.target && onClose();
  };

  //   // form

  //   const cash = useSelector(state => state.cash);
  //   console.log(cash);
  //   const dispatch = useDispatch();

  //   const handleSubmit = (values, actions) => {
  //     dispatch(reduxActions.editCash(values.amount, values.currency));
  //     actions.resetForm();
  //     onClose();
  //   };

  return (
    <div className={s.overlay} onClick={handleOverlayClick}>
      <div className={s.modal}>
        {children}
        <button type="button" className={s.closeModalButton} onClick={onClose}>
          <CloseIcon className={s.closeIcon} width="16" height="16" />
        </button>
      </div>
    </div>
  );
};

// Modal.propTypes = {
//   onClose: PropTypes.func.isRequired,
// };

export default Modal;
