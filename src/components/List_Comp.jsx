import { useEffect } from "react";
import "../style/ListComponent.css";
import Datacards from "./Ticket_Cards";

const ListComponent = ({ title, cardArr, curOrder, curGroup, logo }) => {

  console.log(logo);

  if (cardArr) {
    if (curOrder === "title") {
      cardArr.sort(function (a, b) {
        var keyA = a.title,
          keyB = b.title;

        if (keyA > keyB) return 1;
        else if (keyA < keyB) return -1;
        else return 0;
      });
    } else if (curGroup !== "priority") {
      cardArr.sort(function (a, b) {
        var keyA = a.priority,
          keyB = b.priority;

        if (keyA > keyB) return 1;
        else if (keyA < keyB) return -1;
        else return 0;
      });
      cardArr = cardArr.slice(0).reverse();
    }
  }

  return (
    <>
      <div className="list-component">
        <div className="title-div">
          <div>
            {curGroup === "user" ? (
              <img
                width="18"
                height="18"
                src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                alt="userlogo"
              />
            ) : (
              <img
                width="18"
                height="18"
                src={logo}
                alt="sorting-options--v1"
                className="settings-icon"
              />
            )}

            <span className="list-title">{title}</span>
            <span className="title-number">{cardArr ? cardArr.length : 0}</span>
          </div>

          <div>
            {/* Add icon */}
            <img
              width="18"
              height="18"
              src="https://img.icons8.com/material/24/1A1A1A/plus-math--v2.png"
              alt="plus-math--v2"
            />
            {/* ... icon */}
            <img
              width="18"
              height="18"
              src="https://img.icons8.com/material/24/1A1A1A/more--v2.png"
              alt="more--v2"
              className="more-icon"
            />
          </div>
        </div>

        {cardArr && cardArr.map((obj) => <Datacards data={obj} key={obj.id} curGroup={curGroup}/>)}
      </div>
    </>
  );
};

export default ListComponent;
