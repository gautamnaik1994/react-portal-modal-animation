import React from 'react';

export default (props) => (
  <div className={`modal d-block ${props.aClass}`} role="dialog">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Modal title</h5>
          <button type="button" className="close" onClick={props.onClose}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">

        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick= {props.onClose}>Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
)

