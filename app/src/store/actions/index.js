import axios from "axios";


//async action creator
export const FETCH_PROS_SUCCESS = "FETCH_PROS_SUCCESS";
export const FETCH_PROS_START = "FETCH_PROS_START";
export const FETCH_PROS_FAILURE = "FETCH_PROS_FAILURE";
export const fetchData = () => {
  return (dispatch) => {
    //tell the reducer we are going ot enter a "loading state"
    dispatch({ type: FETCH_PROS_START });

    //start the fetch
    axios
      .get("https://api.opendota.com/api/proPlayers")
      .then((res) => {
          console.log(res.data);
        //send the reducer the data
        dispatch({ type: FETCH_PROS_SUCCESS, payload: res.data});
      })
      .catch((err) => {
        console.log(err.message);
        dispatch({ type: FETCH_PROS_FAILURE, payload: err.message });
      });
  };
};
