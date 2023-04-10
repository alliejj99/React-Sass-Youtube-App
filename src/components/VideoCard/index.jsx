/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { BiDotsVerticalRounded } from "react-icons/bi";

const VideoCard = ({ id, video, img, info, extraInfo, channelInfo }) => {
  return (
    <div className="videoCard">
      <Link to={`/video/${id}`} state={{ ...video }}>
        <div className="video_preview">
          <img src={img} alt={info.title} />
          {extraInfo.duration ? (
            <div className="video_duration">
              <span>{extraInfo.duration}</span>
            </div>
          ) : null}
        </div>
        <div className="video_info_container">
          <div className="avatar_container">
            <img
              src={img}
              alt={`${info.channelTitle} avatar`}
              className="avatar"
            />
          </div>
          <div className="video_text_container">
            <h3>
              {info.title.length > 60
                ? info.title.substring(0, 60) + "..."
                : info.title}
            </h3>
            <div className="video_info">
              <Link to={`/channel/${channelInfo.customUrl}`}>
                {/* 채널로 이동하기 */}
                <div className="channelName">{info.channelTitle}</div>
              </Link>
              <div className="video_metadata">
                <span>{extraInfo.videoCount} views</span>&nbsp;
                <span className="dot_separator"> &#8226; </span>&nbsp;
                <span>{info.publishedAt}</span>
              </div>
            </div>
          </div>
          <div className="dots_container">
            <BiDotsVerticalRounded size={25} className="dots" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;