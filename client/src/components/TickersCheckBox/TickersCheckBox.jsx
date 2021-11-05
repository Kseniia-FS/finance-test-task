import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCheckedTicker } from "../../redux/ticker/tickersActions";
import { getTickers } from "../../redux/ticker/tickerSelectors";
import { Label } from "./TickerCheckBox.styled";

export const TickersCheckBox = () => {
  const tickers = useSelector(getTickers);
  const [checkedTickers, setCheckedTickers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCheckedTicker(checkedTickers));
  }, [dispatch, checkedTickers]);

  const handleOnClick = (e) => {
    const newTicker = e.target.name;

    if (e.target.checked) {
      setCheckedTickers((prev) => [...prev, newTicker]);
    }
    if (!e.target.checked) {
      const newTickers = checkedTickers.filter((el) => el !== newTicker);
      setCheckedTickers([...newTickers]);
    }
  };

  return (
    <>
      <h1>Can be interesting for you...</h1>
      <form>
        {tickers.map(({ ticker }, i) => (
          <Label key={i} data-testid="custom-label">
            {ticker}
            <input
              type="checkbox"
              onChange={handleOnClick}
              name={ticker}
              data-testid="custom-input"
            />
          </Label>
        ))}
      </form>
    </>
  );
};
