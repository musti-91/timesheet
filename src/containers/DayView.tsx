import React, { FC } from "react";
import { withRouter } from "react-router";
import Day from "../components/Day";
import { iStore, withContext } from "./Context";

interface Props {
  store: iStore;
  history: any;
  location: {
    pathname: string;
    key: string;
    [key: string]: any;
  };
}

/**
 * @author
 * @function @DayView
 **/

const DayView: FC<Props> = ({
  history,
  location,
  store: { state, dispatch }
}) => {
  const path = location.pathname.substr(location.pathname.lastIndexOf("/") + 1);

  const onModify = () => {
    dispatch({
      type: "EDIT_MODE",
      payload: state.newDate
    });

    history.push(`/modify/${path}`);
  };

  const onNavigate = () => history.push("/");
  const data = () => {
    return {
      ...state.newDate,
      fields: {
        title: [],
        description: [],
        time: [],
        type: []
      }
    };
  };
  return <Day date={data()} onModify={onModify} onNavigate={onNavigate} />;
};

export default withRouter(withContext(DayView));
