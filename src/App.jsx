import "./App.css";
import { useState } from "react";
const menuData = [
  {
    label: "Menu 1",
    submenu: [
      {
        label: "Sub Menu 1",
        submenu: [
          {
            label: "Sub Sub Menu 1",
            submenu: [
              { label: "Sub Sub Sub Menu 1" },
              { label: "Sub Sub Sub Menu 2" },
              {
                label: "Sub Sub Sub Menu 3",
                submenu: [
                  { label: "Sub Sub Sub Sub Menu 1" },
                  { label: "Sub Sub Sub Sub Menu 2" },
                  { label: "Sub Sub Sub Sub Menu 3" },
                ],
              },
            ],
          },
          { label: "Sub Sub menu 2" },
        ],
      },
      { label: "Sub Menu 2" },
      { label: "Sub Menu 3" },
      {
        label: "Sub Menu 4",
        submenu: [
          {
            label: "Sub Sub Menu 1",
            submenu: [
              { label: "Sub Sub Sub Menu 1" },
              { label: "Sub Sub Sub Menu 2" },
              {
                label: "Sub Sub Sub Menu 3",
                submenu: [
                  { label: "Sub Sub Sub Sub Menu 1" },
                  { label: "Sub Sub Sub Sub Menu 2" },
                  { label: "Sub Sub Sub Sub Menu 3" },
                ],
              },
            ],
          },
          { label: "Sub Sub Menu 2" },
        ],
      },
    ],
  },
  {
    label: "Menu 2",
    submenu: [{ label: "Sub Menu 1" }, { label: "Sub Menu 2" }],
  },
  {
    label: "Menu 3",
    submenu: [
      {
        label: "Sub Menu 1",
        submenu: [
          {
            label: "Sub Sub Menu 1",
            submenu: [
              { label: "Sub Sub Sub Menu 1" },
              { label: "Sub Sub Sub Menu 2" },
              {
                label: "Sub Sub Sub Menu 3",
                submenu: [
                  { label: "Sub Sub Sub Sub Menu 1" },
                  { label: "Sub Sub Sub Sub Menu 2" },
                  { label: "Sub Sub Sub Sub Menu 3" },
                ],
              },
            ],
          },
          { label: "Sub Sub menu 2" },
        ],
      },
      { label: "Sub Menu 2" },
      { label: "Sub Menu 3" },
      {
        label: "Sub Menu 4",
        submenu: [
          {
            label: "Sub Sub Menu 1",
            submenu: [
              { label: "Sub Sub Sub Menu 1" },
              { label: "Sub Sub Sub Menu 2" },
              {
                label: "Sub Sub Sub Menu 3",
                submenu: [
                  { label: "Sub Sub Sub Sub Menu 1" },
                  { label: "Sub Sub Sub Sub Menu 2" },
                  { label: "Sub Sub Sub Sub Menu 3" },
                ],
              },
            ],
          },
          { label: "Sub Sub menu 2" },
        ],
      },
    ],
  },
  {
    label: "Menu 4",
    submenu: [
      { label: "Sub Menu 1" },
      {
        label: "Sub Menu 2",
        submenu: [
          { label: "Sub Sub Sub Menu 1" },
          { label: "Sub Sub Sub Menu 2" },
          {
            label: "Sub Sub Sub Menu 3",
            submenu: [
              { label: "Sub Sub Sub Sub Menu 1" },
              { label: "Sub Sub Sub Sub Menu 2" },
              { label: "Sub Sub Sub Sub Menu 3" },
            ],
          },
        ],
      },
    ],
  },
];

const Item = ({ listItem }) => {
  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    e.stopPropagation();
    setOpen(!open);
  };
  if ("submenu" in listItem) {
    const { submenu } = listItem;
    return (
      <li key={listItem.label}>
        <span className="list-item-with-list" onClick={(e) => handleClick(e)}>
          {listItem.label}
        </span>
        <ul className="submenu-ul" style={{ display: open ? "block" : "none" }}>
          {submenu.map((menuItem) => {
            return Item({ listItem: menuItem });
          })}
        </ul>
      </li>
    );
  } else {
    return (
      <li
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="list-leaf-item"
        key={listItem.label}
      >
        {listItem.label}
      </li>
    );
  }
};

function RecusiveList({ menulist }) {
  return (
    <div>
      <ul>
        {menulist.map((menuItem) => {
          return Item({ listItem: menuItem });
        })}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1>Hi Welcome to This Demo</h1>
      <h3>Below is a recursive drop down that I built</h3>
      <p className="introduce-text">
        Where the gray items are not expandable and the others are expandable
      </p>
      <RecusiveList menulist={menuData} />
    </div>
  );
}
export default App;
