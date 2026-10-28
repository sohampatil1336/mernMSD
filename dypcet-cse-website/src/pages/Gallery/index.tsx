import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Button,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CollectionsIcon from '@mui/icons-material/Collections';
import { Helmet } from 'react-helmet-async';

import { galleryImagesData } from '../../data/gallery';
import { PageHeader } from '../../components/layout/PageHeader';
import { SectionContainer } from '../../components/common/SectionContainer';
import { ImageLightbox } from '../../components/common/ImageLightbox';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxState, setLightboxState] = useState<{ open: boolean; imageUrl: string; title: string }>({
    open: false,
    imageUrl: '',
    title: '',
  });

  const categories = ['All', 'Labs', 'Events', 'Campus', 'Fests', 'Achievements'];

  const filteredImages = selectedCategory === 'All'
    ? galleryImagesData
    : galleryImagesData.filter((img) => img.category === selectedCategory);

  const handleOpenLightbox = (imageUrl: string, title: string) => {
    setLightboxState({ open: true, imageUrl, title });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, open: false }));
  };

  return (
    <>
      <Helmet>
        <title>Photo & Event Gallery | CSE Department | DYPCET</title>
        <meta
          name="description"
          content="Explore photos of our high-tech laboratories, hackathons, annual tech fests, convocation ceremonies, and campus life at DYPCET CSE."
        />
      </Helmet>

      <PageHeader
        title="Department Photo & Media Gallery"
        subtitle="Capturing the vibrant academic environment, high-tech computing labs, tech symposiums, and student achievements."
        badge="Campus Visuals"
      />

      <SectionContainer>
        {/* Category Filters */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4, flexWrap: 'wrap', gap: 1 }}>
          {categories.map((cat) => (
            <Chip
              key={cat}
              label={cat}
              clickable
              onClick={() => setSelectedCategory(cat)}
              color={selectedCategory === cat ? 'primary' : 'default'}
              variant={selectedCategory === cat ? 'filled' : 'outlined'}
              sx={{ fontWeight: 600, px: 1.5, py: 0.5 }}
            />
          ))}
        </Box>

        {/* Gallery Grid */}
        <Grid container spacing={3}>
          {filteredImages.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card
                sx={{
                  height: '100%',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  position: 'relative',
                  '&:hover .media-overlay': {
                    opacity: 1,
                  },
                }}
                onClick={() => handleOpenLightbox(item.imageUrl, item.title)}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="240"
                    image={item.imageUrl}
                    alt={item.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <Box
                    className="media-overlay"
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      bgcolor: 'rgba(11, 40, 80, 0.7)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.25s ease',
                      color: '#ffffff',
                    }}
                  >
                    <Box sx={{ textAlign: 'center' }}>
                      <VisibilityIcon sx={{ fontSize: 36, mb: 0.5 }} />
                      <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                        Click to Enlarge
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <CardContent sx={{ p: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                      {item.title}
                    </Typography>
                    <Chip label={item.category} size="small" variant="outlined" sx={{ fontSize: '0.7rem' }} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </SectionContainer>

      {/* Lightbox Modal */}
      <ImageLightbox
        open={lightboxState.open}
        imageUrl={lightboxState.imageUrl}
        title={lightboxState.title}
        onClose={handleCloseLightbox}
      />
    </>
  );
};
