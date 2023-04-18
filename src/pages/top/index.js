import Head from 'next/head';
import { Box, Container, Grid, Link } from '@mui/material';
import { HeaderLayout } from 'components/student/header-layout';
import { Typography, Button } from '@mui/material';
import { FooterLayout } from 'components/student/footer-layout';
import Banner from 'assets/images/d01.png';
import logoVertical from 'assets/images/logoVertical.png';
import Chart from 'react-google-charts';
import icon01 from 'assets/images/icon-1.png';
import bGIcon from 'assets/images/Bg-01.png';
import { ImageOverlay } from 'components/imageOverlay';

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
				component="main"
				sx={{
					flexGrow: 1,
					pt: 4,
				}}
			>
				<Container maxWidth={false} style={{ padding: 0 }}>
					{/* Top Page Cover */}
					<Grid rowSpacing={1} container justifyContent="center" alignItems="center">
						<Grid item xs={12} sm={5} md={4}>
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
								<Box
									sx={{
										position: 'absolute',
										inset: 0,
										backgroundColor: 'rgba(0,0,0,0.45)',
									}}
								/>
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
											alt="Banner"
											style={{ width: '50%', height: '320px', objectFit: 'contain', position: 'relative', left: '25%' }}
										/>
									</Box>
									<Box>
										<Typography
											align="center"
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
											<span style={{ fontWeight: 400, fontSize: '25px' }}> 75%</span>
										</Typography>
									</Box>
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} sm={7} md={8}>
							<Box>
								<Chart width="100%" height="400px" chartType="LineChart" data={chartData} options={chartOptions} />
							</Box>
						</Grid>
					</Grid>
					<Box>
						<Box my={10} textAlign={'center'}>
								<img src={icon01.src}/>
								<img src={icon01.src}/>
								<img src={icon01.src}/>
								<img src={icon01.src}/>
						</Box>
					</Box>
					<FooterLayout />
				</Container>
			</Box>
		</>
	);
};

TopPage.getLayout = (page) => <HeaderLayout>{page}</HeaderLayout>;

export default TopPage;
