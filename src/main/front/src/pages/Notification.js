import React from "react";
function TestAra() {
  const useNotification = (title, options) => {
    if (!("Notification" in window)) {
      console.log("알림 지원 안하는 것");
      return;
    }
    const triggerNotification = () => {
      console.log("asd");
      if (Notification.permission !== "granted") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            console.log("granted");
            new Notification(title, options);
          } else {
            console.log("거부");
            return;
          }
        });
      }
    };
    return triggerNotification;
  };

  const triggerNotification = useNotification("sdasd");
  return (
    <div>
      <h1 onClick={triggerNotification}>asdasd</h1>
    </div>
  );
}

export default TestAra;
