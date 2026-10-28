import React from 'react';
import { Dialog, DialogContent, IconButton, Typography, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface ImageLightboxProps {
  open: boolean;
  imageUrl: string;
  title: string;
  onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  open,
  imageUrl,
  title,
  onClose,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          bgcolor: 'background.paper',
          overflow: 'hidden',
          borderRadius: 2,
        },
      }}
    >
      <Box
        sx={{
          p: 1.5,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
        <IconButton aria-label="close image" onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogContent sx={{ p: 0, textAlign: 'center', bgcolor: '#000000' }}>
        <img
          src={imageUrl}
          alt={title}
          style={{ maxWidth: '100%', maxHeight: '75vh', objectFit: 'contain', display: 'block', margin: '0 auto' }}
        />
      </DialogContent>
    </Dialog>
  );
};
