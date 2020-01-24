import React, { FC } from "react";
import { withRouter } from "react-router-dom";
import MonthView from "../components/Month";
import { iStore, withContext } from "./Context";

interface Props {
  store: iStore;
  history: any;
}

/**
 * @author
 * @function @Month
 **/

const Month: FC<Props> = ({ store, history }) => {
  const onClickDay = (id: string) => {
    const { dispatch } = store;

    dispatch({
      type: "ADD_MODE",
      payload: id
    });
    return history.push(`/new/${id.toLowerCase()}`);
  };
  return <MonthView onClickDay={onClickDay} />;
};

export default withRouter(withContext(Month));
