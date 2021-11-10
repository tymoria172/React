
import CloseIcon from '@material-ui/icons/Close';
import { Box, Button, createStyles, makeStyles, Modal, Theme} from '@material-ui/core';
import React from 'react';
import CadastroPost from '../cadastroposts/CadastroPost';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: '#1c2226',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
    }),
  );
  
  function ModalPostagem () {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const body = (
      <div style={modalStyle} className={classes.paper} color='#F2D541'>
        <Box display="flex" justifyContent="flex-end" className="cursor">
          <CloseIcon onClick={handleClose}/>
        
        </Box>
        
        <CadastroPost/>
        
      </div>
    );
  
    return (
      <div>
        <Button
          variant="contained"
          className="btnModal"
          onClick={handleOpen}>Nova Postagem</Button>
        <Modal
          
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
    );
  }
  export default ModalPostagem