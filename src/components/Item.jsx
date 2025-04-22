import React from "react";

function Item(props) {
  return (
    <div className="item">
      <p className="entity">{props.entity}</p>
      <div>
        <p className="course-job">{props.courseJob[0]}</p>
        <p className="dates">{props.dates[0]}</p>
      </div>
      {props.dates[1]&&<div>
        {props.courseJob[1]&&<p className="course-job">{props.courseJob[1]}</p>}
        <p className="dates">{props.dates[1]}</p>
      </div>}
      {props.dates[2]&&<div>
        {props.courseJob[2]&&<p className="course-job">{props.courseJob[2]}</p>}
        <p className="dates">{props.dates[2]}</p>
      </div>}
      
    </div>
  );
}

export default Item;
