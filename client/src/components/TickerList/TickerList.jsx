import { useSelector } from "react-redux";
import { Title, Item, List, Percent, Price, Sum } from "./TickerList.styled";
import {
  getTickers,
  changeCheckedTicker,
} from "../../redux/ticker/tickerSelectors";

export const TickerList = () => {
  const tickers = useSelector(getTickers);
  const filteredTickers = useSelector(changeCheckedTicker);

  return (
    <List>
      <tbody>
        {tickers.map(({ ticker, price, change_percent, yield: sum }, i) =>
          filteredTickers.length <= 0 ? (
            <Item key={i} data-testid="custom-element">
              <Title>{ticker}</Title>
              <Price>{price}$</Price>
              <Percent>{change_percent}%</Percent>
              <Sum>{sum}</Sum>
            </Item>
          ) : (
            filteredTickers.includes(ticker) && (
              <Item key={i}>
                <Title>{ticker}</Title>
                <Price>{price}$</Price>
                <Percent>{change_percent}%</Percent>
                <Sum>{sum}</Sum>
              </Item>
            )
          )
        )}
      </tbody>
    </List>
  );
};
