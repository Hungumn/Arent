import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  ButtonBase,
  Toolbar,
  Typography,
  Button,
  ListItemIcon,
  Menu,
  Badge,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import logo from 'assets/images/logo.png';
import icon1 from 'assets/images/logo1.png';
import icon2 from 'assets/images/logo2.png';
import icon3 from 'assets/images/logo3.png';
import { useRouter } from 'next/router';
import { AccountPopoverStudent } from './account-popover-student';
import { Menu as MenuIcon } from '../../icons/menu';
import { orange } from '@mui/material/colors';
import Link from 'next/link';

const path = process.env.NEXT_PUBLIC_CDN_RESOURCE;

const HeaderNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  ...(theme.palette.mode === 'light'
    ? {
        boxShadow: theme.shadows[3],
      }
    : {
        backgroundColor: theme.palette.background.paper,
        borderBottomColor: theme.palette.divider,
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
        boxShadow: 'none',
      }),
}));

const BrandLogo = () => {
  const router = useRouter();

  return (
    <>
      <Box
        sx={{
          alignItems: 'center',
          display: 'none',
          '@media(min-width: 800px)': {
            display: 'flex',
          },
        }}
      >
        <img
          src={logo.src}
          height='64'
          style={{
            transform: 'scale(0.75)',
            cursor: 'pointer',
          }}
          onClick={() => router.push('/')}
        />
      </Box>
    </>
  );
};

const LinkAppBar = () => {
  return (
    <>
      <Box sx={{ float: 'right', marginRight: '16px' }}>
        <Link href='my-record'>
          <Button
            sx={{
              '&:hover': {
                backgroundColor: 'transparent',
                '@media(min-width:600px)': {
                  width: 160,
                },
              },
            }}
          >
            <img
              src={icon1.src}
              height='32'
              style={{
                transform: 'scale(0.75)',
                cursor: 'pointer',
              }}
            />
            <Typography
              color={'#FFF'}
              sx={{
                display: 'none',
                '@media(min-width:600px)': {
                  display: 'initial',
                },
              }}
            >
              自分の記録
            </Typography>
          </Button>
        </Link>
        <Button
          sx={{
            '&:hover': {
              backgroundColor: 'transparent',
              '@media(min-width:600px)': {
                width: 160,
              },
            },
          }}
        >
          <img
            src={icon2.src}
            height='32'
            style={{
              transform: 'scale(0.75)',
              cursor: 'pointer',
            }}
          />
          <Typography
            color={'#FFF'}
            sx={{
              display: 'none',
              '@media(min-width:600px)': {
                display: 'initial',
              },
            }}
          >
            チャレンジ
          </Typography>
        </Button>
        <Button
          sx={{
            '&:hover': {
              backgroundColor: 'transparent',
              '@media(min-width:600px)': {
                width: 160,
              },
            },
          }}
        >
          <Badge
            badgeContent={1}
            sx={{
              '& .MuiBadge-badge': {
                color: '#FFF',
                backgroundColor: '#EA6C00',
                fontSize: '10px',
                minWidth: '16px',
                height: '16px',
              },
            }}
          >
            <img
              src={icon3.src}
              height='32'
              style={{
                transform: 'scale(0.75)',
                cursor: 'pointer',
              }}
            />
          </Badge>

          <Typography
            color={'#FFF'}
            sx={{
              display: 'none',
              '@media(min-width:600px)': {
                display: 'initial',
              },
            }}
          >
            お知らせ
          </Typography>
        </Button>
      </Box>
    </>
  );
};

const AccountButton = () => {
  const router = useRouter();
  const anchorRef = useRef(null);
  const [openPopover, setOpenPopover] = useState(false);
  const [avatarURL, setAvatarURL] = useState();
  const [currentUser, setCurrentUser] = useState();
  const isStudent = 'Students';

  const handleOpenPopover = () => {
    setOpenPopover(true);
  };

  const handleClosePopover = () => {
    setOpenPopover(!openPopover);
  };

  return (
    <>
      <Box
        component={ButtonBase}
        onClick={handleOpenPopover}
        ref={anchorRef}
        sx={{
          alignItems: 'center',
          display: 'flex',
          mr: 2,
        }}
      >
        <MenuIcon sx={{ color: '#FF963C' }} />
      </Box>
      <AccountPopoverStudent
        anchorEl={anchorRef.current}
        onClose={handleClosePopover}
        open={openPopover}
        user={currentUser}
        isStudent={isStudent}
        setOpenPopover={setOpenPopover}
        avatarURL={avatarURL}
      />
    </>
  );
};

export const HeaderNavbar = (props) => {
  const { onOpenSidebar, ...other } = props;

  return (
    <>
      <HeaderNavbarRoot
        {...other}
        sx={{
          bgcolor: '#414141',
          overflow: 'hidden',
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            height: 64,
            left: 0,
            px: 2,
            '@media (min-width: 1280px)': {
              px: 20,
            },
          }}
        >
          <BrandLogo />
          <Box sx={{ flexGrow: 1 }} />
          <LinkAppBar />

          <AccountButton />
        </Toolbar>
      </HeaderNavbarRoot>
    </>
  );
};

HeaderNavbar.propTypes = {
  onOpenSidebar: PropTypes.func,
};
