import styled from '@emotion/styled';
import { contentProps } from '../common/constant';

const Wrapper = styled.div`
  border: 1px solid #ebebe3;
  border-radius: 5px;
`;

const ThumnailImage = styled.img`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const TitleWrapper = styled.div`
  padding: 10px;
`;

const Title = styled.p`
  font-size: large;
  font-weight: bold;
`;

const Contents = styled.p`
  font-size: medium;
  color: #7e7e7b;
`;

const Place = styled.p`
  font-size: small;
`;

const Card = ({ content }: { content: contentProps }) => {
  // console.log('conetnt', content);
  return (
    <Wrapper>
      <ThumnailImage alt="productImage" src={content.club.coverUrl} />
      <TitleWrapper>
        <Title>{content.club.name}</Title>
        <Contents>{content.club.description}</Contents>
        <Place>장소 : {content.club.place}</Place>
      </TitleWrapper>
    </Wrapper>
  );
};

export default Card;
