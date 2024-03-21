import React from "react";
import "./Toast.css";
import {
  Trash,
  X,
  Info,
  Warning,
  WarningCircle,
  CheckCircle,
} from "@phosphor-icons/react";

const Toast = ({
  message,
  hideInfoIcon,
  withoutAction,
  withoutDivider,
  crossIcon,
  notificationIcon,
}) => {
  return (
    <div className="Container">
      <div className="MessageBox">
        {/* Header */}
        <div className="Header">
          <p>Global style</p>
        </div>

        {/* Name */}
        <div className="Name">
          <p>Toast</p>
        </div>

        {/* Description */}
        <div className="Description">
          <p>
            Message that provides simple feedback about an operation in a small
            popup.
          </p>
        </div>
      </div>

      <div className="Master">
        <p>Master Component</p>
      </div>

      {/* Toast Section */}
      <div className="toast">
        {!hideInfoIcon && renderIcon(notificationIcon)}
        <span className="message">{message}</span>
        {!withoutDivider && <div className="divider"></div>}
        {!withoutAction && (
          <button
            className="custom-button"
            onClick={() => console.log("Button clicked")}
          >
            Button
          </button>
        )}
        {crossIcon && (
          <button
            className="close-button"
            onClick={() => console.log("Cross Button clicked")}
          >
            <X size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

const renderIcon = (notificationIcon) => {
  switch (notificationIcon) {
    case "information":
      return <Info size={24} color="#0522ff" weight="fill" />;
    case "error":
      return <Warning size={24} color="#ff0505" weight="fill" />;
    case "warning":
      return <WarningCircle size={24} color="#eeff05" weight="fill" />;
    case "success":
      return <CheckCircle size={32} color="#20af0d" weight="fill" />;
    default:
      return null;
  }
};

export default Toast;
