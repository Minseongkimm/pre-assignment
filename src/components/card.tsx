import styled from '@emotion/styled';

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

const Card = () => {
  return (
    <Wrapper>
      <ThumnailImage
        alt="productImage"
        src="https://image.trevari.co.kr/file/69c8659a-973f-4fea-bc79-e8a4ab30cbe2.%E1%84%91%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%83%E1%85%A5%E1%84%8B%E1%85%B4%20%E1%84%89%E1%85%A1%E1%84%80%E1%85%A9%E1%84%87%E1%85%A1%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8-%E1%84%85%E1%85%B5%E1%84%8E%E1%85%B5%E1%84%86%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%83%E1%85%B3.png"
      />
      <TitleWrapper>
        <Title>시작 - 이야기</Title>
        <Contents>시작은 진짜 반인가요? 각자의 이야기를</Contents>
        <Place>장소 : 강남 할리스</Place>
      </TitleWrapper>
    </Wrapper>
  );
};

export default Card;
