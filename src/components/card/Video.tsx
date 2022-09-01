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

const Title = styled.div`
  padding-bottom: 20px;
`;

function VideoCard ({imdbID, poster, title}: Video) {
  return (
    <Link to={`detail/${imdbID}`}>
      {poster === "N/A"
        ? (
          <Card backgroundImage={PostPlaceholder}>
            <Title>{title}</Title>
          </Card>
        )
        : (
          <Card backgroundImage={poster} />
        )
      }
    </Link>
  )
}


export default VideoCard
