import { useState } from 'react';
import { Box, Button, CircularProgress, FormHelperText, Link, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { Formik } from 'formik';
import toast from 'react-hot-toast';
import _debounce from 'lodash/debounce';
import { withStyles } from '@mui/styles';
import { REQUIRE, dataTest } from 'utils/global-data';

const CssTextField = withStyles({
	root: {
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: '#acacac',
				borderRadius: 0,
			},
			'&:hover fieldset': {
				borderColor: '#acacac',
			},
			'&.Mui-focused fieldset': {
				border: '1px solid #acacac',
			},
		},
	},
})(TextField);

export const AmplifyLoginStudent = (props) => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	return (
		<Box px={3}>
			<Formik
				enableReinitialize={true}
				initialValues={{
					email: '',
					password: '',
				}}
				validationSchema={Yup.object({
					email: Yup.string().email(REQUIRE.valid_email).max(255).required(REQUIRE.email),
					password: Yup.string().required(REQUIRE.password).min(8, REQUIRE.password_min),
				})}
				onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
					try {
						console.log('values', values);
						if (values.email === dataTest.email && values.password === dataTest.password) {
							toast.success('ログイン成功');
							const email = values.email;
							const password = values.password;
							const user = { email, password };
							localStorage.setItem('user', JSON.stringify(user));
							router.push('/')
						} else {
							console.log('failed');
							toast.error('このアカウントは認証されていません。もう一度確認してください。');
						}
					} catch (err) {
						console.log(err);
					}
				}}
			>
				{({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
					<form noValidate onSubmit={handleSubmit} {...props}>
						<Typography component="label">メールアドレス</Typography>
						<CssTextField
							inputProps={{ style: { color: '#000', borderRadius: 0 } }}
							autoFocus
							error={Boolean(touched.email && errors.email)}
							fullWidth
							helperText={touched.email && errors.email}
							margin="normal"
							name="email"
							onBlur={handleBlur}
							onChange={handleChange}
							type="email"
							value={values.email}
						/>
						<Typography component="label">パスワード</Typography>
						<CssTextField
							inputProps={{ style: { color: '#000', borderRadius: 0 } }}
							error={Boolean(touched.password && errors.password)}
							fullWidth
							helperText={touched.password && errors.password}
							margin="normal"
							name="password"
							onBlur={handleBlur}
							onChange={handleChange}
							type="password"
							value={values.password}
						/>
						{errors.submit && (
							<Box sx={{ mt: 3 }}>
								<FormHelperText error>{errors.submit}</FormHelperText>
							</Box>
						)}
						<Box sx={{ mt: 2 }} textAlign="center">
							<Button
								disabled={isSubmitting}
								sx={{
									color: '#fff',
									borderRadius: '99px',
									bgcolor: '#429AEB',
									'&:hover': {
										bgcolor: '#429AEB',
									},
									width: '200px',
								}}
								type="submit"
								variant="contained"
							>
								ログイン
							</Button>
						</Box>
						{isLoading && (
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'center',
									mt: 3,
								}}
							>
								<CircularProgress />
							</Box>
						)}
					</form>
				)}
			</Formik>
		</Box>
	);
};
