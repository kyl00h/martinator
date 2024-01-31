// Author: Aboom

import { DownloadButton } from "./DownloadButton";
import { VideoPlayer } from "./VideoPlayer";

export interface VideoCardProps {
  id: number;
  name: string;
  description: string;
  startDateTime: string;
  endDateTime: string;
  duration: string;
  size: number;
}

export const VideoCard = (props: VideoCardProps) => {
  return (
    <>
      <div className="Gelion rounded-lgoverflow-hidden shadow-lg bg-white m-6">
        <VideoPlayer id={props.id} />
        <div className="px-6 py-4">
          <h1
            id="videoTitle"
            className="font-bold text-center text-xl mb-3 overflow-hidden text-ellipsis whitespace-nowrap"
          >
            {props.name}
          </h1>
          <div className="flex lg:flex-row md:flex-row  justify-between">
            <p id="startDateTimeRange" className="text-gray-700 text-base mb-4">
              <i className="fa-solid fa-play mr-1 text-green-600"></i>
              {new Date(props.startDateTime).toUTCString().split(" ")[4]}
            </p>
            <p id="endDateTimeRange" className="text-gray-700 text-base mb-4">
              <i className="fa-solid fa-stop mr-1 text-red-600"></i>
              {new Date(props.endDateTime).toUTCString().split(" ")[4]}
            </p>
          </div>
          <p id="videoDescription" className="text-gray-700 text-base">
            {props.description}
          </p>
        </div>
        <DownloadButton
          videoSize={props.size}
          videoId={props.id}
          videoName={props.name}
        />
      </div>
    </>
  );
};
