import React, { FC } from "react";
import { withRouter } from "react-router";
import AddDate from "../components/AddDate";
import { iStore, withContext } from "./Context";

interface Location {
  pathname: string;
  search: string;
  hash: string;
  state: any;
  key: string;
}
interface Props {
  history: any;
  store: iStore;
  location: Location;
}

export interface AddState {
  title: string;
  description: string;
  start: string;
  end: string;
}
/**

 * @author
 * @function @Add
 **/

const Add: FC<Props> = ({ location, history, store: { state, dispatch } }) => {
  const onAddDate = (fields: AddState) => {
    const { pathname, key } = location;
    const id = pathname.substr(pathname.lastIndexOf("/") + 1);

    if (state.isAddMode) {
      dispatch({
        type: "ADD_SUCCESS",
        payload: fields
      });
      return history.push(`/view/${id}-${key}`);
    }
    if (state.isEditMode) {
      dispatch({
        type: "EDIT_MODE_SUCCESS",
        payload: fields
      });
      return history.push(`/view/${id}-${key}`);
    }
  };
  return (
    <AddDate
      onAddDate={onAddDate}
      onCancel={() => history.push("/")}
      asyncState={state.editDate}
    />
  );
};

export default withRouter(withContext(Add));
