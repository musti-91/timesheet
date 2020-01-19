import React, { FC } from "react";
import "./day.scss";
interface Props {
  date: {
    title: string;
    description: string;
    start: string;
    end: string;
    id: string;
    [key: string]: any;
  };
  onModify: () => void;
  onNavigate: () => void;
}

/**
 * @author
 * @function @Day
 **/
const data = {
  ticket: ["SAYS-1818", "SAYS-6616"],
  type: ["Review", "Help"],
  time: [0.3, 0.4], // hours
  description: ["Created within", "created within another work"]
};
const Day: FC<Props> = ({ date, onModify, onNavigate }) => {
  return (
    <div className="day-view">
      <h1>23 Jan 2020</h1>
      <div className="day-time">
        <h5>From: 33:00 AM</h5>
        <h5>Till: 33:00 PM</h5>
        <hr />
        <h5>Extra: 3 hour</h5>
      </div>
      <div className="day-description">
        <table>
          <thead>
            <tr>
              {Object.keys(data).map((key, i) => (
                <th key={i}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.ticket.map((ticket, id) => (
              <tr key={id}>
                <td>{ticket}</td>
                <td>{data.type[id]}</td>
                <td>{data.time[id]} hour(s)</td>
                <td>{data.description[id]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="actions">
        <button onClick={onModify}>Modify</button>
        <button onClick={onNavigate}>Done</button>
      </div>
    </div>
  );
};

export default Day;
