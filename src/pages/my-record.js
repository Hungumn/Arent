import { HeaderLayout } from 'components/student/header-layout';
import Head from 'next/head';
import pic1 from 'assets/images/MyRecommend-1.jpg';
import pic2 from 'assets/images/MyRecommend-2.jpg';
import pic3 from 'assets/images/MyRecommend-3.jpg';
import { Box, Button, Container, Grid, Link, Typography } from '@mui/material';
import Chart from 'react-google-charts';
import { useEffect, useState } from 'react';
import { FooterLayout } from 'components/student/footer-layout';
import chart2 from 'assets/images/chart1.png';
import ScrollTop from 'components/scroll-on-top';

const recommends = [
	{
		title: 'body record',
		description: '自分のカラダの記録',
		thumbnail: pic1,
	},
	{
		title: 'my exercise',
		description: '自分の運動の記録',
		thumbnail: pic2,
	},
	{
		title: 'my diary',
		description: '自分の日記',
		thumbnail: pic3,
	},
];

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

export const MyRecord = (props) => {
	const [exercises, setExcercises] = useState([]);
	const [diaries, setDiaries] = useState([]);

	useEffect(() => {
		const arr = [];
		const arr2 = [];
		for (let i = 0; i < 50; i++) {
			arr.push(i);
		}
		for (let i = 0; i < 8; i++) {
			arr2.push(i);
		}
		setExcercises(arr);
		setDiaries(arr2);
	}, []);

	return (
		<>
			<Head>
				<title>My record</title>
			</Head>
			<Box mt={10}>
				<div id="back-to-top-anchor" />
				<ScrollTop />
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						gap: 8,
						flexWrap: 'wrap',
					}}
				>
					{recommends.map((item) => (
						<Box
							key={item.title}
							sx={{
								aspectRatio: '1/1',
								height: '350px',
								position: 'relative',
								border: '30px solid #FFCC21',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
								overflow: 'hidden',
							}}
						>
							<img
								src={item.thumbnail.src}
								style={{
									position: 'absolute',
									inset: 0,
									objectFit: 'cover',
									objectPosition: 'left',
									height: '100%',
									width: '100%',
									filter: 'grayscale(100%)',
									zIndex: -1,
								}}
							/>
							<Box
								sx={{
									position: 'absolute',
									inset: 0,
									backgroundColor: 'rgba(0,0,0,0.7)',
									zIndex: -1,
								}}
							/>
							<Typography
								sx={{
									color: '#FFCC21',
									textTransform: 'uppercase',
									letterSpacing: '2px',
									fontSize: '28px',
									mb: 1,
								}}
							>
								{item.title}
							</Typography>
							<Typography
								sx={{
									color: '#fff',
									backgroundColor: '#FF963C',
									padding: '4px 20px',
									width: 'max-content',
								}}
							>
								{item.description}
							</Typography>
						</Box>
					))}
				</Box>
				<Box
					sx={{
						maxWidth: '1280px',
						mx: 'auto',
						my: 4,
						'@media(min-width: 768px)': {
							my: 8,
						},
					}}
				>
					{/* <Chart
            width='100%'
            height='400px'
            chartType='LineChart'
            data={chartData}
            options={chartOptions}
              />*/}
					<img
						src={chart2.src}
						alt=""
						style={{
							objectFit: 'cover',
							width: '100%',
							margin: '0 auto',
							display: 'block',
						}}
					/>
				</Box>
				<Box
					sx={{
						maxWidth: '1280px',
						backgroundColor: '#414141',
						height: '264px',
						py: 2,
						px: 4,
						mx: 'auto',
						color: '#fff',
						overflow: 'hidden',
						pb: 10,
					}}
				>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							gap: 4,
						}}
					>
						<Typography sx={{ fontSize: '20px' }}>
							MY <span style={{ display: 'block' }}>EXERCISE</span>
						</Typography>
						<Typography sx={{ fontSize: '24px' }}>2021.05.21</Typography>
					</Box>
					<Box sx={{ height: '100%', overflow: 'auto' }}>
						{exercises.map((_, idx) => (
							<Box
								key={idx}
								sx={{
									display: 'grid',
									gridTemplateColumns: '1fr ',
									mt: 1,
									'@media(min-width: 640px)': {
										gridTemplateColumns: 'repeat(2,1fr)',
										gap: 8,
									},
								}}
							>
								<Box
									sx={{
										display: 'flex',
										gap: 2,
										borderBottom: '1px solid #777777',
									}}
								>
									<Box>●</Box>
									<Box sx={{ width: '100%' }}>
										<Typography>家事全般（立位・軽い）</Typography>
										<Typography sx={{ color: '#FFCC21', fontSize: '15px' }}>26kcal</Typography>
									</Box>
									<Typography sx={{ color: '#FFCC21', width: '80px', fontSize: '18px' }}>10 min</Typography>
								</Box>
								<Box
									key={idx}
									sx={{
										display: 'flex',
										gap: 2,
										borderBottom: '1px solid #777777',
									}}
								>
									<Box>●</Box>
									<Box sx={{ width: '100%' }}>
										<Typography>家事全般（立位・軽い）</Typography>
										<Typography sx={{ color: '#FFCC21', fontSize: '15px' }}>26kcal</Typography>
									</Box>
									<Typography sx={{ color: '#FFCC21', width: '80px', fontSize: '18px' }}>10 min</Typography>
								</Box>
							</Box>
						))}
					</Box>
				</Box>
				<Box sx={{ maxWidth: '1280px', mx: 'auto', mt: 8, px: 3 }}>
					<Typography sx={{ fontSize: '22px' }}>MY DIARY</Typography>
					<Box
						sx={{
							display: 'grid',
							gridTemplateColumns: 'repeat(1, 1fr)',
							gap: 2,
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
						{diaries.map((_, idx) => (
							<Box
								key={idx}
								sx={{
									border: '2px solid #707070',
									aspectRatio: '1/1',
									py: 3,
									px: 2,
								}}
							>
								<Typography sx={{ fontSize: '18px' }}>
									2021.05.21 <span style={{ display: 'block' }}>23:25</span>
								</Typography>
								<Typography sx={{ fontSize: '12px', mt: 1 }}>
									私の日記の記録が一部表示されます。
									<br />
									テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
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
						自分の日記をもっと見る
					</Button>
				</Box>
				<FooterLayout />
			</Box>
		</>
	);
};

MyRecord.getLayout = (page) => <HeaderLayout>{page}</HeaderLayout>;

export default MyRecord;
