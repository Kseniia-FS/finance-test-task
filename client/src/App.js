import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { SOCKET_URL } from "./common/constants/constants";
import { io } from "socket.io-client";

import {
  changeTickerSuccess,
  changeTickerError,
} from "./redux/ticker/tickersActions";
import { MainPage } from "./views/MainPage";

const socket = io(SOCKET_URL);
socket.on("connect", () => {
  console.log("You are connected");
});

socket.emit("start");

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("ticker", (response) => dispatch(changeTickerSuccess(response)));
    socket.io.on("error", (error) => {
      dispatch(changeTickerError(error.message));
    });
  }, [dispatch]);

  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
