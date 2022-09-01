import React, {useEffect, useState} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import Button from "../components/form/Button";
import {AxiosResponse} from "axios";
import {getVideo, GetResponse} from "../services/api/OmdbConnection";
import styled from "styled-components";

const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const VideoTitle = styled.div`
  font-size: x-large;
  font-weight: 700;
`;

const VideoYearDuration = styled.div`
  font-weight: 700;
`;

const VideoDetails = styled.div`
  display: flex;
  gap: 10px;
`;

const VideoPoster = styled.img`
  object-fit: contain;
  height: 600px;
`;

const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const VideoInfoLabel = styled.div`
  font-weight: 700;
`;

function Search () {
  const [videoDetail, setVideoDetail] = useState<GetResponse>();
  const {imdbID} = useParams<{imdbID: string}>();
  const navigate = useNavigate();

  useEffect(()=>{
    if (imdbID) {
      getVideo(imdbID).then((result: AxiosResponse<GetResponse>) => {
        console.log(result.data)
        if (typeof result.data === "object") {
          setVideoDetail(result.data)
        }
        // const video = omdbReadResponse(result.data);
        // setVideoDetail(video)
      });
    }
  },[]);

  return (
    <>
      <VideoDetailsContainer>
        <VideoTitle>{videoDetail?.Title}</VideoTitle>
        <VideoYearDuration>{videoDetail?.Year} &middot; {videoDetail?.Runtime}</VideoYearDuration>
        <VideoDetails>
          <VideoPoster src={videoDetail?.Poster} />
          <VideoInfo>
            <div>
              <VideoInfoLabel>Genre:</VideoInfoLabel>
              <div>{videoDetail?.Genre}</div>
            </div>
            <div>
              <VideoInfoLabel>Plot:</VideoInfoLabel>
              <div>{videoDetail?.Plot}</div>
            </div>
            {videoDetail?.Director && videoDetail?.Director !== "N/A" && (
            <div>
              <VideoInfoLabel>Director:</VideoInfoLabel>
              <div>{videoDetail?.Director}</div>
            </div>
            )}
            <div>
              <VideoInfoLabel>Writer:</VideoInfoLabel>
              <div>{videoDetail?.Writer}</div>
            </div>
            <div>
              <VideoInfoLabel>Actors:</VideoInfoLabel>
              <div>{videoDetail?.Actors}</div>
            </div>
            <div>
              <VideoInfoLabel>Released:</VideoInfoLabel>
              <div>{videoDetail?.Released}</div>
            </div>
            <div>
              <VideoInfoLabel>Language:</VideoInfoLabel>
              <div>{videoDetail?.Language}</div>
            </div>
            <div>
              <VideoInfoLabel>Rated:</VideoInfoLabel>
              <div>{videoDetail?.Rated}</div>
            </div>
            {videoDetail?.totalSeasons && (
              <div>
                <VideoInfoLabel>Total Seasons:</VideoInfoLabel>
                <div>{videoDetail?.totalSeasons}</div>
              </div>
            )}
            <div>
              <VideoInfoLabel>Awards:</VideoInfoLabel>
              <div>{videoDetail?.Awards}</div>
            </div>
            {videoDetail?.BoxOffice && (
            <div>
              <VideoInfoLabel>BoxOffice:</VideoInfoLabel>
              <div>{videoDetail?.BoxOffice}</div>
            </div>
            )}
            <div>
              <VideoInfoLabel>Ratings:</VideoInfoLabel>
              <div>
                {videoDetail?.Ratings.map((rating) => {
                  return `${rating.Source}: ${rating.Value}`
                }).join(", ")}
              </div>
            </div>
          </VideoInfo>
        </VideoDetails>
      </VideoDetailsContainer>
      <Button onClick={() => navigate(-1)}>Back to search</Button>
    </>
  )
}

export default Search;
