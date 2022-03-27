import { useParams } from "react-router-dom";
import Wrapper from "elements/layout/Wrapper";

const SingleCrypto: React.FC = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <Wrapper>
      <p>SingleCrypto</p>
    </Wrapper>
  );
};

export default SingleCrypto;
