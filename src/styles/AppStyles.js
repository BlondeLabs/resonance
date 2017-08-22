/**
 * >>= Application Inline Styles =>
 * Ultimately, a js styles solution seems to provide the most freedom.
 * Composability without classes.
 */
import { duskGradient, white } from '../constants/Palette';

const material = {
  boxShadow: '0 2px 5px rgba(0,0,0,0.16), 0 2px 5px rgba(0,0,0,0.23)',
  borderRadius: '2px',
  borderColor: 'transparent'
};

const palette = {
  color: 'black',
  backgroundColor: 'white',
};

const typography = {
  fontFamily: 'futura-pt',
};

const horizonFlexContainer = {
  display: 'flex',
  padding: '16px',
};

const vertFlexContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20%',
};

const flexNode = {
  flex: '1',
};

/**
 * >- welcome ->
 *
 */
const WelcomeContainerStyles = {
  background: duskGradient,
  fontFamily: 'futura-pt',
  boxSizing: 'border-box',
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridTemplateRows: 'repeat(5, 1fr)',
  gridGap: '10px',
  gridAutoRows: 'minmax(100px, auto)',
  height: '100%'
};

const WelcomeTitleStyles = {
  color: 'white',
  cursor: 'pointer',
  fontSize: '10vmin',
  fontStyle: 'italic',
  textAlign: 'center',
  gridColumn: '2 / 5',
  gridRow: '3'
};

const WelcomeButtonStyles = {
  gridColumn: '3 / 4',
  gridRow: '4'
};

/* >- banner -> */
const BannerContainerStyles = Object.assign({}, material, palette, horizonFlexContainer);
const BannerItemStyles = Object.assign({}, flexNode);

/* >- app -> */
const AppStyles = {
  'BannerContainerStyles' : BannerContainerStyles,
  'BannerItemStyles' : BannerItemStyles,
  'WelcomeContainerStyles' : WelcomeContainerStyles,
  'WelcomeButtonStyles' : WelcomeButtonStyles,
  'WelcomeTitleStyles' : WelcomeTitleStyles
};

export default AppStyles;
