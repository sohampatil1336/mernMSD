import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Divider,
} from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CloseIcon from '@mui/icons-material/Close';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { FacultyMember } from '../../types';
import { motion } from 'framer-motion';

interface FacultyCardProps {
  faculty: FacultyMember;
}

export const FacultyCard: React.FC<FacultyCardProps> = ({ faculty }) => {
  const [openModal, setOpenModal] = useState(false);

  const getDesignationBadgeColor = (desig: string) => {
    if (desig.includes('HOD') || desig.includes('Head')) return '#800020';
    if (desig.includes('Professor') && !desig.includes('Assistant') && !desig.includes('Associate')) return '#0b2850';
    if (desig.includes('Associate')) return '#1565c0';
    return '#455a64';
  };

  return (
    <>
      <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }} style={{ height: '100%' }}>
        <Card
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              p: 2.5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              backgroundColor: (theme) =>
                theme.palette.mode === 'light' ? 'rgba(11, 40, 80, 0.02)' : 'rgba(255, 255, 255, 0.02)',
              borderBottom: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Avatar
              src={faculty.photoUrl}
              alt={faculty.name}
              sx={{
                width: 110,
                height: 110,
                mb: 2,
                border: '3px solid',
                borderColor: getDesignationBadgeColor(faculty.designation),
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                bgcolor: 'primary.main',
                fontSize: '2.2rem',
              }}
            >
              {faculty.name.split(' ').map((n) => n[0]).join('').substring(0, 2)}
            </Avatar>
            <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary', mb: 0.5 }}>
              {faculty.name}
            </Typography>
            <Chip
              label={faculty.designation}
              size="small"
              sx={{
                backgroundColor: getDesignationBadgeColor(faculty.designation),
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '0.72rem',
                mb: 1,
              }}
            />
          </Box>

          <CardContent sx={{ flexGrow: 1, p: 2.5, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
              <SchoolOutlinedIcon sx={{ fontSize: 18, color: 'primary.main', mt: 0.3 }} />
              <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                {faculty.qualification}
              </Typography>
            </Box>

            {faculty.email && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailOutlinedIcon sx={{ fontSize: 18, color: 'secondary.main' }} />
                <Typography
                  variant="caption"
                  component="a"
                  href={`mailto:${faculty.email}`}
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline', color: 'primary.main' },
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {faculty.email}
                </Typography>
              </Box>
            )}

            {faculty.specialization && faculty.specialization.length > 0 && (
              <Box sx={{ mt: 'auto', pt: 1 }}>
                <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', display: 'block', mb: 0.5 }}>
                  Specialization:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {faculty.specialization.slice(0, 3).map((spec, idx) => (
                    <Chip
                      key={idx}
                      label={spec}
                      size="small"
                      variant="outlined"
                      sx={{ fontSize: '0.7rem', height: 22 }}
                    />
                  ))}
                  {faculty.specialization.length > 3 && (
                    <Chip
                      label={`+${faculty.specialization.length - 3} more`}
                      size="small"
                      sx={{ fontSize: '0.7rem', height: 22 }}
                    />
                  )}
                </Box>
              </Box>
            )}

            <Button
              variant="outlined"
              size="small"
              fullWidth
              onClick={() => setOpenModal(true)}
              sx={{ mt: 1.5, borderColor: 'primary.main', color: 'primary.main' }}
            >
              View Full Profile
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Detail Modal */}
      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
        maxWidth="sm"
        fullWidth
        aria-labelledby={`faculty-dialog-title-${faculty.id}`}
      >
        <DialogTitle
          id={`faculty-dialog-title-${faculty.id}`}
          sx={{
            m: 0,
            p: 2,
            backgroundColor: 'primary.main',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PersonOutlineIcon />
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#ffffff' }}>
              Faculty Profile
            </Typography>
          </Box>
          <IconButton
            aria-label="close"
            onClick={() => setOpenModal(false)}
            sx={{ color: '#ffffff' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3, alignItems: { xs: 'center', sm: 'flex-start' }, mb: 3 }}>
            <Avatar
              src={faculty.photoUrl}
              alt={faculty.name}
              sx={{
                width: 120,
                height: 120,
                border: '3px solid',
                borderColor: getDesignationBadgeColor(faculty.designation),
              }}
            >
              {faculty.name.split(' ').map((n) => n[0]).join('').substring(0, 2)}
            </Avatar>
            <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
                {faculty.name}
              </Typography>
              <Chip
                label={faculty.designation}
                size="small"
                sx={{
                  backgroundColor: getDesignationBadgeColor(faculty.designation),
                  color: '#ffffff',
                  fontWeight: 600,
                  mb: 1.5,
                }}
              />
              <Typography variant="body2" sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center', gap: 1 }}>
                <SchoolOutlinedIcon sx={{ fontSize: 18 }} /> {faculty.qualification}
              </Typography>
              {faculty.experience && (
                <Typography variant="body2" sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                  <WorkOutlineIcon sx={{ fontSize: 18 }} /> {faculty.experience}
                </Typography>
              )}
              {faculty.email && (
                <Typography variant="body2" sx={{ color: 'primary.main', display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                  <EmailOutlinedIcon sx={{ fontSize: 18 }} /> {faculty.email}
                </Typography>
              )}
            </Box>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
            Research Interests & Areas of Expertise:
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mb: 3 }}>
            {faculty.specialization.map((spec, i) => (
              <Chip key={i} label={spec} size="small" sx={{ bgcolor: 'action.hover' }} />
            ))}
          </Box>

          {faculty.bio && (
            <>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
                Academic Biography:
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                {faculty.bio}
              </Typography>
            </>
          )}
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setOpenModal(false)} variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
