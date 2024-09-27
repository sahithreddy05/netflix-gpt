import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer';
const VideoBackground = ({movieId}) => {
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

    useMovieTrailer(movieId);
    return (
        <div className=" w-screen">
          <iframe
            className="w-screen aspect-video"
            src={
              "https://www.youtube.com/embed/" + trailerVideo?.key +
               "?autoplay=1&mute=1"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      );
}

export default VideoBackground;


// {
//     "id": 957452,
//     "results": [
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Feel Bumper",
//         "key": "cT4CCK3lxiI",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-08-16T18:02:48.000Z",
//         "id": "66c97d68731aded63bb31892"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Staircase Clip",
//         "key": "AOnjHigFVa8",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2024-08-16T16:49:15.000Z",
//         "id": "66c97d1e3b5988ee51b11640"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official Clip - ‘Opera House’",
//         "key": "2wNOfSJDAoU",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2024-08-14T17:00:19.000Z",
//         "id": "66bdc30dcd7bc1090a4031f4"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "UK TV Spot 4",
//         "key": "9ttwmSTaX1A",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-08-13T09:24:27.000Z",
//         "id": "66d06480c91bdc6d1b2baf3a"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "UK TV Spot 3",
//         "key": "VLFljn4gdKk",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-08-13T09:24:15.000Z",
//         "id": "66d064694082e53697aa6faf"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "UK TV Spot 2",
//         "key": "Oz2tuUvzevk",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-08-13T09:23:59.000Z",
//         "id": "66d064418e91c51de4ec439f"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "UK TV Spot 1",
//         "key": "HFlSCFy2sKQ",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-08-13T09:23:30.000Z",
//         "id": "66d064255b362ecb33ec4485"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "UK Trailer",
//         "key": "4CLE3pWAAr8",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2024-08-05T08:25:46.000Z",
//         "id": "66d063dad5b4d76243a0ba68"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official Clip - ‘Get In The Back’",
//         "key": "iFuT1BsZRiw",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2024-07-25T19:00:15.000Z",
//         "id": "66a2a515aee5c7e0b9e7fdf0"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official Trailer",
//         "key": "djSKp_pwmOA",
//         "site": "YouTube",
//         "size": 2160,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2024-03-14T14:00:03.000Z",
//         "id": "65f31010c49048018619fed1"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official Teaser",
//         "key": "VzXAsxGLEQI",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-03-13T16:14:01.000Z",
//         "id": "65f1d3b02fdec60170211950"
//       }
//     ]
//   }


