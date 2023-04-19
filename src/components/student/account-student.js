import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { Avatar, Box, Divider, ListItemIcon, ListItemText, MenuItem, Popover, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { Cog as CogIcon } from '../../icons/cog';
import { UserCircle as UserCircleIcon } from '../../icons/user-circle';
import { SwitchHorizontalOutlined as SwitchHorizontalOutlinedIcon } from '../../icons/switch-horizontal-outlined';
import { useEffect, useState } from 'react';
import { green } from '@mui/material/colors';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const AccountStudent = (props) => {
	const { anchorEl, onClose, open, user, setOpenPopover,  ...other } = props;
	const router = useRouter();
	const handleLogout = async () => {
		try {
			onClose && onClose();
			localStorage.removeItem("user");
			toast.success('ログアウト成功！');
			router.push('/login').catch(console.error);
		} catch (err) {
			console.error(err);
			toast.error('エラーが発生しました。');
		}
	};

	return (
		<Popover
			anchorEl={anchorEl}
			anchorOrigin={{
				horizontal: 'center',
				vertical: 'bottom',
			}}
			keepMounted
			onClose={onClose}
			open={!!open}
			PaperProps={{ sx: { width: 300 } }}
			transitionDuration={0}
			{...other}
		>
			<Box
				sx={{
					alignItems: 'center',
					p: 2,
					display: 'flex',
				}}
			>
				<Avatar
					src={''}
					sx={{
						height: 40,
						width: 40,
					}}
				>
					{/* {getInitials(user.group.slice(0, -1))} */}
					{/* {user?.name} */}
				</Avatar>
				<Box
					sx={{
						ml: 1,
					}}
				>
					<Typography variant="body1">{user?.name || user?.email}</Typography>
					<Typography color="textSecondary" variant="body2">
						admin
					</Typography>
				</Box>
			</Box>
			<Divider />
			<Box sx={{ my: 1 }}>
				<MenuItem onClick={handleLogout}>
					<ListItemIcon>
						<LogoutIcon fontSize="small" />
					</ListItemIcon>
					<ListItemText
						primary={
							<Typography sx={{ marginLeft: 2 }} variant="body1">
								ログアウト
							</Typography>
						}
					/>
				</MenuItem>
			</Box>
		</Popover>
	);
};

AccountStudent.propTypes = {
	anchorEl: PropTypes.any,
	onClose: PropTypes.func,
	open: PropTypes.bool,
};
