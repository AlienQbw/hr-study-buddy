import React from 'react';
import styled from 'styled-components';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import NewsTemplate from '../NewsTemplate/NewsSection';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <NewsTemplate />
    </Wrapper>
  );
};

export default MainTemplate;
