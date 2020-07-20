import React from 'react';

import { 
    Container, Header, BackIcon, ProfileInfo, BottonMenu, HomeIcon, SearchIcon, BellIcon, EmailIcon 
} from './styles';

import ProfilePage from '../ProfilePage';

const Main: React.FC = () => {
  return (
      <Container>
          <Header>
              <button>
                  <BackIcon />
              </button>

              <ProfileInfo>
                  <strong> Lucas Reghini M</strong>
                  <span>100 Tweets</span>
              </ProfileInfo>
          </Header>

          <ProfilePage />

          <BottonMenu>
              <HomeIcon className="active"/>
              <SearchIcon />
              <BellIcon />
              <EmailIcon />
          </BottonMenu>
      </Container>
  );
}

export default Main;