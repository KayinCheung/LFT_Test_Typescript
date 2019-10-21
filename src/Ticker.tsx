import React from 'react';

interface Props {
  price: number,
  threshold: number,
  ticker: string
}

class Ticker extends React.PureComponent<Props> {
  render() {
    let { price, threshold, ticker }: Props = this.props
    return (
      <div className={price < threshold ? `has-background-danger has-text-white` : 'has-background-success'}>
        {ticker} :<br /> {price}
      </div>
    );
  }
}

export default Ticker