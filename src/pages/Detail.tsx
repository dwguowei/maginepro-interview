import React, {useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import styled from "styled-components";
import Button from "../components/form/Button";
import {AxiosResponse} from "axios";
import {getVideo, GetResponse} from "../services/api/OmdbConnection";
import {useQuery} from "react-query";
import {device} from "../styles/breakpoints";
import {Helmet} from "react-helmet";

const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px;
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
  flex-direction: column;
  gap: 10px;

  @media ${device.md} {
     flex-direction: row;
   }
`;

const VideoPoster = styled.img`
  object-fit: contain;
  width: 100%;
  @media ${device.md} {
    height: 600px;
  }
`;

const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const VideoInfoLabel = styled.div`
  font-weight: 700;
`;

const BackButtonContainer = styled.div`
  margin: 10px;
`;

function Search () {
  const {imdbID} = useParams<{imdbID: string}>();
  const navigate = useNavigate();

  const [apiError, setApiError] = useState()

  const {isLoading, error, data} = useQuery(
    ["movieDetail", imdbID],
    () => getVideo(imdbID).then((result: AxiosResponse<GetResponse>) => result.data, reject => setApiError(reject.message)),
  );

  return (
    <>
      <Helmet>
        <title>FilmDB - Video Details</title>
        <meta name="description" content="Find movies at your finger tips" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FilmDB - Video Details" />
        <meta name="twitter:description" content="Find movies at your finger tips" />
        <meta name="twitter:image" content="https://dwguowei.github.io/maginepro-interview/logo.png"/>
        <meta property="og:title" content="FilmDB - Video Details" />
        <meta property="og:description" content="Find movies at your finger tips" />
        <meta property="og:image" content="https://dwguowei.github.io/maginepro-interview/logo.png"/>
        <meta property="og:url" content="https://dwguowei.github.io/maginepro-interview/" />
        <meta property="og:site_name" content="FilmDB" />
        <meta property="og:locale" content="en_US" />
      </Helmet>
      <VideoDetailsContainer>
        {(data && data.Response === "False") || apiError
          ? <div>Error getting video data{apiError || data?.Error && <>. {apiError || data?.Error}</>}</div>
          : isLoading
            ? <div>Loading video information</div>
            : (<>
            <VideoTitle>{data?.Title}</VideoTitle>
            <VideoYearDuration>{data?.Year} &middot; {data?.Runtime}</VideoYearDuration>
            <VideoDetails>
              <VideoPoster src={data?.Poster} />
              <VideoInfo>
                <div>
                  <VideoInfoLabel>Genre:</VideoInfoLabel>
                  <div>{data?.Genre}</div>
                </div>
                <div>
                  <VideoInfoLabel>Plot:</VideoInfoLabel>
                  <div>{data?.Plot}</div>
                </div>
                {data?.Director && data?.Director !== "N/A" && (
                  <div>
                    <VideoInfoLabel>Director:</VideoInfoLabel>
                    <div>{data?.Director}</div>
                  </div>
                )}
                <div>
                  <VideoInfoLabel>Writer:</VideoInfoLabel>
                  <div>{data?.Writer}</div>
                </div>
                <div>
                  <VideoInfoLabel>Actors:</VideoInfoLabel>
                  <div>{data?.Actors}</div>
                </div>
                {data?.Released && data?.Released !== "N/A" && (
                  <div>
                    <VideoInfoLabel>Released:</VideoInfoLabel>
                    <div>{data?.Released}</div>
                  </div>
                )}
                <div>
                  <VideoInfoLabel>Language:</VideoInfoLabel>
                  <div>{data?.Language}</div>
                </div>
                <div>
                  <VideoInfoLabel>Rated:</VideoInfoLabel>
                  <div>{data?.Rated}</div>
                </div>
                {data?.totalSeasons && (
                  <div>
                    <VideoInfoLabel>Total Seasons:</VideoInfoLabel>
                    <div>{data?.totalSeasons}</div>
                  </div>
                )}
                {data?.Awards && data?.Awards !== "N/A" && (
                  <div>
                    <VideoInfoLabel>Awards:</VideoInfoLabel>
                    <div>{data?.Awards}</div>
                  </div>
                )}
                {data?.BoxOffice && data?.BoxOffice !== "N/A" && (
                  <div>
                    <VideoInfoLabel>BoxOffice:</VideoInfoLabel>
                    <div>{data?.BoxOffice}</div>
                  </div>
                )}
                <div>
                  <VideoInfoLabel>Ratings:</VideoInfoLabel>
                  <div>
                    {data?.Ratings?.map((rating) => {
                      return `${rating.Source}: ${rating.Value}`
                    }).join(", ")}
                  </div>
                </div>
              </VideoInfo>
            </VideoDetails>
          </>)
        }
      </VideoDetailsContainer>

      <BackButtonContainer>
        <Button onClick={() => navigate("/")}>Back to search</Button>
      </BackButtonContainer>
    </>
  )
}

export default Search;
