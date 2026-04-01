import { useState } from "react";
import menuData from "../data/menuData";

function Menu() {
  const [active, setActive] = useState(null);

  return (
    <div>
      <h2>菜單</h2>

      {menuData.map(section => (
        <div key={section.id}>
          <h3 onClick={() => setActive(section.id)}>
            {section.title}
          </h3>

          {active === section.id && (
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