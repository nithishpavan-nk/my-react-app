import React, { useState, useMemo } from "react";
import { MenuList, CATEGORIES } from "../helpers/MenuList";
import MenuItem from "../components/MenuItems";
import '../styles/Menu.css';

function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredMenu = useMemo(() => {
    if (activeCategory === "All") return MenuList;
    return MenuList.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <p className="menuSubtitle">Hand-stretched daily, fired in a real wood oven.</p>

      <div className="categoryFilters" role="group" aria-label="Filter menu by category">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            className={`categoryPill ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredMenu.length > 0 ? (
        <div className="menuList">
          {filteredMenu.map((menuItem) => (
            <MenuItem
              key={menuItem.name}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
              description={menuItem.description}
            />
          ))}
        </div>
      ) : (
        <p className="menuEmpty">No pizzas in this category yet &mdash; check back soon.</p>
      )}
    </div>
  );
}

export default Menu;
