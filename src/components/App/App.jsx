import React, { useEffect } from 'react';

// firebase
import { fb } from "service";

export const App = () => {

  useEffect(() => {
    fb.firestorage.collection("chatUsers")
      .where("userName", "==", "xolo")
      .get()
      .then(res => {
        const user = res.docs[0]?.data();
        console.log("this is our user data");
      console.log(user);
      console.log("this was our user data");
    });
  }, []);

  return (
    <div>
      Let's Build AIO Messenger
    </div>
  )
}


