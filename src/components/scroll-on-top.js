import * as React from 'react';
import { Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollTop = () => {
  const [showScroll, setShowScroll] = React.useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 100) {
      setShowScroll(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  const handleClick = () => {
    const anchor = document.querySelector('#back-to-top-anchor');
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Fab
      aria-label="scroll back to top"
      onClick={handleClick}
      sx={{
        display: showScroll ? 'flex' : 'none',
        position: 'fixed',
        bottom: 16,
        right: 16,
        color:'#777777',
        backgroundColor:'#FFFFFF',
        border: '1px solid #777777'
      }}
    >
      <KeyboardArrowUpIcon />
    </Fab>
  );
};

export default ScrollTop;
