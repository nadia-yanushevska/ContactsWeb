import Modal from 'react-modal';
import ContactForm from '../ContactForm/ContactForm';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: 'fit-content',
        height: 'fit-content',
        padding: 0,
        position: 'relative',
        borderRadius: '8px',
        boxShadow: '37px 37px 74px #afafaf, -37px -37px 74px #ffffff',
        border: '1px solid darkslategrey',
    },
};

Modal.setAppElement('body');

function CustomModal({ closeModal, modalIsOpen, contact }) {
    return (
        <div>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Custom Modal">
                <ContactForm contact={contact} closeModal={closeModal} />
            </Modal>
        </div>
    );
}

export default CustomModal;
