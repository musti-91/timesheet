import React, { FC } from "react";
// import styles from "./Day.module.scss";

interface Props {
  date: {
    title: string;
    start: string;
    end: string;
    id: string;
    data: {
      tickets: string[];
      types: string[];
      times: string[];
      descriptions: string[];
    };
    [key: string]: any;
  };
  onModify: () => void;
  onNavigate: () => void;
}

/**
 * @author
 * @function @Day
 **/
// const data = {
//   ticket: ["SAYS-1818", "SAYS-6616"],
//   type: ["Review", "Help"],
//   time: [0.3, 0.4], // hours
//   description: ["Created within", "created within another work"]
// };

const Day: FC<Props> = ({ date, onModify, onNavigate }) => {
  return (
    <div className="day-view">
      <h1>23 Jan 2020</h1>
      <div className="day-time">
        <h5>From: {date.start} AM</h5>
        <h5>Till: {date.end} PM</h5>
        <hr />
        <h5>Extra: 3 hour</h5>
      </div>
      <div className="day-description">
        <table>
          <thead>
            <tr>
              {Object.keys(date.data).map((key, i) => (
                <th key={i}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {date.data.tickets.map((ticket, id) => (
              <tr key={id}>
                <td>{ticket}</td>
                <td>{date.data.types[id]}</td>
                <td>{date.data.times[id]} hour(s)</td>
                <td>{date.data.descriptions[id]}</td>
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
