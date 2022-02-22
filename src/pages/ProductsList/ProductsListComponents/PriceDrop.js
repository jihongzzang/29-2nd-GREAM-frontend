import React from 'react';
import styled from 'styled-components';
const PriceDrop = () => {
  return (
    <>
      <FilterName>
        <Cate>가격</Cate>
        <SubCate />
      </FilterName>
      <div>➖</div>
    </>
  );
};

const FilterName = styled.div`
  display: block;
`;

const Cate = styled.span`
  display: block;
  margin-bottom: 15px;
`;

const SubCate = styled.span`
  color: ${props => props.theme.greyColor};
  .check {
    display: flex;
  }
  .category {
    margin-left: 10px;
  }
`;
export default PriceDrop;
