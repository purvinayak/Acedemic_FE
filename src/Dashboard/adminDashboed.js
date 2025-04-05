import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from 'chart.js';
import { Line, Pie, Bar } from 'react-chartjs-2';
import axios from 'axios';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalInstitutes: 0,
    totalCourses: 0,
    activeStudents: 0,
  });

  const [monthlyData, setMonthlyData] = useState({
    labels: [],
    students: [],
    inquiries: [],
  });

  const [courseDistribution, setCourseDistribution] = useState({
    labels: [],
    data: [],
  });

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Fetch overall statistics
      const statsResponse = await axios.get('http://localhost:9000/admin/getStats');
      setStats(statsResponse.data);

      // Fetch monthly data
      const monthlyResponse = await axios.get('http://localhost:9000/admin/getMonthlyData');
      setMonthlyData(monthlyResponse.data);

      // Fetch course distribution
      const courseResponse = await axios.get('http://localhost:9000/admin/getCourseDistribution');
      setCourseDistribution(courseResponse.data);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Monthly Growth' },
    },
  };

  const lineChartData = {
    labels: monthlyData.labels,
    datasets: [
      {
        label: 'Students',
        data: monthlyData.students,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: 'Inquiries',
        data: monthlyData.inquiries,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
      },
    ],
  };

  const pieChartData = {
    labels: courseDistribution.labels,
    datasets: [
      {
        data: courseDistribution.data,
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
        ],
      },
    ],
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Statistics Cards */}
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Total Students
              </Typography>
              <Typography variant="h5">{stats.totalStudents}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Total Institutes
              </Typography>
              <Typography variant="h5">{stats.totalInstitutes}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Total Courses
              </Typography>
              <Typography variant="h5">{stats.totalCourses}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Active Students
              </Typography>
              <Typography variant="h5">{stats.activeStudents}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Charts */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <Line options={lineChartOptions} data={lineChartData} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Course Distribution
            </Typography>
            <Pie data={pieChartData} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminDashboard;