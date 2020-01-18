import React, { FC } from "react";
import Calendar from "react-calendar";
import "./Month.scss";

interface Props {
  onClickDay: (id: string) => void;
}

/**
 * @author
 * @function @Month
 **/

const Month: FC<Props> = ({ onClickDay }) => {
  //Thu Jan 16 2020 00:00:00 GMT+0100 (Central European Standard Time)

  const format = (date: string) => {
    const splitted = date.split(" ");
    return `${splitted[0]}-${splitted[1]}-${splitted[2]}`;
  };

  return (
    <div className="month">
      <Calendar
        onChange={() => {}}
        value={new Date()}
        onClickDay={date => onClickDay(format(date.toString()))}
      />
    </div>
  );
};

export default Month;
