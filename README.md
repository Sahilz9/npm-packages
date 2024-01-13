Before using this, you should include the condition below wherever necessary and also import it into your component.

import useOnline from "./path/useOnline";

const isOnline = useOnline();

if (!isOnline) {
  return (
    <>
      <h1 className="no-internet">Check your Internet Connection</h1>
    </>
  );
}