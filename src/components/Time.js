import { useState } from "react";

function Time() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h2 onClick={() => setOpen(!open)}>
        營業時間
      </h2>

      {open && (
        <p>
          上午7時 ~ 下午2時\n 下午4時 ~ 下午7時
        </p>
      )}
    </div>
  );
}

export default About;
