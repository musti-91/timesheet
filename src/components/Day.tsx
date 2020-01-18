import React, { FC } from "react";

interface Props {
  date: {
    title: string;
    description: string;
    start: string;
    end: string;
    id: string;
  };
  onModify: () => void;
}

/**
 * @author
 * @function @Day
 **/

const Day: FC<Props> = ({ date, onModify }) => {
  return (
    <div>
      <h1>Title: {date.title}</h1>
      <div>
        <h3>Start: {date.start}</h3>
        <h3>End: {date.end}</h3>
      </div>
      <div>
        <h3>Description</h3>
        <p>{date.description}</p>
      </div>
      <div>
        <button onClick={onModify}>Modify</button>
      </div>
    </div>
  );
};

export default Day;
