import React from "react";

import {
  Container,
  Retweeted,
  Body,
  Avatar,
  Content,
  Header,
  Description,
  ImageContent,
  Status,
  Icons,
  ComentIcon,
  RetweetIcon,
  LikeIcon,
  Dot,
} from "./styles";

const Tweet = () => {
  return (
    <Container>
      <Retweeted>Você retweetou</Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@Olá, meu nome é Jair</span>
            <Dot />
            <time>11 de agos</time>
          </Header>

          <Description>Foguete não tem ré</Description>

          <ImageContent />

          <Icons>
            <Status>
              <ComentIcon />
              18
            </Status>

            <Status>
              <RetweetIcon />
              18
            </Status>

            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
