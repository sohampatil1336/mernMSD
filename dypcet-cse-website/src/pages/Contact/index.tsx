import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Alert,
  Divider,
} from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import SendIcon from '@mui/icons-material/Send';
import SecurityIcon from '@mui/icons-material/Security';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Helmet } from 'react-helmet-async';

import { PageHeader } from '../../components/layout/PageHeader';
import { SectionContainer } from '../../components/common/SectionContainer';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Please enter a valid 10-digit phone number' }),
  subject: z.string().min(3, { message: 'Subject must be at least 3 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate submission delay
    await new Promise((res) => setTimeout(res, 600));
    console.log('Contact message submitted:', data);
    setSubmitted(true);
    reset();
  };

  return (
    <>
      <Helmet>
        <title>Contact Us & Campus Location | CSE Department | DYPCET</title>
        <meta
          name="description"
          content="Contact the Department of Computer Science & Engineering, D. Y. Patil College of Engineering and Technology, Kolhapur. Campus location, query form, and grievance contacts."
        />
      </Helmet>

      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with the department office, admission desk, training & placement cell, or faculty coordinators."
        badge="Reach Out"
      />

      <SectionContainer>
        <Grid container spacing={4}>
          {/* Left Column: Contact Details & Coordinators */}
          <Grid item xs={12} md={5}>
            <Card sx={{ p: 3, mb: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                Department Office
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                  <LocationOnOutlinedIcon sx={{ color: 'secondary.main', mt: 0.3 }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                      Campus Address
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                      Department of Computer Science & Engineering,
                      <br />
                      D. Y. Patil College of Engineering & Technology,
                      <br />
                      Kasaba Bawada, Kolhapur, Maharashtra – 416006, India.
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                  <PhoneInTalkOutlinedIcon sx={{ color: 'primary.main', mt: 0.3 }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                      Phone & Telephone
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      +91-231-2601431 / +91-91586-15999
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                  <EmailOutlinedIcon sx={{ color: 'secondary.main', mt: 0.3 }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                      Official Email
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      info.dypcet@dypgroup.edu.in
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                  <AccessTimeOutlinedIcon sx={{ color: 'warning.main', mt: 0.3 }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                      Department Office Hours
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Monday – Friday: 08:00 AM – 05:30 PM
                      <br />
                      Saturday: 09:00 AM – 01:00 PM
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Card>

            {/* Individual Coordinator Contacts */}
            <Card sx={{ p: 3, bgcolor: 'action.hover' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1.5 }}>
                Key In-Charge Contacts
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    Dr. Radhika J. Dhanal (Head of Department)
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Email: rjdhnal.dypcet@dypgroup.edu.in
                  </Typography>
                </Box>
                <Divider />
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    Department Training & Placement In-Charge
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Email: placements.dypcet@dypgroup.edu.in
                  </Typography>
                </Box>
                <Divider />
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    NBA & Accreditation Coordinator
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Email: nba.cse@dypgroup.edu.in
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>

          {/* Right Column: Contact & Feedback Form */}
          <Grid item xs={12} md={7}>
            <Card sx={{ p: { xs: 3, md: 4 } }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: 'primary.main' }}>
                Send an Enquiry or Message
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                Fill out the verified query form below for admission questions, academic guidance, or verification requests.
              </Typography>

              {submitted && (
                <Alert severity="success" sx={{ mb: 3 }} onClose={() => setSubmitted(false)}>
                  Your message has been successfully recorded. The department office will respond shortly.
                </Alert>
              )}

              <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Full Name *"
                      {...register('name')}
                      error={Boolean(errors.name)}
                      helperText={errors.name?.message}
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email Address *"
                      type="email"
                      {...register('email')}
                      error={Boolean(errors.email)}
                      helperText={errors.email?.message}
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone / Mobile Number *"
                      {...register('phone')}
                      error={Boolean(errors.phone)}
                      helperText={errors.phone?.message}
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Subject *"
                      {...register('subject')}
                      error={Boolean(errors.subject)}
                      helperText={errors.subject?.message}
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message Details *"
                      multiline
                      rows={4}
                      {...register('message')}
                      error={Boolean(errors.message)}
                      helperText={errors.message?.message}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={isSubmitting}
                      endIcon={<SendIcon />}
                      sx={{ py: 1.2, px: 4, bgcolor: 'primary.main' }}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Message'}
                    </Button>
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid', borderColor: 'divider', display: 'flex', alignItems: 'center', gap: 1 }}>
                <SecurityIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  Statutory Grievance Redressal & Anti-Ragging mechanisms are active as per UGC / AICTE directives.
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </SectionContainer>

      {/* Google Maps Embed */}
      <SectionContainer title="Campus Location Map" overline="Find Us" bgAlt>
        <Box
          sx={{
            width: '100%',
            height: 400,
            borderRadius: 2,
            overflow: 'hidden',
            border: '1px solid',
            borderColor: 'divider',
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
          }}
        >
          <iframe
            title="DYPCET Kolhapur Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.5724597510793!2d74.2216113!3d16.7234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1001a1e0b57e7%3A0xb3044a1e9cbbd84f!2sD.Y.%20Patil%20College%20of%20Engineering%20and%20Technology%2C%20Kolhapur!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>
      </SectionContainer>
    </>
  );
};
