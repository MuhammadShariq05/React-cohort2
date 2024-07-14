import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import { networkAtom } from "./atoms";

function App() {
  

  return (
    <>
      <RecoilRoot>
        <RecoilApp />
      </RecoilRoot>
    </>
  );
}

function RecoilApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  return (
    <div class="topnav">
      <button>Home</button>

      <button>
        My Network (
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs</button>
      <button>Messaging</button>
      <button>Notification</button>
      <button>Me</button>
    </div>
  );
}

export default App;
