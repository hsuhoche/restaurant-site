import { useState } from "react";
import menuData from "../data/menuData";

function Menu() {
  const [active, setActive] = useState([]);

  const toggle = (id) => {
    if (active.includes(id)) {
      setActive(active.filter(item => item !== id));
    } else {
      setActive([...active, id]);
    }
  };

  return (
    <div>
      <h2>菜單</h2>

      {menuData.map(section => (
        <div key={section.id}>
          <h3 onClick={() => toggle(section.id)}>
            {section.title}
          </h3>

          {active.includes(section.id) && (
            <ul>
              {section.items.map((item, index) => (
                <li key={index}>
                  {item.name} - ${item.price}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default Menu;
