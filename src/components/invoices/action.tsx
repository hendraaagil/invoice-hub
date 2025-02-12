'use client'

import { useState } from 'react'
import {
  Backdrop,
  Box,
  Button,
  Fade,
  Modal,
  ModalProps,
  Popover,
  PopoverProps,
  Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'

import { Invoice } from '@/lib/types/invoice'
import { useInvoiceStore } from '@/stores/invoice'

const BackdropBlur = styled(Backdrop)(() => ({
  backdropFilter: 'blur(4px)',
}))

function ModalDelete({
  open,
  onClose,
  invoice,
}: {
  onClose: () => void
  invoice: Invoice
} & Omit<ModalProps, 'children'>) {
  const deleteInvoice = useInvoiceStore((state) => state.deleteInvoice)

  return (
    <Modal
      aria-labelledby="modal-delete-title"
      aria-describedby="modal-delete-description"
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: BackdropBlur }}
      slotProps={{ backdrop: { timeout: 500 } }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography id="modal-delete-title" variant="h6" component="h2">
            Are you sure?
          </Typography>
          <Typography id="modal-delete-description" sx={{ mt: 2 }}>
            This action cannot be undone
          </Typography>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="outlined" color="primary" onClick={onClose}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="error"
              sx={{ ml: 2 }}
              onClick={() => {
                onClose()
                deleteInvoice(invoice.id)
              }}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  )
}

export function Action({
  invoice,
  ...props
}: {
  invoice: Invoice
} & PopoverProps) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    props.onClose?.({}, 'backdropClick')
    setOpen(false)
  }

  return (
    <>
      <ModalDelete open={open} onClose={handleClose} invoice={invoice} />
      <Popover
        {...props}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Box p={1.5} sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Button color="primary" variant="contained">
            Edit
          </Button>
          <Button color="error" variant="outlined" onClick={handleOpen}>
            Delete
          </Button>
        </Box>
      </Popover>
    </>
  )
}
