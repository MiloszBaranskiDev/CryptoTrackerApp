interface Props {
  price?: number;
  currencySymbol: string;
}

const Price: React.FC<Props> = ({ price, currencySymbol }) => {
  return (
    <p>
      {price?.toFixed(2)}
      {currencySymbol}
    </p>
  );
};

export default Price;
