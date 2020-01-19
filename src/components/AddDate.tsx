import React, { FC, useState } from "react";
import { AddState } from "../containers/Add";
import "./AddDate.scss";
interface Props {
  onAddDate: (fields: AddState) => void;
  onCancel: () => void;
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

const AddDate: FC<Props> = ({ asyncState, onAddDate, onCancel }) => {
  const title = useInputField((asyncState && asyncState.title) || "");
  const description = useInputField(
    (asyncState && asyncState.description) || ""
  );
  const startTime = useInputField((asyncState && asyncState.start) || "");
  const leavingTime = useInputField((asyncState && asyncState.end) || "");

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fields = {
      title: title.value,
      description: description.value,
      start: startTime.value,
      end: leavingTime.value
    };
    // TODO validation
    onAddDate(fields);
  };

  return (
    <div className={"add-date"}>
      <h2>{asyncState && asyncState.title ? "Modify Date" : "Add Date"}</h2>
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
        <div className="field">
          <label htmlFor="description">Description</label>
          <textarea
            className="description-field"
            id="description"
            rows={2}
            cols={5}
            placeholder={"* ticket:23"}
            {...description}
          />
        </div>
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
