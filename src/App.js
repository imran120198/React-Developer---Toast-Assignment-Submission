import "./App.css";
import Toast from "./components/Toast/Toast";

function App({
  message,
  hideInfoIcon,
  withoutAction,
  withoutDivider,
  crossIcon,
  notificationIcon,
}) {
  return (
    <div className="App">
      <Toast
        message={message}
        hideInfoIcon={hideInfoIcon}
        withoutAction={withoutAction}
        withoutDivider={withoutDivider}
        crossIcon={crossIcon}
        notificationIcon={notificationIcon}
      />
    </div>
  );
}

export default App;
