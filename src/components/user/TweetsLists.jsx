import React from 'react';
import TweetCardBasic from '../basic/TweetCardBasic';
import TweetBasicCardSkeleton from '../sekeleton/TweetBasicCardSkeleton.jsx';

// import { useEffect } from 'react';

const TweetsLists = ({ tweets, onClick, onToggleLike, isLoading }) => {
  return (
    <div className='TweetLists'>
      {isLoading && <TweetBasicCardSkeleton cards={8} />}
      {tweets.map((tweet) => {
        return (
          <TweetCardBasic
            key={tweet.id}
            {...tweet}
            onClick={({ tweetId, userId }) => {
              onClick?.({ tweetId, userId });
            }}
            onToggleLike={({ id, isLike }) => {
              onToggleLike?.({ id, isLike });
            }}
          />
        );
      })}
    </div>
  );
};

export default TweetsLists;
