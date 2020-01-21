import React, { FC } from "react";

interface Props {
  onTicketChange: (ticket: string) => void;
  onTimeChange: (time: string) => void;
  onTypeSelect: (type: string) => void;
  onDescriptionChange: (desc: string) => void;
  setTableRows: () => void;
  rows: string[];
}

/**
 * @author
 * @function @TableFields
 **/
const TYPES = ["Review", "Own", "Help", "Study"];

const TableFields: FC<Props> = ({
  onDescriptionChange,
  onTicketChange,
  onTimeChange,
  onTypeSelect,
  setTableRows,
  rows
}) => {
  return (
    <div className="field-table">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Ticket</th>
            <th>Time spent(.min)</th>
            <th>Type</th>
            <th>Extra description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, id) => (
            <tr key={`${row}-${id}`}>
              <td onClick={() => setTableRows()}>+</td>
              <td>
                <input
                  type="text"
                  name="ticket-nr"
                  onChange={e => onTicketChange(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  onChange={e => onTimeChange(e.target.value)}
                  name="time-spent"
                />
              </td>
              <td>
                <select onChange={e => onTypeSelect(e.target.value)}>
                  {TYPES.map(type => (
                    <option value={type}>{type}</option>
                  ))}
                </select>
              </td>
              <td>
                <textarea onChange={e => onDescriptionChange(e.target.value)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableFields;
