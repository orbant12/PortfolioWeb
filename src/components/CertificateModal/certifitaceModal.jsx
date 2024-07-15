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
    className='flex justify-center items-center'
    >
    <div className='flex flex-col w-[80%] md:w-[50%] m-auto justify-center fixed items-center h-[100%]'>
         <div onClick={handleClose} className='absolute bottom-5 w-[100%] flex flex-col items-center justify-center left-0 border-red p-2 px-4 bg-black cursor-pointer hover:scale-90 active:scale-50' style={{borderRadius:10}} >
            <h2 className='text-lg' style={{color:"red"}}>Close</h2>
         </div>
        <img className='w-[80%] relative'  src={input} alt="" />
    </div>
        
   
    </Modal>
</div>
  );
}