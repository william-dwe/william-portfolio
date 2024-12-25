'use client';

import { AppProgressBar } from 'next-nprogress-bar';

const ProgressBar = ({ children }) => {
  return (
    <div className='relative'>
      {children}
      <AppProgressBar
        height="4px"
        color="#C7AB62"
        options={{ showSpinner: false }}
      />
    </div>
  );
};

export default ProgressBar;