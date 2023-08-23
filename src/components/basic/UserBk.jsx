import React from 'react';
// import DefaultBk from '../../assets/images/bk.jpg';
import UserBkSkeleton from '../sekeleton/UserBkSkeleton';
const UserBk = ({ bkUrl, isLoading, imageStatus }) => {
  return (
    <>
      <div className='profile-bk-clip'>
        {isLoading && <UserBkSkeleton />}
        {bkUrl && (
          <img src={bkUrl} alt='mountain pic' className='profile-bk-image' />
        )}
      </div>
    </>
  );
};

export default UserBk;
