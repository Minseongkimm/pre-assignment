import Card from '../components/card';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  gap: 1rem;
`;

const Main = () => {
  return (
    <Wrapper>
      {/* 검색창 */}
      <Card />
      <Card />
      <Card />
    </Wrapper>
  );
};

export default Main;
