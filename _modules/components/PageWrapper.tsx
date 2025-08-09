'use client';

import { HTMLMotionProps, motion } from 'framer-motion';

// This component wrap Layout to spend time for shifting the content by perfect pixels
const PageWrapper = (props: HTMLMotionProps<'div'>) => {
  return (
    <div className='bg-white'>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0 }}
        layout
        {...props}
      />
    </div>
  );
};

export default PageWrapper;
