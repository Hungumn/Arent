import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Avatar, Box, Button, Divider, ListItemIcon, ListItemText, MenuItem, Popover, Typography } from '@mui/material';
import { X as XIcon } from '../../icons/x';
import { styled } from '@mui/styles';
import { AppBarData } from 'utils/global-data';

const AppBarBox = styled('div')(({ theme }) => ({
	height: 72,
	display: 'flex',
	alignItems: 'center',
	backgroundColor: '#777777',
	borderBottom: '2px solid rgba(46, 46, 46, 0.25)',
	cursor: 'pointer',
}));

export const AccountPopoverStudent = (props) => {
	const { anchorEl, onClose, open, user, isStudent, setOpenPopover, avatarURL, ...other } = props;
	console.log('props',props);

	return (
		<Popover
			anchorEl={anchorEl}
			anchorOrigin={{
				horizontal: 'right',
				vertical: 'top',
			}}
			keepMounted
			onClose={onClose}
			open={!!open}
			PaperProps={{ sx: { width: 300, borderRadius: 0, borderWidth: 0, backgroundColor: 'transparent', marginTop:'12px' } }}
			transitionDuration={0}
			{...other}
		>
			<Button
				onClick={onClose}
				sx={{
					height: '32px',
					width: '32px',
					position: 'relative',
					left: '268px',
					background: ' #2E2E2E',
					borderRadius: 0,
					color: '#FF963C',
					textAlign: 'center',
					paddingTop: '8px',
					minWidth: '32px',
					'&:hover': {
						backgroundColor: '#2E2E2E',
					},
				}}
			>
				<XIcon />
			</Button>
			{AppBarData.map((item, index) => (
				<AppBarBox key={item.id}>
					<Typography variant="body1" color="#FFFFFF" paddingLeft={2}>
						{item.title}
					</Typography>
				</AppBarBox>
			))}
		</Popover>
	);
};

AccountPopoverStudent.propTypes = {
	anchorEl: PropTypes.any,
	onClose: PropTypes.func,
	open: PropTypes.bool,
};
