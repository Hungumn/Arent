import { makeStyles, styled, withStyles } from '@mui/styles';
import icon1 from 'assets/images/icon-01.png';
import bGIcon from 'assets/images/Bg-01.png';

const ImageOverlayBox = styled('div')(({ theme }) => ({
	position: 'relative',
}));

const useStyles = makeStyles({
	overlay: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		opacity: 0.5,
		zIndex: 1,
	},
});

export const ImageOverlay = () => {
	const classes = useStyles();
	return (
		<ImageOverlayBox>
			<img src={icon1.src} alt="Original image" />
			<div
				className={classes.overlay}
				style={{
					backgroundImage: `url(${bGIcon.src})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			></div>
		</ImageOverlayBox>
	);
};
