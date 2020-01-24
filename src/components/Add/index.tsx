import React, { FC, useState } from "react";
import { AddState } from "../../containers/Add";
import Button from "../Button/Button";
import Input from "../Fields/Input";
import TableFields from "../Fields/Table";
import styles from "./AddDate.module.scss";

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
// const data = {
//   ticket: ["SAYS-1818", "SAYS-6616"],
//   type: ["Review", "Help"],
//   time: [0.3, 0.4], // hours
//   description: ["Created within", "created within another work"]
// };

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
    <div className={styles.element}>
      <h2>{asyncState && asyncState.title ? "Modify Date" : day}</h2>
      <form onSubmit={submitForm}>
        <div>
          <Input
            {...startTime}
            name="start-time"
            type="time"
            label="Start time"
          />
          <Input
            {...leavingTime}
            name="leaving-time"
            type="time"
            label="Leave time"
          />
        </div>
        <Input {...title} name="title" label="Title" />
        <TableFields
          onTimeChange={time => setTimesSpent([...timesSpent, time])}
          onDescriptionChange={desc => setDescription([...description, desc])}
          onTicketChange={ticket => setTickets([...tickets, ticket])}
          onTypeSelect={type => setTypes([...types, type])}
          setTableRows={onAddRow}
          rows={rows}
        />
        <div className={styles.actions}>
          <Button title="Add" type="submit" />
          <Button onClick={() => onCancel()} title="Cancel" />
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
