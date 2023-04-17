import React, { useState, useEffect } from 'react';

function Modal() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const modal = document.getElementById('myModal');
      if (modal && !modal.contains(event.target)) {
        handleHideModal();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button onClick={handleShowModal}>Open Modal</button>

      {showModal && (
        <div className="modal d-block" tabIndex="-1" role="dialog" id="myModal">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleHideModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Modal content
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleHideModal}>Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
