import React from "react";
import styled from "styled-components";
import PostPlaceholder from "@/assets/movie-poster-placeholder.jpeg";

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
  if (poster === "N/A") {
    return (
      <Card backgroundImage={PostPlaceholder}>
        <Title>{title}</Title>
      </Card>
    )
  } else {
    return (
      <Card backgroundImage={poster} />
    )
  }
}


export default VideoCard
