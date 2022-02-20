import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { flexAlignCenter } from '../../../styles/mixin';

const SearchBar = ({ searchBarState, closeSearchBar }) => {
  const [searchData, setSearchData] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const isTyped = searchData.length > 0;
  const deleteAll = () => {
    setSearchData('');
  };

  useEffect(() => {
    fetch('/data/test.json')
      .then(res => res.json())
      .then(res => setSearchResult(res.searched_product));
  });

  if (!searchBarState) return null;
  else {
    return (
      <>
        <Overlay onClick={closeSearchBar} />
        <SearchWrapper
          onKeyUp={e => {
            if (e.key === 'Escape') {
              return closeSearchBar();
            }
          }}
        >
          <SearchArea>
            <SearchBox>
              <Icon>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Icon>
              <Input
                type="text"
                placeholder="type the name of product you wanna find"
                value={searchData}
                onChange={e => setSearchData(e.target.value)}
                onKeyUp={e => {
                  if (e.key === 'Enter') {
                    return console.log('enter');
                  }
                }}
              />
              {isTyped && <DeleteBtn onClick={deleteAll}>X</DeleteBtn>}
            </SearchBox>
            <button onClick={closeSearchBar}>close</button>
          </SearchArea>
          {isTyped &&
            ((<SearchedData>test</SearchedData>),
            searchResult.length > 0 &&
              searchResult.map(content => (
                <ProductList key={content.id}>
                  <img alt="thumbnail img" src={content.image} />
                  <span>{content.name}</span>
                </ProductList>
              )))}
        </SearchWrapper>
      </>
    );
  }
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.palette.black};
  opacity: 0.6;
  z-index: 99;
`;

const SearchWrapper = styled.div`
  ${flexAlignCenter}
  justify-content: space-between;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 5vw;
  width: 100%;
  background-color: white;
  z-index: 200;
`;

const SearchArea = styled.div`
  ${flexAlignCenter}
  z-index: 300;

  button {
    margin-left: 1vw;
    margin-right: -2.5vw;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.palette.black};
    font-size: 1.4vw;
    cursor: pointer;
  }
`;

const SearchBox = styled.div`
  ${flexAlignCenter}
  padding: 1vw;
  width: 70vw;
  background-color: #f6f3f3;
  border-radius: ${({ theme }) => theme.btnRadius.btnRadius2};
`;

const Icon = styled.span`
  margin-left: 1vw;
  margin-right: -2.5vw;
  padding-top: 0.4vh;
  color: ${({ theme }) => theme.palette.grey};
  font-size: 1.4vw;
`;

const Input = styled.input`
  width: 100%;
  margin-left: 3vw;
  padding: 0.6vw;
  background-color: transparent;
  border: none;
  font-size: 1.3vw;

  :focus {
    outline: none;
  }
`;

const DeleteBtn = styled.span`
  margin-right: 1vw;
  color: ${({ theme }) => theme.palette.black};
  font-size: 1.3vw;
`;

const SearchedData = styled.div`
  color: red;
`;

const ProductList = styled.div`
  ${flexAlignCenter}
  width: 69vw;
  padding: 0.8vw;
  margin-left: -2.5vw;
  background-color: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.palette.lightGrey};

  img {
    width: 10%;
    border-radius: ${({ theme }) => theme.btnRadius.btnRadius3};
  }

  span {
    margin-left: 1vw;
  }
`;

export default SearchBar;
