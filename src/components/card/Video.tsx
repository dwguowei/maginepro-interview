import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import PostPlaceholder from "../../assets/movie-poster-placeholder.jpeg";

export type Video = {
  imdbID: string,
  title: string,
  poster: string
}

type CardProps = {
  backgroundImage?: string
}

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;


const Card = styled.div<CardProps>`
  width: 300px;
  height: 444px;
  min-width: 300px;
  min-height: 444px;
  background-image: ${props => `url(${props.backgroundImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const TitleWithoutPoster = styled.div`
  padding-bottom: 20px;
`;

const TitleWithPoster = styled.div`
  color: white;
  background-color: rgba(0,0,0,0.5);
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-weight: 700;
`;

function VideoCard ({imdbID, poster, title}: Video) {
  return (
    <StyledLink to={`detail/${imdbID}`} >
      {poster === "N/A"
        ? (
          <Card backgroundImage={PostPlaceholder}>
            <TitleWithoutPoster>{title}</TitleWithoutPoster>
          </Card>
        )
        : (
          <Card backgroundImage={poster}>
            <TitleWithPoster>{title}</TitleWithPoster>
          </Card>
        )
      }
    </StyledLink>
  )
}


export default VideoCard
