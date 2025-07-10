import "./Toast.css";
export const Toast = ({ toastRef, toastMsg }) => {
  return (
    <>
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          id="liveToast"
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          ref={toastRef}
        >
          <div className="toast-header">
            <img
              src="src\\assets\\icon-noti.png"
              className="rounded me-2"
              alt="Ícono de notificación"
            />
            <strong className="me-auto">Notificación entrante</strong>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">{toastMsg}</div>
        </div>
      </div>
    </>
  );
};
export default Toast;
