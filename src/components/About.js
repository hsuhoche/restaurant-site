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
          黃記粿撰，韻味悠長，香飄四方。
舌尖滋味，源遠流長，歲月凝結為一碗。
蒸氣如雲，滑如月，舉箸如登仙境。
一品黃粿，香氣繚繞，乃古今珍饌，百味俱全。

黃記粿饌，古法精製，今朝品味。
喜君來嚐，滿載古風新味，
共品此間至臻美味。
        </p>
      )}
    </div>
  );
}

export default About;
