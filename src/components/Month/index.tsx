import React, { FC } from "react";
import Calendar from "react-calendar";
import styles from "./Month.module.scss";

interface Props {
  onClickDay: (id: string) => void;
}

/**
 * @author
 * @function @Month
 **/

const MonthView: FC<Props> = ({ onClickDay }) => {
  const format = (date: string) => {
    const splitted = date.split(" ");
    return `${splitted[0]}-${splitted[1]}-${splitted[2]}`;
  };

  return (
    <div className={styles.month}>
      <Calendar
        className={styles["react-calendar"]}
        onChange={() => {}}
        value={new Date()}
        onClickDay={date => onClickDay(format(date.toString()))}
      />
    </div>
  );
};

export default MonthView;
