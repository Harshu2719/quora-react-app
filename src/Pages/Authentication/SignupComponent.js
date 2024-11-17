import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SignupFormComponent from './SignupFormComponent';
import './SignupComponent.css';
import { dark } from '@mui/material/styles/createPalette';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { useSelector } from 'react-redux';
import store from '../../ReduxStore/Store';



const SignupComponent = ()=> {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const themeinStore = useSelector(store => store.themes);
  const [selectedTheme, setSlectedTheme] = React.useState();

  React.useEffect(()=> {
    if(themeinStore.theme) {
      setSlectedTheme('dark');
    } else {
      setSlectedTheme('light')
    }
  }, [themeinStore.theme])
  
  const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
const theme = createTheme({
  palette: {
    mode: selectedTheme,
  },
});
  return (
    <div>
      <ThemeProvider theme={theme}>
      <button className='box1' onClick={handleOpen}>
        <div className='box2'>
          <div className='box3'>
            <div>
              Sign up with email
            </div>
          </div>
        </div>        
      </button>
      <Modal
        
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Sign up
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <SignupFormComponent handleClose={handleClose}/>
          </Typography>
        </Box>
      </Modal>
      </ThemeProvider>
    </div>
  );
}
export default SignupComponent;