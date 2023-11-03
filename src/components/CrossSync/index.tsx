import React from "react";

const CrossSync = () => {
  console.log("Account CrossSync Page");
  const parentWindowLocation = "https://canvas-test-app-five.vercel.app/";
  console.log("Parent window location:", parentWindowLocation);

  const access_token =
    localStorage.getItem("cross_sync_access_token") || "empty";
  const dataToSend = { access_token: access_token };
  // Send data to the parent using postMessage
  console.log("dataToSend: ", dataToSend);
  window.parent.postMessage(dataToSend, parentWindowLocation); // Replace with the actual parent page URL

  return (
    <div>
      <h1>CrossSync</h1>
    </div>
  );
};

export default CrossSync;
