import { useState } from "react";

function Address() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h2 onClick={() => setOpen(!open)}>
        地址
      </h2>

      {open && (
        <p>
          屏東縣內埔鄉昭勝路193號
        </p>
      )}
    </div>
  );
}

export default Address;
