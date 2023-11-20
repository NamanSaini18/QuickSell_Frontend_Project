import { useEffect, useState } from "react";
import "../style/Header.css";
import { groups, ordering } from "../utils/constants";
import useSetDetails from "../customHooks/useSetDetails";

const Header = ({ curGroup, curOrder, setCurGroup, setCurOrder }) => {
  const [modal, setModal] = useState(false);

  function toggleModal(e) {
    setModal(!modal);
  }

  function changeGrouping(e) {
    localStorage.setItem("grouping", e.target.value);
    setCurGroup(e.target.value);
  }

  function changeOrdering(e) {
    localStorage.setItem("ordering", e.target.value);
    setCurOrder(e.target.value);
  }

  return (
    <>
      <div className="header-body">
        <div className="select-display" onClick={toggleModal}>
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material/24/1A1A1A/sorting-options--v1.png"
            alt="sorting-options--v1"
            className="settings-icon"
          />

          <span className="display-text">Display</span>

          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material/24/1A1A1A/chevron-down--v1.png"
            alt="chevron-down--v1"
            className="down-arrow-icon"
          />
        </div>

        {modal && curGroup && curOrder && (
          <div className="toggle-modal">
            <div className="grouping">
              <span className="grouping-span">Grouping</span>
              <select name="grouping" id="grouping" onChange={changeGrouping}>
                {groups.map((obj) => {
                  return obj.value === curGroup ? (
                    <option selected value={obj.value} key={obj.key}>
                      {obj.key}
                    </option>
                  ) : (
                    <option value={obj.value} key={obj.key}>
                      {obj.key}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="ordering">
              <span className="ordering-span">Ordering</span>
              <select name="ordering" id="ordering" onChange={changeOrdering}>
                {ordering.map((obj) => {
                  return obj.value === curOrder ? (
                    <option value={obj.value} key={obj.key} selected>
                      {obj.key}
                    </option>
                  ) : (
                    <option value={obj.value} key={obj.key}>
                      {obj.key}
                    </option>
                  )
                })}
              </select>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
