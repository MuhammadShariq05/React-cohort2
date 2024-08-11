import axios from "axios";
import { atom, selector } from "recoil";

export const notifications = atom({
  key: "networkAtom",
  // default value cannot be async, selecter can be async
  default: selector({
    key: "networkAtomSelecter",
    get: async () => {
      // Overall, the snippet creates a promise that resolves after 3 seconds, and await is used to pause the execution of the async function until the promise resolves. This effectively creates a 3-second delay.
      await new Promise((r) => setTimeout(r, 2000));
      // fetch after 3 sec
      const res = await axios.get(
        "https://sum-server.100xdevs.com/notifications"
      );
      return res.data;
    },
  }),
});

// it works as usememo
export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const allNotifications = get(notifications);
    return (
      allNotifications.network +
      allNotifications.jobs +
      allNotifications.notifications +
      allNotifications.messaging
    );
  },
});
