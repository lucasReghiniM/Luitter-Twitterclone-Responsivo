import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar />
          </Banner>

          <ProfileData>
              <EditButton outlined> Editar perfil </EditButton>
                <h1>Lucas Reghini Magalhães</h1>
                <h2>@lucasReghiniM</h2>

                <p>
                    Developer front-end and Web Designer - <a href="https://github.com/lucasReghiniM">Git</a>
                </p>

                <ul>
                    <li>
                        <LocationIcon />
                        São Paulo, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido(a) em 14 de novembro de 2000
                    </li>
                </ul>

                <Followage>
                    <span>
                        seguindo <strong>10</strong>
                    </span>
                    <span>
                        <strong>100 </strong> Seguidores
                    </span>
                </Followage>
          </ProfileData>
          
          <Feed />
      </Container>
  );
}

export default ProfilePage;