import React from 'react';
import PropTypes from 'prop-types';

const MailchimpForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <>
      <div className="signup-form form-inline justify-content-center pt-3">
        <div className="form-group">
          <label className="sr-only" htmlFor="semail">
            Your email
          </label>
          <input
            id="semail"
            ref={node => {
              email = node;
            }}
            type="email"
            placeholder="Enter email"
            className="form-control mr-md-1 semail"
          />
        </div>
        <button type="button" onClick={submit} className="btn btn-primary">
          Submit
        </button>
      </div>
      <div className="d-flex justify-content-center pt-3">
        {(() => {
          switch (status) {
            case 'sending':
              return (
                <div className="alert alert-info" role="alert">
                  Sending...
                </div>
              );
            case 'error':
              return (
                <div
                  className="alert alert-danger"
                  role="alert"
                  dangerouslySetInnerHTML={{ __html: message }}
                />
              );
            case 'success':
              return (
                <div
                  className="alert alert-success"
                  role="alert"
                  dangerouslySetInnerHTML={{ __html: message }}
                />
              );
            default:
              return null;
          }
        })()}
      </div>
    </>
  );
};

MailchimpForm.propTypes = {
  status: PropTypes.string,
  message: PropTypes.string,
  onValidated: PropTypes.func.isRequired,
};

MailchimpForm.defaultProps = {
  status: '',
  message: '',
};

export default MailchimpForm;
