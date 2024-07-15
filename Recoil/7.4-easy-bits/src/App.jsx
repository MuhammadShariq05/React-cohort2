import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import {
  jobsAtom,
  networkAtom,
  notificationAtom,
  messagingAtom,
  totalMeCountSelecter,
} from "./atoms";
import { useMemo } from "react";

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
  const networkCount = useRecoilValue(networkAtom);
  const jobCount = useRecoilValue(jobsAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const messagingCount = useRecoilValue(messagingAtom);

  // Want to add the total into me
  // first way to do it
  // using memo

  /* const totalMeCount = useMemo(()=>{
    return networkCount + jobCount + notificationCount + messagingCount;
  }, [networkCount, jobCount, notificationCount, messagingCount]) */

  // somthing better than this, recoil gives us access to a
  // component called seleter which do the same job as useMemo
  // in a recoil way
  const totalMeCount = useRecoilValue(totalMeCountSelecter);

  return (
    <div class="topnav">
      <button>Home</button>

      <button>My Network ({networkCount >= 100 ? "99+" : networkCount})</button>
      <button>Jobs ( {jobCount} )</button>
      <button>Messaging ( {messagingCount} )</button>
      <button>Notification ( {notificationCount} )</button>
      <button>Me ( {totalMeCount} )</button>
    </div>
  );
}

export default App;
