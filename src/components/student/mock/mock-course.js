import { CheckCircleOutline, CurrencyYen, MicRounded, School, StarRounded, Theaters } from '@mui/icons-material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Box, Button, Typography } from '@mui/material';
import instructorIcon from 'assets/images/instructor-icon.png';
import point1 from 'assets/images/point_1_2.png';
import point2 from 'assets/images/point_2.png';
import point3 from 'assets/images/point_3.png';
import { HeaderLayout } from 'components/student/header-layout';
import { gtm } from 'lib/gtm';
import _ from 'lodash';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import MicrophoneIcon from 'assets/images/microphoneIcon.png';
import { styled } from '@mui/material/styles';
import movieLogo from 'assets/images/movieLogo.png';
import singingThumbnailMovie from 'assets/images/CBL-thumbnail-(singing).png';
import paramixThumbnailMovie from 'assets/images/CBL-thumbnail-(paramix).png';
import lesson1on1Thumbnail from 'assets/images/lesson1on1.png';
import voiceAuthorDom from 'assets/images/voice-author-dom.png';
import voiceAuthorJas from 'assets/images/voice-author-jasmine.png';
import voiceAuthorRob from 'assets/images/voice-author-rob.png';

const CustomCurrencyYen = styled(CurrencyYen)({
	backgroundColor: '#000',
	padding: 2,
	borderRadius: 99,
	color: '#fff',
});

const PointFeatures = [
	{ label: 'オンライン上で学べる', image: point1 },
	{ label: '動画を見ながら課題制作', image: point2 },
	{ label: '希望者にはマンツーマンも', image: point3 },
];

export const MockCourses = (props) => {
	useEffect(() => {
		gtm.push({ event: 'page_view' });
	}, []);

	const router = useRouter();

	return (
		<>
			{/* Point */}
			<Box py={10} style={{ backgroundColor: '#E3E3E3', width: '100%' }}>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						gap: 2,
					}}
					mb={14}
				>
					<CheckCircleOutline sx={{ fontSize: '50px', color: '#000' }} />
					<Box>
						<Typography
							variant="h2"
							sx={{
								color: '#000',
								fontWeight: 400,
							}}
						>
							POINT
						</Typography>
						<Typography sx={{ color: '#000', fontSize: '1.1rem', fontWeight: 600 }}>レッスンの特徴</Typography>
					</Box>
				</Box>
				<Box
					px={4}
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: 8,
						justifyContent: 'center',
						flexWrap: 'wrap',
						'@media (min-width: 600px)': {
							flexDirection: 'row',
							px: 6,
						},
					}}
				>
					{PointFeatures.map((feature, index) => (
						<div key={`${index}`}>
							<Typography
								sx={{
									borderRadius: '50%',
									backgroundColor: '#3C3C3C',
									width: '96px',
									height: '96px',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									color: '#fff',
								}}
								variant="h3"
								mx="auto"
								mb={4}
							>
								{index + 1}
							</Typography>
							<div>
								<Typography
									py={2}
									sx={{ backgroundColor: '#000', width: '100%', fontSize: '1.4rem', fontWeight: 600, color: '#fff' }}
									align="center"
								>
									{feature.label}
								</Typography>
								<Box p={4} sx={{ backgroundColor: '#fff' }}>
									<img
										src={feature.image.src}
										height="280"
										style={{
											objectFit: 'cover',
											aspectRatio: '1/1',
											width: '100%',
										}}
									/>
								</Box>
							</div>
						</div>
					))}
				</Box>
			</Box>
			{/* Course */}
			<Box
				sx={{
					backgroundColor: '#fff',
					width: '100%',
					'@media (min-width: 1280px)': {
						px: 8,
					},
				}}
				py={14}
				px={3}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						gap: 2,
					}}
					mb={14}
				>
					<School sx={{ fontSize: '50px', color: '#000' }} />
					<Box>
						<Typography
							variant="h2"
							sx={{
								color: '#000',
								fontWeight: 400,
							}}
						>
							COURSE
						</Typography>
						<Typography
							sx={{
								color: '#000',
								fontSize: '1.1rem',
								fontWeight: 600,
							}}
						>
							コースのご紹介
						</Typography>
					</Box>
				</Box>
				<Box
					sx={{
						border: '1px solid #000',
						maxWidth: '1440px',
						mx: 'auto',
						mb: 14,
					}}
				>
					<Typography
						variant="h3"
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							gap: 2,
							backgroundColor: '#000',
							color: '#fff',
						}}
						py={3}
					>
						<PlayArrowIcon sx={{ fontSize: '50px', color: '#4FA5ED', border: 'solid 4px #fff', borderRadius: 20 }} />
						動画講座
					</Typography>
					{/* Course */}
					<Box
						px={3}
						pt={10}
						pb={8}
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'stretch',
							gap: 6,
							'@media (min-width: 1280px)': {
								px: 6,
							},
							'@media (max-width: 800px)': {
								flexDirection: 'column',
							},
						}}
					>
						{/* Singing*/}
						<Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, maxWidth: '700px' }}>
							<Typography
								variant="h5"
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									gap: 2,
									backgroundColor: '#000',
									color: '#fff',
								}}
								p={2}
							>
								<PlayArrowIcon sx={{ fontSize: '2.5rem', color: '#4FA5ED', border: 'solid 3px #fff', borderRadius: 20 }} />
								歌ってみたミックスコース
								{/* 'パラミックスコース' */}
							</Typography>
							<Box
								py={4}
								px={2}
								sx={{
									color: '#000',
									border: '1px solid #000',
									flex: 1,
								}}
							>
								<img
									src={singingThumbnailMovie.src}
									style={{ objectFit: 'cover', width: '100%', aspectRatio: '16/9', objectPosition: 'center' }}
								/>

								<Typography
									variant="h5"
									sx={{
										backgroundColor: '#02225e',
										color: '#fff',
									}}
									py={3}
									px={3}
									mt={10}
									align="center"
								>
									「歌ってみた」に特化したミックス講座！
								</Typography>
								<Typography mx={4} mt={4} fontSize={20}>
									○Mix師/歌い手向け講座
								</Typography>
								<Box my={1} ml={5}>
									<Typography>「これからMixに挑戦してみようと思っている」</Typography>
									<Typography>「Mix師として活躍していきたい」</Typography>
								</Box>

								<Box
									sx={{
										display: 'flex',
										gap: 1.5,
										justifyContent: 'center',
										alignItems: 'center',
										flexWrap: 'wrap',
									}}
									mb={6}
								>
									<Button
										variant="outlined"
										startIcon={<img src={movieLogo.src} width={20} height={20} />}
										sx={{
											borderRadius: 0,
											color: '#000',
											borderColor: '#707070',
											'&:hover': {
												borderColor: '#707070',
											},
										}}
									>
										60分 × 全6回
									</Button>
									<Button
										variant="outlined"
										startIcon={<CustomCurrencyYen />}
										sx={{
											borderRadius: 0,
											color: '#000',
											borderColor: '#707070',
											'&:hover': {
												borderColor: '#707070',
											},
										}}
									>
										30,000円
									</Button>
								</Box>
								<Button
									variant="outlined"
									sx={{
										display: 'block',
										margin: 'auto',
										color: '#fff',
										borderRadius: '99px',
										bgcolor: '#429AEB',
										'&:hover': {
											bgcolor: '#429AEB',
										},
										py: 1,
										px: 5,
										mb: 3,
									}}
									onClick={() => router.push(`/movie-course/singing-course`)}
								>
									詳しくはこちら
								</Button>
							</Box>
						</Box>
						{/* Paramix*/}
						<Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, maxWidth: '700px' }}>
							<Typography
								variant="h5"
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									gap: 2,
									backgroundColor: '#000',
									color: '#fff',
								}}
								p={2}
							>
								<PlayArrowIcon sx={{ fontSize: '2.5rem', color: '#4FA5ED', border: 'solid 3px #fff', borderRadius: 20 }} />
								パラミックスコース
							</Typography>
							<Box
								py={4}
								px={2}
								sx={{
									color: '#000',
									border: '1px solid #000',
									flex: 1,
								}}
							>
								<img
									src={paramixThumbnailMovie.src}
									style={{ objectFit: 'cover', width: '100%', aspectRatio: '16/9', objectPosition: 'center' }}
								/>

								<Typography
									variant="h5"
									sx={{
										backgroundColor: '#02225e',
										color: '#fff',
									}}
									py={3}
									px={3}
									mt={10}
									align="center"
								>
									0から完成まで、全てを学ぶ！
								</Typography>
								<Typography mx={4} mt={4} fontSize={20}>
									○ボカロP/Mix師向け講座
								</Typography>
								<Box my={1} ml={5}>
									<Typography>「自分の楽曲のMixクオリティを上げたい」</Typography>
									<Typography>「パラミックスの依頼を受けていきたい」</Typography>
								</Box>

								<Box
									sx={{
										display: 'flex',
										gap: 1.5,
										justifyContent: 'center',
										alignItems: 'center',
										flexWrap: 'wrap',
									}}
									mb={6}
								>
									<Button
										variant="outlined"
										startIcon={<img src={movieLogo.src} width={20} height={20} />}
										sx={{
											borderRadius: 0,
											color: '#000',
											borderColor: '#707070',
											'&:hover': {
												borderColor: '#707070',
											},
										}}
									>
										60分 × 全8回
									</Button>
									<Button
										variant="outlined"
										startIcon={<CustomCurrencyYen />}
										sx={{
											borderRadius: 0,
											color: '#000',
											borderColor: '#707070',
											'&:hover': {
												borderColor: '#707070',
											},
										}}
									>
										50,000円
									</Button>
								</Box>
								<Button
									variant="outlined"
									sx={{
										display: 'block',
										margin: 'auto',
										color: '#fff',
										borderRadius: '99px',
										bgcolor: '#429AEB',
										'&:hover': {
											bgcolor: '#429AEB',
										},
										py: 1,
										px: 5,
										mb: 3,
									}}
									onClick={() => router.push(`/movie-course/paramix-course`)}
								>
									詳しくはこちら
								</Button>
							</Box>
						</Box>
					</Box>
				</Box>
				{/* Lesson 1 on 1 */}
				<Box sx={{ maxWidth: '1440px', mx: 'auto' }}>
					<Typography
						variant="h3"
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							gap: 2,
							backgroundColor: '#000',
							color: '#fff',
						}}
						p={3}
					>
						<StarRounded sx={{ fontSize: '50px', color: '#fff', border: 'solid 3px #fff', borderRadius: 20 }} />
						1on1レッスン（オプション）
					</Typography>
					<Box
						p={3}
						sx={{
							color: '#000',
							border: '1px solid #000',
							'@media (min-width: 1280px)': {
								p: 8,
							},
						}}
					>
						<img
							src={lesson1on1Thumbnail.src}
							style={{ objectFit: 'cover', width: '100%', aspectRatio: '16/9', objectPosition: 'center' }}
						/>
						<Typography
							variant="h5"
							sx={{
								backgroundColor: '#02225e',
								color: '#fff',
							}}
							p={3}
							mt={10}
							align="center"
						>
							希望者は、オンラインでさぶろうと1対1でのプライベートレッスン！
						</Typography>
						<Typography
							mx="auto"
							my={4}
							sx={{
								fontSize: '1.2rem',
								'@media (min-width: 1280px)': {
									width: 'max-content',
								},
							}}
						>
							Zoomを用いたオンラインレッスンでさぶろうと共にミックスを1曲完成させていきます。
							<p style={{ marginTop: '10px', marginBottom: 0 }}>
								動画の内容を更にもう一段階深めながら、実際の音源ではどう応用を効かせていくかをサポート。
							</p>
							<p style={{ margin: 0 }}>
								基礎からゆっくりと生徒様のペースに合わせてレッスンを進める初心者コースもご用意しています。
							</p>
							<p style={{ color: '#FC1E1E', margin: 0 }}>※1on1レッスンは、「動画講座」を申し込まれた方のみが受講可能です。</p>
						</Typography>
						<Box
							sx={{
								display: 'flex',
								gap: 3,
								justifyContent: 'center',
								alignItems: 'center',
								flexWrap: 'wrap',
							}}
						>
							<Box
								sx={{
									'@media (min-width: 768px)': {
										minWidth: '300px',
									},
								}}
								mb={6}
							>
								<Typography
									sx={{
										backgroundColor: '#000',
										color: '#fff',
									}}
									py={3}
									px={3}
									align="center"
								>
									1on1レッスン
								</Typography>
								<Box
									py={4}
									px={3}
									sx={{
										color: '#000',
										border: '1px solid #000',
										'@media (min-width: 768px)': {
											px: 6,
										},
									}}
								>
									<Box
										sx={{
											display: 'flex',
											gap: 2,
											justifyContent: 'center',
											alignItems: 'center',
											flexWrap: 'wrap',
										}}
										mb={4}
									>
										<Button
											variant="outlined"
											startIcon={<img src={instructorIcon.src} style={{ width: '28px' }} />}
											sx={{
												borderRadius: 0,
												color: '#000',
												fontSize: '1.1rem',
												borderColor: '#707070',
												'&:hover': {
													borderColor: '#707070',
												},
											}}
										>
											週1回/60分
										</Button>
										<Button
											variant="outlined"
											startIcon={<CustomCurrencyYen sx={{ fontSize: '36px' }} />}
											sx={{
												borderRadius: 0,
												color: '#000',
												fontSize: '1.1rem',
												borderColor: '#707070',
												'&:hover': {
													borderColor: '#707070',
												},
											}}
										>
											月額50,000円
										</Button>
									</Box>
									<Button
										variant="contained"
										sx={{
											display: 'block',
											margin: 'auto',
											color: '#fff',
											borderRadius: '99px',
											bgcolor: '#429AEB',
											'&:hover': {
												bgcolor: '#429AEB',
											},
										}}
										onClick={() => router.push(`lesson1on1`)}
									>
										詳しくはこちら
									</Button>
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
			{/* Voice */}
			{/* <Box
				sx={{
					backgroundColor: '#fff',
					width: '100%',
					'@media (min-width: 768px)': {
						px: 8,
					},
				}}
				py={10}
				px={3}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						gap: 2,
					}}
					mb={14}
				>
					<img src={MicrophoneIcon.src} alt="voice" height="40" style={{ marginTop: '8px' }} />
					<Box>
						<Typography
							variant="h2"
							sx={{
								color: '#000',
								fontWeight: 400,
							}}
						>
							VOICE
						</Typography>
						<Typography sx={{ color: '#000', fontSize: '1.1rem', fontWeight: 600 }}>卒業生の実績紹介</Typography>
					</Box>
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: 4,
						maxWidth: '1440px',
						color: '#000',
						margin: '0 auto',
						'@media (min-width: 1024px)': {
							flexDirection: 'row',
						},
					}}
				>
					<Box sx={{ flex: 1 }}>
						<img
							src={voiceAuthorRob.src}
							alt={'voiceAuthorRob'}
							style={{ width: '100%', objectFit: 'cover', aspectRatio: '16/9' }}
						/>
						<Typography variant="h3" align="center" my={2} color="#12225E">
							Rob
						</Typography>
						<Typography>
							こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにち
						</Typography>
					</Box>
					<Box sx={{ flex: 1 }}>
						<img
							src={voiceAuthorDom.src}
							alt={'voiceAuthorDom'}
							style={{ width: '100%', objectFit: 'cover', aspectRatio: '16/9' }}
						/>
						<Typography variant="h3" align="center" my={2} color="#12225E">
							Dom
						</Typography>
						<Typography>
							こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにち
						</Typography>
					</Box>
					<Box sx={{ flex: 1 }}>
						<img
							src={voiceAuthorJas.src}
							alt={'voiceAuthorJas'}
							style={{ width: '100%', objectFit: 'cover', aspectRatio: '16/9' }}
						/>
						<Typography variant="h3" align="center" my={2} color="#12225E">
							Jasmine
						</Typography>
						<Typography>
							こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにち
						</Typography>
					</Box>
				</Box>
			</Box> */}
		</>
	);
};

MockCourses.getLayout = (page) => <HeaderLayout>{page}</HeaderLayout>;

export default MockCourses;
