import React, { FC } from "react";
import Button from "../Button/Button";
import styles from "./Day.module.scss";

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
  };
  onModify: () => void;
  onNavigate: () => void;
}

/**
 * @author
 * @function @Day
 **/

const Day: FC<Props> = ({ date, onModify, onNavigate }) => {
  if (!date || !date.data) {
    return (
      <div className={styles.element}>
        You have not choose date!
        <Button title="Go back" onClick={onNavigate} />
      </div>
    );
  }
  return (
    <div className={styles.element}>
      <h1>{date.id.toUpperCase()}</h1>
      <div className="day-time">
        <h5>From: {date.start} AM</h5>
        <h5>Till: {date.end} PM</h5>
        <hr />
        <h5>Extra: 3 hour</h5>
      </div>
      <div className={styles.description}>
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
          <tfoot>
            <tr>
              <td>Extra Hours:</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className={styles.actions}>
        <Button onClick={onModify} title="Modify" />
        <Button onClick={onNavigate} title="Done" />
      </div>
    </div>
  );
};

export default Day;
