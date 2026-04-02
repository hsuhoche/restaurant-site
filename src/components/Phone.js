import { useState } from "react";

function Phone() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h2 onClick={() => setOpen(!open)}>
        預定電話
      </h2>

      {open && (
        <p>
          (08)770-8197
        </p>
      )}
    </div>
  );
}

export default Phone;
