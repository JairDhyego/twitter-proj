import React from "react";
import Feed from "./../Feed/index";

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from "./styles";

const ProfilPage = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined> Editar perfil</EditButton>
        <h1>jair Dhyego</h1>
        <h2>JaiirDhyego</h2>

        <p>
          {" "}
          <a href=""> Developer</a> free lancer
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, BRASIL
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 11 de agosto de 1997
          </li>
        </ul>

        <Followage>
          <span>
            Seguindo <strong>94</strong>
          </span>

          <span>
            {" "}
            <strong>672</strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilPage;
