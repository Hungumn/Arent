import Head from 'next/head';
import React, { useEffect } from 'react';
import { Box, Container, Grid, Typography, Button, Paper } from '@mui/material';
import { HeaderLayout } from 'components/student/header-layout';
import { FooterLayout } from 'components/student/footer-layout';
import { useRouter } from 'next/router';
import { AmplifyLoginStudent } from 'components/student/amplify-login-student';

const LoginStudent = () => {
	const router = useRouter();

	return (
		<div>
			<Head>
				<title>ログイン</title>
			</Head>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					pt: 4,
					bgcolor: '#fff',
					color: '#333',
				}}
			>
				<Container
					maxWidth="xl"
					style={{
						padding: 0,
					}}
				>
					<Grid
						py={10}
						px={2}
						sx={{
							'@media (min-width: 768px)': {
								px: 10,
							},
						}}
						container
						alignItems="center"
						justifyContent="center"
						direction="column"
					>
						<Grid xs={15} md={6}>
							<Typography
								variant="h6"
								align="center"
								p={2}
								sx={{
									color: '#fff',
									backgroundColor: 'black',
								}}
							>
								会員の方
							</Typography>
							<Typography
								align="center"
								p={3}
								sx={{
									fontSize: '1.2rem',
									fontWeight: 600,
								}}
							>
								メールアドレスとパスワードを入力してログインしてください。
							</Typography>
							<AmplifyLoginStudent />
						</Grid>
					</Grid>
				</Container>
			</Box>
			<FooterLayout />
		</div>
	);
};
LoginStudent.getLayout = (page) => <HeaderLayout>{page}</HeaderLayout>;
export default LoginStudent;
