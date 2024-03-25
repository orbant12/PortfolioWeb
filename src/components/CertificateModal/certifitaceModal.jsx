import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';


export default function BasicModal({input}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
<div>
    <Button onClick={handleOpen}>Show Certificate</Button>
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
    <div style={{display:"flex",flexDirection:"column",width:"100%",alignItems:"center",marginTop:200}}>
        <img className='cert-image'  src={input} alt="" />
    </div>
        
   
    </Modal>
</div>
  );
}