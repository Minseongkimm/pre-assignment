import Card from '../components/card';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useIntersectionObserver from '../common/hooks';
import { content } from '../common/constant';

const Wrapper = styled.div`
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  @media (max-width: 700px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  gap: 2rem;
`;

const Main = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [contents, setContents] = useState<any>([]);
  const [itemIndex, setItemIndex] = useState(0);

  const fetchContents = async () => {
    const response = await axios
      .get('https://api.json-generator.com/templates/ePNAVU1sgGtQ/data', {
        headers: {
          Authorization: 'Bearer 22swko029o3wewjovgvs9wcqmk8p3ttrepueemyj',
        },
      })
      .then((res) => {
        return res;
      });

    setContents(response.data.slice(0, itemIndex + 20));
  };

  console.log('con', contents);

  useEffect(() => {
    fetchContents();
  }, []);

  const getMoreItem = async () => {
    setIsLoaded(true);
    setItemIndex((i) => i + 20);
    await fetchContents();
    setIsLoaded(false);
  };

  const onIntersect: IntersectionObserverCallback = async (
    [entry],
    observer
  ) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };
  const { setTarget } = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
    onIntersect,
  });

  return (
    <Wrapper>
      {/* 검색창 */}
      {contents &&
        contents.map((content: content) => (
          <Card key={content.club.id} content={content} />
        ))}
      <div ref={setTarget}>{isLoaded && <div>Loading..</div>}</div>
    </Wrapper>
  );
};

export default Main;
