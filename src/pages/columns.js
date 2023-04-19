import { Typography, Box, Button } from '@mui/material';
import { FooterLayout } from 'components/student/footer-layout';
import { HeaderLayout } from 'components/student/header-layout';
import Head from 'next/head';
import { columnsData } from 'utils/global-data';

const categories = [
  {
    title: 'RECOMMENDED COLUMN',
    text: 'オススメ',
  },
  {
    title: 'RECOMMENDED DIET',
    text: 'ダイエット',
  },
  {
    title: 'RECOMMENDED BEAUTY',
    text: '美容',
  },
  {
    title: 'RECOMMENDED HEALTH',
    text: '健康',
  },
];

export const Columns = (props) => {
  return (
    <>
      <Head>
        <title>My record</title>
      </Head>
      <Box mt={10} px={3}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1,1fr)',
            gap: 1.5,
            maxWidth: '1280px',
            mx: 'auto',
            '@media(min-width: 576px)': {
              gridTemplateColumns: 'repeat(2,1fr)',
            },
            '@media(min-width: 768px)': {
              gridTemplateColumns: 'repeat(3,1fr)',
            },
            '@media(min-width: 1024px)': {
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: 5,
            },
          }}
        >
          {categories.map((category) => (
            <Box
              key={category.text}
              sx={{
                textAlign: 'center',
                backgroundColor: '#2E2E2E',
                px: 2,
                py: 4,
              }}
            >
              <Typography sx={{ color: '#FFCC21', fontSize: '22px' }}>
                {category.title.split(' ')[0]}
              </Typography>
              <Typography sx={{ color: '#FFCC21', fontSize: '22px' }}>
                {category.title.split(' ')[1]}
              </Typography>
              <Box
                sx={{
                  borderTop: '1px solid #fff',
                  width: '56px',
                  mx: 'auto',
                  my: 1.5,
                }}
              />
              <Typography sx={{ color: '#fff', fontSize: '18px' }}>
                {category.text}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1,1fr)',
            justifyContent: 'center',
            gap: 1.5,
            mt: 8,
            maxWidth: '1280px',
            mx: 'auto',
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
          {columnsData.map((column) => (
            <Box key={column.title}>
              <Box
                sx={{
                  position: 'relative',
                  aspectRatio: '3/2',
                  backgroundImage: `url(${column.thumbnail.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
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
                  {column.datetime}
                </Typography>
              </Box>
              <Typography sx={{ fontSize: '15px', my: 1 }}>
                {column.title}
              </Typography>
              <Typography sx={{ fontSize: '12px', color: '#FF963C' }}>
                {column.tags}
              </Typography>
            </Box>
          ))}
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
          コラムをもっと見る
        </Button>
      </Box>
      <FooterLayout />
    </>
  );
};

Columns.getLayout = (page) => <HeaderLayout>{page}</HeaderLayout>;

export default Columns;
