import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import DevicesIcon from '@mui/icons-material/Devices';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { LabInfo } from '../../types';
import { motion } from 'framer-motion';

interface LabCardProps {
  lab: LabInfo;
}

export const LabCard: React.FC<LabCardProps> = ({ lab }) => {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} style={{ height: '100%' }}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        {lab.photoUrl ? (
          <CardMedia
            component="img"
            height="200"
            image={lab.photoUrl}
            alt={lab.name}
            sx={{ objectFit: 'cover' }}
          />
        ) : (
          <Box
            sx={{
              height: 180,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'primary.main',
              color: '#ffffff',
            }}
          >
            <DevicesIcon sx={{ fontSize: 64, opacity: 0.8 }} />
          </Box>
        )}
        <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
          <Typography variant="h5" component="h3" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
            {lab.name}
          </Typography>

          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
            {lab.capacity && (
              <Chip
                icon={<GroupOutlinedIcon sx={{ fontSize: '16px !important' }} />}
                label={`Capacity: ${lab.capacity} Students`}
                size="small"
                variant="outlined"
              />
            )}
            {lab.area && (
              <Chip
                label={`Area: ${lab.area}`}
                size="small"
                variant="outlined"
              />
            )}
          </Box>

          {lab.description && (
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.6 }}>
              {lab.description}
            </Typography>
          )}

          {lab.inchargeFaculty && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5, p: 1, bgcolor: 'action.hover', borderRadius: 1 }}>
              <PersonOutlineIcon sx={{ fontSize: 18, color: 'secondary.main' }} />
              <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.primary' }}>
                In-Charge: {lab.inchargeFaculty}
              </Typography>
            </Box>
          )}

          {lab.majorEquipment && lab.majorEquipment.length > 0 && (
            <Box sx={{ mt: 1 }}>
              <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', display: 'block', mb: 0.5 }}>
                Key Hardware & Equipment:
              </Typography>
              <List dense sx={{ p: 0 }}>
                {lab.majorEquipment.slice(0, 3).map((eq, i) => (
                  <ListItem key={i} sx={{ px: 0, py: 0.2 }}>
                    <ListItemIcon sx={{ minWidth: 20 }}>
                      <CheckCircleOutlineIcon sx={{ fontSize: 14, color: 'success.main' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={eq}
                      primaryTypographyProps={{ variant: 'caption', color: 'text.secondary' }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};
