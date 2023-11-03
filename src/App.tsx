import React from "react";
import CrossSync from "./components/CrossSync";

function App() {
  const pathname = window.location.pathname;

  let content;
  if (pathname === "/cross-sync_v1") {
    content = <CrossSync />;
  } else {
    content = <Home />;
  }

  return <div className="App">{content}</div>;
}

function Home() {
   console.log("Account CrossSync Page");
   const appWindowLocation = "https://canvas-test-app-five.vercel.app/";
   const appDomain = "canvas-test-app-five.vercel.app";
   console.log("App window location:", appWindowLocation);

   const access_token =
     localStorage.getItem("cross_sync_access_token") || "empty";
   const dataToSend = { access_token: access_token };
   const dataToSend2 = { access_token: "this-is-test-access-token-2" };
   // Send data to the parent using postMessage
   console.log("dataToSend: ", dataToSend);
   window.parent.postMessage(dataToSend, appWindowLocation); // Replace with the actual parent page URL

   // Listen for messages from app's origin
   window.addEventListener("message", function (event) {
     // Check if the message is from the expected origin
     // Handle the received message
     console.log(
       "Message received in the dynamically appended iframe: " + event.data
     );
     localStorage.setItem("canvas_item", event.data + "");
   });
  return (
    <div>
      <h1>Account Test App Home Page</h1>
    </div>
  );
}

export default App;
