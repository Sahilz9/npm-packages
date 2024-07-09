import { useState, useEffect } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return isOnline;
};

export default useOnline;

// Before using this, you should include the condition below wherever necessary and also import it into your component.

/*
import useOnline from "useOnline_location.....";

const isOnline = useOnline();

if (!isOnline) {
  return (
    <>
      <h1 className="no-internet">Check your Internet Connection</h1>
    </>
  );
}
*/
