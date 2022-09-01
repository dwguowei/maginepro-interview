import React, {useEffect, useState} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import Button from "../components/form/Button";
import {AxiosResponse} from "axios";
import {getVideo, GetResponse} from "../services/api/OmdbConnection";


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
      <div>{videoDetail?.Title}</div>
      <img src={videoDetail?.Poster} />
      {JSON.stringify(videoDetail)}
      <Button onClick={() => navigate(-1)}>Back</Button>
    </>
  )
}

export default Search;
