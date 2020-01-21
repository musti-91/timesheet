import React, { FC, useState } from "react";
import { AddState } from "../containers/Add";
import "./AddDate.scss";
import TableFields from "./TableFields";
interface Props {
  onAddDate: (fields: AddState) => void;
  onCancel: () => void;
  day?: string;
  asyncState: {
    title: string;
    description: string;
    start: string;
    end: string;
  };
}

/**
 * @author
 * @function @AddDate
 **/
const data = {
  ticket: ["SAYS-1818", "SAYS-6616"],
  type: ["Review", "Help"],
  time: [0.3, 0.4], // hours
  description: ["Created within", "created within another work"]
};

const AddDate: FC<Props> = ({ asyncState, onAddDate, onCancel, day }) => {
  const title = useInputField((asyncState && asyncState.title) || "");
  const startTime = useInputField((asyncState && asyncState.start) || "");
  const leavingTime = useInputField((asyncState && asyncState.end) || "");

  const [rows, setRows] = useState<string[]>(["row-1"]);

  const [tickets, setTickets] = useState<string[]>([]);
  const [types, setTypes] = useState<string[]>([]);
  const [timesSpent, setTimesSpent] = useState<string[]>([]);
  const [description, setDescription] = useState<string[]>([]);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fields = {
      title: title.value,
      start: startTime.value,
      end: leavingTime.value,
      data: { tickets, descriptions: description, times: timesSpent, types }
    };
    // TODO validation
    onAddDate(fields);
  };

  const onAddRow = () => {
    let clickCount = 1;
    clickCount += 1;

    setRows([...rows, `row-${clickCount}`]);
  };
  return (
    <div className={"add-date"}>
      <h2>{asyncState && asyncState.title ? "Modify Date" : day}</h2>
      <form className="form-group" onSubmit={submitForm}>
        <div className="time-fields">
          <div className="field">
            <label htmlFor="start-time">Start Time</label>
            <input
              type="time"
              name="start-time"
              id="start-time"
              className="input-time"
              {...startTime}
            />
          </div>
          <div className="field">
            <label htmlFor="leaving-time">Leaving Time</label>
            <input
              type="time"
              id="leaving-time"
              name="leaving-time"
              className="input-time"
              {...leavingTime}
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Created new world"
            className="title-field"
            {...title}
          />
        </div>
        <TableFields
          onTimeChange={time => setTimesSpent([...timesSpent, time])}
          onDescriptionChange={desc => setDescription([...description, desc])}
          onTicketChange={ticket => setTickets([...tickets, ticket])}
          onTypeSelect={type => setTypes([...types, type])}
          setTableRows={onAddRow}
          rows={rows}
        />
        <div className="actions">
          <button className="button" type="submit">
            Add
          </button>
          <button className="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

const useInputField = (initialValue: string) => {
  const [field, setField] = useState(initialValue);

  const handleChange = (e: any) => setField(e.target.value);

  return {
    onChange: handleChange,
    value: field
  };
};
export default AddDate;
