import { Box, Link, Typography } from '@mui/material';
import logoVertical from 'assets/images/CLB-logo-vertical.png';
import NextLink from 'next/link';
import { FooterLink } from 'utils/global-data';

export const FooterLayout = () => {
	return (
		<>
			<Box
				p={6}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					backgroundColor: '#414141',
					color: '#fff',
					height: 128,
				}}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						columnGap: 10,
						rowGap: 3,
						flexWrap: 'wrap',
					}}
				>
					{FooterLink.map((item, index) => (
						<NextLink href={'/'} passHref key={item.id}>
							<Link
								sx={{
									color: '#fff',
									fontSize: '11px',
									fontWeight: 300,
									'@media (max-width: 600px)': {
										mx: 1,
									},
								}}
								underline="none"
							>
								{item.title}
							</Link>
						</NextLink>
					))}
				</Box>
			</Box>
		</>
	);
};
