import React from 'react';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Task = ({ task: { id, title, state }, onPinTask }) => {
  return (
    <div className="list-group-item">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" defaultChecked={state==='TASK_ARCHIVED'} id="flexCheckDefault" disabled={state==='TASK_ARCHIVED'} onClick={() => onPinTask(id,'TASK_ARCHIVED')}/>
          <label className="form-check-label" for="flexCheckDefault">
            {title}
            <span onClick={() => onPinTask(id,'TASK_ARCHIVED')} />
          </label>
            {state !== 'TASK_ARCHIVED' && 
              <span onClick={()=>onPinTask(id,'TASK_PINNED')}>
              <FontAwesomeIcon icon={faStar} className={state === 'TASK_PINNED' ? 'text-info' : 'text-muted'}/>
              </span>
            }
      </div>
    </div>
  );
}

export default Task