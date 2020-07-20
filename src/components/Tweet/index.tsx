import React from 'react';

import { 
  Container, Retweeted, RetweetIcon, Body, Avatar, Content, Header, Dot, Description, ImageContent, Icons, Status, CommentIcon, RetweetIcon2, LikeIcon
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RetweetIcon />
        voce retweetou
      </Retweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Programador</strong>
            <span>@Dev</span>
            <Dot />
            <time> 14 de nov</time>
          </Header>

          <Description>
            O lucas é o melhor Dev front e Web Designer que eu conheço
          </Description>

          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              8
            </Status> 
            <Status>
              <RetweetIcon2 />
              42
            </Status> 
            <Status>
              <LikeIcon />
              200
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;