import { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { HeaderNavbar } from './header-navbar';
import { Box } from '@mui/material';

const HeaderLayoutRoot = styled('div')(({ theme }) => ({
	display: 'flex',
	flex: '1 1 auto',
	width: '100%',
	paddingTop: 32,
}));

export const HeaderLayout = (props) => {
	const { children } = props;

	return (
		<>
			<HeaderLayoutRoot>
				<Box
					sx={{
						display: 'flex',
						flex: '1 1 auto',
						flexDirection: 'column',
						width: '100%',
					}}
				>
					{children}
				</Box>
			</HeaderLayoutRoot>
			<HeaderNavbar />
		</>
	);
};

HeaderLayout.propTypes = {
	children: PropTypes.node,
};
