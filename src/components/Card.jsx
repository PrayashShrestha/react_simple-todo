import React from "react";
import "./Card.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const Card = ({ list, edit, del, checkStatus }) => {
  return (
    <div className="card">
      {list
        ? list.map((item) => {
            return (
              <div className="todo" key={item.id} value={item.id}>
                <input
                  className="check_btn"
                  type="checkBox"
                  onChange={checkStatus}
                  id={item.id}
                />
                {item.isCompleted ? (
                  <span style={{ color: "yellow", opacity: 0.5 }}>
                    {item.title}
                  </span>
                ) : (
                  <span>{item.title}</span>
                )}
                <div className="btns_div">
                  <EditIcon className="btns edit" onClick={edit} id={item.id} />
                  <DeleteIcon
                    className="btns delete"
                    onClick={del}
                    id={item.id}
                  />
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Card;
