import { useState } from "react";

function About() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h2 onClick={() => setOpen(!open)}>
        關於我們
      </h2>

      {open && (
        <p>
          我們致力於提供高品質餐點...
        </p>
      )}
    </div>
  );
}

export default About;