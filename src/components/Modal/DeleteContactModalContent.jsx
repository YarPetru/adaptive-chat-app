import PropTypes from 'prop-types';
import s from './Modal.module.scss';

export const DeleteContactModalContent = ({
  onDelete,
  onCancel,
  contactName,
}) => {
  return (
    <div className={s.deleteModalWrapper}>
      <p className={s.modalText}>
        {`Are you shure? Confirm please deleting chat with ${contactName}`}
      </p>
      <div className={s.buttonsWrapper}>
        <button className={s.formBtn} type="button" onClick={onDelete}>
          Delete
        </button>
        <button
          className={`${s.formBtn} ${s.cancelBtn}`}
          type="button"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

DeleteContactModalContent.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  contactName: PropTypes.string.isRequired,
};

// export default deleteContactModalContent;
