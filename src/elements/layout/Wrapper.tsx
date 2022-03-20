import styled from "styled-components";

const div = ({
  className,
  children,
}: {
  className?: string;
  children: any;
}) => <div className={className}>{children}</div>;

const Wrapper = styled(div)`
  width: 90%;
  max-width: 1260px;
  margin: 0 auto;
`;

export default Wrapper;
