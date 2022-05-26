import styled from '@emotion/styled';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  .mainLogo {
    text-decoration: none;
  }
  .menuIcon {
    margin-top: 1rem;
    width: 20px;
    height: 20px;
    @media (min-width: 600px) {
      display: none;
    }
    &:hover {
      cursor: pointer;
    }
  }
`;

const MenuList = styled.ul`
  display: flex;
  list-style: none;
  @media (max-width: 600px) {
    display: none;
  }
`;

const Menu = styled.li`
  padding-right: 10px;
`;

const Logo = styled.p`
  font-size: large;
  font-weight: bold;
  color: #3b8ffd;
`;

const HiddenModal = styled.ul`
  padding-top: 20px;
  padding-bottom: 10px;
  position: relative;
  list-style: none;
  box-shadow: 1px 2px 3px 0px #3b8ffd;
  border-radius: 10px;
  @media (min-width: 600px) {
    display: none;
  }
  .closeIcon {
    position: absolute;
    right: 20px;
    top: 10px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const HiddenMenu = styled.li`
  padding: 10px 0px;
  &:hover {
    cursor: pointer;
  }
`;

const Header = () => {
  const [isModal, setIsModal] = useState(false);

  const modalHandler = () => {
    setIsModal(!isModal);
  };

  return (
    <>
      <Wrapper className="headerConatiner">
        <Link to="/" className="mainLogo">
          <Logo>TREVARI</Logo>
        </Link>
        <nav className="headerList">
          <MenuList>
            <Menu>모든 클럽 보기</Menu>
            <Menu>클럽 만들기</Menu>
            <Menu>다른클럽 놀러가기</Menu>
            <Menu>파트너 지원하기</Menu>
          </MenuList>
          <AiOutlineMenu className="menuIcon" onClick={modalHandler} />
        </nav>
      </Wrapper>
      {isModal && (
        <HiddenModal>
          <div>
            <AiOutlineClose className="closeIcon" onClick={modalHandler} />
          </div>
          <HiddenMenu>모든 클럽 보기</HiddenMenu>
          <HiddenMenu>클럽 만들기</HiddenMenu>
          <HiddenMenu>다른클럽 놀러가기</HiddenMenu>
          <HiddenMenu>파트너 지원하기</HiddenMenu>
        </HiddenModal>
      )}
    </>
  );
};

export default Header;
