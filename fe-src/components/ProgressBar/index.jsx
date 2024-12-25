'use client';

import { AppProgressBar } from 'next-nprogress-bar';

const ProgressBar = ({ children }) => {
  return (
    <>
      {children}
      <AppProgressBar
        height="4px"
        color="#C7AB62"
        options={{ showSpinner: false }}
      />
    </>
  );
};

export default ProgressBar;