import Header from '../header';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 1.25rem;
  @media (min-width: 1200px) {
    max-width: 1240px;
  }
`;

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <Wrapper>
      <Header />
      {props.children}
    </Wrapper>
  );
};

export default Layout;
