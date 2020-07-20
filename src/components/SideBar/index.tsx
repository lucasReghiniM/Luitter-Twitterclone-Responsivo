import React from 'react';
import StickBox from 'react-sticky-box'


import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';
import List from '../List'
import Suggestion from '../Suggestion'
import News from '../News'


const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no twitter"/>
        <SearchIcon />
      </SearchWrapper>

      <StickBox>
        <Body>
          <List 
            title="Talvez você curta"
            elements={[
              <Suggestion 
                name="Reghini Lucas"
                nickname="@ReghiniLucas"
              />,
              <Suggestion 
                name="Lucas Reghini Magalhaes"
                nickname="@LucasRegMag"
              />,
              <Suggestion 
                name="Magalhães Reghini Lucas"
                nickname="@MRL"
              />
            ]}
          />
          <List 
            title="Talvez você curta"
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />
          <List 
            title="Talvez você curta"
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />
          <List 
            title="Talvez você curta"
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />
          <List 
            title="Talvez você curta"
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />
        </Body>
      </StickBox>
    </Container>
  );
}

export default SideBar;