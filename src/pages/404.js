import { useEffect } from 'react';
import NextLink from 'next/link';
import Head from 'next/head';
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const NotFound = () => {
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Head>
        <title>Error: Not Found | Cloudbox Lesson</title>
      </Head>
      <Box
        component='main'
        sx={{
          alignItems: 'center',
          backgroundColor: 'background.paper',
          display: 'flex',
          flexGrow: 1,
          py: '80px',
        }}
      >
        <Container maxWidth='lg'>
          <Typography align='center' variant={mobileDevice ? 'h4' : 'h1'}>
            404: お探しのページはここにありません
          </Typography>
          {/* <Typography
            align='center'
            color='textSecondary'
            sx={{ mt: 0.5 }}
            variant='subtitle2'
          >
            You either tried some shady route or you came here by mistake.
            Whichever it is, try using the navigation.
          </Typography> */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 6,
            }}
          >
            <Box
              alt='Under development'
              component='img'
              src={`/images/error/error404_${theme.palette.mode}.svg`}
              sx={{
                height: 'auto',
                maxWidth: '100%',
                width: 400,
              }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 6,
            }}
          >
            <NextLink href='/' passHref>
              <Button component='a' variant='outlined'>
                ダッシュボードに戻る
              </Button>
            </NextLink>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default NotFound;
