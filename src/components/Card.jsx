import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';

const UserInfo = ({ screenname, verified, description, followers, followings, ffRatio, query, gemini_res }) => (
  <div className="flex flex-col items-start w-1/3 space-y-2">
    <h2 className="text-xl font-semibold text-gray-800">{screenname}</h2>
    {verified && (
      <span className="text-blue-500 text-xs font-medium">✔ Verified</span>
    )}
    <p className="text-gray-600">{description}</p>
    <p>Followers: {followers}</p>
    <p>Followings: {followings}</p>
    <p>F/F Ratio: {ffRatio}</p>
    <p>Query: {query}</p>
    {gemini_res && (
      <>
        <p>Score: {gemini_res.score}</p>
        <p>Type: {gemini_res.type}</p>
        <p>Category: {gemini_res.cateogary}</p>
      </>
    )}
  </div>
);

const TweetStats = ({ populatedtweet, retweetCount, replyCount, likeCount, quoteCount, bookmarkCount, impressionCount }) => (
  <div className="flex flex-col items-start w-1/3 space-y-2">
    <p>Populated Tweet: {populatedtweet}</p>
    <p>Retweets: {retweetCount}</p>
    <p>Replies: {replyCount}</p>
    <p>Likes: {likeCount}</p>
    <p>Quotes: {quoteCount}</p>
    <p>Bookmarks: {bookmarkCount}</p>
    <p>Impressions: {impressionCount}</p>
  </div>
);

const Card = ({
  verified,
  url,
  followers,
  tweetid,
  followings,
  ffRatio,
  query,
  populatedtweet,
  screenname,
  gemini_res,
  description,
  img,
  retweetCount,
  replyCount,
  likeCount,
  quoteCount,
  bookmarkCount,
  impressionCount
}) => {
 const nav = useNavigate()
  return (
    <div
      role="button"
      className="w-full p-4 border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white flex flex-col space-y-4 relative"
      aria-label={`Profile of ${screenname}`}
    >
      <div className="flex space-x-4">
        <div className="relative w-1/3">
          <div
            className="absolute inset-0 bg-cover bg-center filter blur-md"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          <img
            src={img}
            alt={`Profile of ${screenname}`}
            className="relative w-[100px] h-[100px] object-cover rounded-md top-1/3 mx-auto"
          />
        </div>
        <UserInfo
          screenname={screenname}
          verified={verified}
          description={description}
          followers={followers}
          followings={followings}
          ffRatio={ffRatio}
          query={query}
          gemini_res={gemini_res}
        />
        <TweetStats
          populatedtweet={populatedtweet}
          retweetCount={retweetCount}
          replyCount={replyCount}
          likeCount={likeCount}
          quoteCount={quoteCount}
          bookmarkCount={bookmarkCount}
          impressionCount={impressionCount}
        />
      </div>
      <div className="flex justify-end">
        <FaExternalLinkAlt
      onClick={() => window.open(`https://${url}/status/${tweetid}`, '_blank')}
      className="text-blue-600 text-xl cursor-pointer hover:text-blue-700 transition-colors duration-300"
        />
      </div>
    </div>
  );
};

export default Card;
