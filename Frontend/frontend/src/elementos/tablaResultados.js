import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import TableContainer from '@mui/material/TableContainer';

export const StyledContainer = styled('div')({
  height: '90vh',
  width: '100vh',
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '2%',
});

export const StyledHeader = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
  position: 'relative',
  paddingLeft: '8px',
});

export const StyledHeading = styled('h2')({
  margin: '0 auto',
});

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  padding: '8px',
  position: 'absolute',
  left: -230,
  width: '35px',
  height: '35px',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export const StyledTableContainer = styled(TableContainer)({
  flexGrow: 1,
  overflow: 'auto',
});

export const StyledTableCell = styled(TableCell)(({ theme, width }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      width: width,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      width: width, 
    },
  }));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));