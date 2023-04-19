import Head from 'next/head';
import { Box, Container, Grid, Link } from '@mui/material';
import { HeaderLayout } from 'components/student/header-layout';
import { Typography, Button } from '@mui/material';
import { FooterLayout } from 'components/student/footer-layout';
import Banner from 'assets/images/main_photo.png';
import logoVertical from 'assets/images/logoVertical.png';
import Chart from 'react-google-charts';
import icon01 from 'assets/images/icon-01.png';
import icon02 from 'assets/images/icon2.png';
import hexagonBg from 'assets/images/Bg-01.png';
import { ImageOverlay } from 'components/imageOverlay';
import { dishes } from '../../utils/global-data';
import chart2 from 'assets/images/chart2.png';

const chartData = [
  ['x', 'Y1', 'Y2'],
  [0, 0, 0],
  [1, 10, 5],
  [2, 23, 15],
  [3, 17, 9],
  [4, 18, 10],
  [5, 9, 5],
  [6, 11, 3],
  [7, 27, 19],
];

const chartOptions = {
  chartArea: {
    width: '80%',
    height: '80%',
  },
  hAxis: {
    title: 'X',
  },
  vAxis: {
    title: 'Y',
    gridlines: {
      color: 'transparent',
    },
  },
  series: {
    0: { type: 'line' },
    1: { type: 'line' },
  },
};

export const TopPage = (props) => {
  return (
    <>
      <Head>
        <title>TOP</title>
      </Head>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
        }}
      >
        <Container maxWidth={false} style={{ padding: 0 }}>
          {/* Top Page Cover */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              '@media(min-width:768px)': {
                flexDirection: 'row',
              },
              mt: 4,
            }}
          >
            <Grid item xs={12} sm={6} md={5}>
              <Box
                sx={{
                  position: 'relative',
                  backgroundImage: `url(${Banner.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'top-right',
                  backgroundRepeat: 'no-repeat',
                  width: '100%',
                  '@media (max-width: 600px)': {
                    backgroundImage: `url(${Banner.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                  },
                  '@media (max-width: 1000px)': {
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  },
                }}
                p={0}
              >
                {/* <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(0,0,0,0.45)',
                  }}
                /> */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  <Box>
                    <img
                      src={logoVertical.src}
                      alt='Banner'
                      style={{
                        width: '50%',
                        height: '400px',
                        objectFit: 'contain',
                        position: 'relative',
                        left: '25%',
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      align='center'
                      sx={{
                        color: '#fff',
                        fontWeight: 400,
                        fontSize: '18px',
                        position: 'absolute',
                        top: '46%',
                        left: '40%',
                        '@media (max-width: 600px)': {
                          paddingLeft: 1,
                          paddingRight: 1,
                          fontSize: 20,
                        },
                      }}
                    >
                      05/21
                      <span style={{ fontWeight: 400, fontSize: '25px' }}>
                        {' '}
                        75%
                      </span>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Box
              sx={{
                flex: 1,
                backgroundColor: '#2E2E2E',
                pt: 4,
                px: 2,
              }}
            >
              <img
                src={chart2.src}
                style={{
                  objectFit: 'contain',
                  width: '100%',
                  height: '360px',
                }}
              />
            </Box>
          </Box>
          <Box>
            <Box
              my={10}
              textAlign={'center'}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '60px',
                justifyContent: 'center',
                flexWrap: 'wrap',
                px: 2,
              }}
            >
              <Box
                sx={{
                  backgroundImage: `url(${hexagonBg.src})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  p: 4,
                }}
              >
                <img src={icon01.src} alt='' />
                <Typography color='#fff'>Morning</Typography>
              </Box>
              <Box
                sx={{
                  backgroundImage: `url(${hexagonBg.src})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  p: 4,
                }}
              >
                <img src={icon01.src} alt='' />
                <Typography color='#fff'>Lunch</Typography>
              </Box>
              <Box
                sx={{
                  backgroundImage: `url(${hexagonBg.src})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  p: 4,
                }}
              >
                <img src={icon01.src} alt='' />
                <Typography color='#fff'>Dinner</Typography>
              </Box>
              <Box
                sx={{
                  backgroundImage: `url(${hexagonBg.src})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  p: 4,
                }}
              >
                <img src={icon02.src} alt='' />
                <Typography color='#fff'>Snack</Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(1,1fr)',
              justifyContent: 'center',
              maxWidth: '1280px',
              margin: '0 auto',
              gap: 1.5,
              px: 4,
              '@media(min-width: 576px)': {
                gridTemplateColumns: 'repeat(2,1fr)',
              },
              '@media(min-width: 768px)': {
                gridTemplateColumns: 'repeat(3,1fr)',
              },
              '@media(min-width: 1024px)': {
                gridTemplateColumns: 'repeat(4,1fr)',
              },
            }}
          >
            {dishes.map((item) => {
              return (
                <Box key={item.title} sx={{ position: 'relative' }}>
                  <img
                    src={item.thumbnail.src}
                    alt={item.title}
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                      width: '100%',
                      aspectRatio: '1',
                      height: '100%',
                    }}
                  />
                  <Typography
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      backgroundColor: '#FFCC21',
                      color: '#fff',
                      padding: '6px 24px 6px 8px',
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              );
            })}
          </Box>
          <Button
            sx={{
              borderRadius: '8px',
              color: '#fff',
              backgroundImage: 'linear-gradient(to bottom, #FF963C, #FFCC21)',
              mt: 4,
              mb: 8,
              mx: 'auto',
              display: 'block',
              px: 8,
              py: 1.5,
              fontSize: '18px',
            }}
          >
            記録をもっと見る
          </Button>
          <FooterLayout />
        </Container>
      </Box>
    </>
  );
};

TopPage.getLayout = (page) => <HeaderLayout>{page}</HeaderLayout>;

export default TopPage;
