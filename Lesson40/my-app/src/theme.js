import { createTheme } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';

export const theme = createTheme({
	palette: {
		primary: { main: blueGrey[500] },
	},
	spacing: 4,
});
