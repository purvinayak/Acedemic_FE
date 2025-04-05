import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Typography, Card, CardContent, Box } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import PaymentIcon from '@mui/icons-material/Payment';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { label: 'Total Students', icon: <SchoolIcon fontSize="large" />, color: '#1976d2', path: '/Institute/StudentManagment' },
    { label: 'Total Batches', icon: <GroupsIcon fontSize="large" />, color: '#9c27b0', path: '/Institute/BatchManagement' },
    { label: 'Total Payments',  icon: <PaymentIcon fontSize="large" />, color: '#2e7d32', path: '/Institute/PaymentManagment' },
    { label: 'Total Courses',  icon: <MenuBookIcon fontSize="large" />, color: '#ff9800', path: '/Institute/CourseManagenment' },
    { label: 'Total Inquiries',   icon: <QuestionAnswerIcon fontSize="large" />, color: '#f44336', path: '/Institute/InquiryManagenment' },
  ];

  return (
    <Container maxWidth="lg" style={{ padding: '30px 20px' }}>
      <Typography variant="h4" gutterBottom>
        Institute Dashboard
      </Typography>
      <Grid container spacing={4}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              onClick={() => navigate(stat.path)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: 2,
                borderLeft: `5px solid ${stat.color}`,
                boxShadow: 3,
                cursor: 'pointer',
                transition: '0.3s',
                '&:hover': {
                  boxShadow: 6,
                  transform: 'scale(1.02)',
                },
              }}
            >
              <Box sx={{ marginRight: 2, color: stat.color }}>
                {stat.icon}
              </Box>
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="subtitle1" color="textSecondary">
                  {stat.label}
                </Typography>
                <Typography variant="h5" fontWeight="bold">
                  {stat.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Dashboard;