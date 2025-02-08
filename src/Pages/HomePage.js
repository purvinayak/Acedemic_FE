
import * as React from 'react';
import { Container, Typography, Button, Grid, Box, Card, CardContent, Modal } from '@mui/material';
import { styled } from '@mui/system';
// import '../Styles/HomePage.css';


const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: `url('https://images.pexels.com/photos/733852/pexels-photo-733852.jpeg')`,
  // backgroundImage: `url('https://media.istockphoto.com/id/1088376416/photo/erp-system-enterprise-resource-planning-on-blurred-background-business-automation-and.jpg?s=2048x2048&w=is&k=20&c=qCtYisLfpSwEMbt1cPwk4OZQeiKUUL4TqKKLBjJCBkc=')`,  // Change this to your actual image path
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '60vh',
  display: 'flex',
  
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  color: '#fff',
}));

const HomePage = () => {
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <div>
      <div className="home-hero">
       
      </div>

      <HeroSection>
        <Container>
          <h3 style={{ textAlign: 'center', margin: '0 auto', width: '120%', color: "black", fontFamily: "cursive", marginTop: "30px" }}>
            Academia ERP is a complete solution designed to streamline the management of educational institutions.
          </h3>
          <h1 style={{ textAlign: 'center', color: "black", fontFamily: "cursive", marginTop: "10px" }}>Welcome to Academia ERP</h1>
        
          <Button variant="contained" color="primary" size="large" sx={{ mt: 10 }}>
            Get Started
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            sx={{ mt: 10, ml: 2 }}
            onClick={handleModalOpen}
          >
            Learn More
          </Button>
        </Container>
      </HeroSection>

      {/* Modal for Learn More */}
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="learn-more-title"
        aria-describedby="learn-more-description"
      >
        <Box sx={{ padding: 4, backgroundColor: 'white', margin: 'auto', marginTop: '10%', width: '80%', borderRadius: '8px' }}>

          <Typography id="learn-more-title" variant="h4" gutterBottom>
            Learn More About Our Features
          </Typography>
          <Typography id="learn-more-description">


            <h5> • Comprehensive Solution: Our platform integrates all necessary features for efficient management of educational institutions, ensuring seamless operation across various functionalities.</h5><br></br>
            <h5> • User-Friendly Interface: Designed with users in mind, our interface provides intuitive navigation, making it easy for administrators, teachers, and students to manage their tasks effectively.</h5><br></br>
            <h5> • Secure & Scalable: With robust security measures and scalable solutions, our platform can adapt to the growing needs of your institution while keeping data safe</h5>


          </Typography>
          <Button onClick={handleModalClose} variant="contained" color="primary" sx={{ mt: 3 }}>
            Close
          </Button>
        </Box>
      </Modal>

      {/* Features Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Why Choose Us?
        </Typography>
        <Grid container spacing={4}>
          {[
            { title: 'Efficient Inquiry Management', description: 'It refers to the streamlined process of handling and responding to student inquiries in a timely and organized manner' },
            { title: 'Manage Students and Batches', description: '"Efficiently manage student enrollment and batch Managenment to ensure a structured learning environment,.' },
            { title: 'Comprehensive Fee Management', description: 'Easily manage student fees and track outstanding payments in real-time.' }
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" style={{ margin: "2px", fontStretch: "expanded" }}><b>{feature.title}</b></Typography>
                  <Typography style={{ margin: "2px" }}>{feature.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
// import * as React from 'react';
// import { Container, Typography, Button, Grid, Box, Card, CardContent, Modal } from '@mui/material';
// import { styled } from '@mui/system';

// const HeroSection = styled(Box)(({ theme }) => ({
//   backgroundImage: `url('https://images.pexels.com/photos/733852/pexels-photo-733852.jpeg')`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   height: '60vh',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   textAlign: 'center',
//   color: '#fff',
// }));

// const HomePage = () => {
//   const [modalOpen, setModalOpen] = React.useState(false);

//   const handleModalOpen = () => setModalOpen(true);
//   const handleModalClose = () => setModalOpen(false);

//   return (
//     <div>
//       <HeroSection>
//         <Container>
//           <h3 style={{ textAlign: 'center', margin: '0 auto', width: '120%', color: "black", fontFamily: "cursive", marginTop: "30px" }}>
//             Academia ERP is a complete solution designed to streamline the management of educational institutions.
//           </h3>
//           <h1 style={{ textAlign: 'center', color: "black", fontFamily: "cursive", marginTop: "10px" }}>Welcome to Academia ERP</h1>
        
//           <Button variant="contained" color="primary" size="large" sx={{ mt: 10 }}>
//             Get Started
//           </Button>
//           <Button
//             variant="outlined"
//             color="secondary"
//             size="large"
//             sx={{ mt: 10, ml: 2 }}
//             onClick={handleModalOpen}
//           >
//             Learn More
//           </Button>
//         </Container>
//       </HeroSection>

//       {/* Modal for Learn More */}
//       <Modal
//         open={modalOpen}
//         onClose={handleModalClose}
//         aria-labelledby="learn-more-title"
//         aria-describedby="learn-more-description"
//       >
//         <Box sx={{ padding: 4, backgroundColor: 'white', margin: 'auto', marginTop: '10%', width: '80%', borderRadius: '8px' }}>
//           <Typography id="learn-more-title" variant="h4" gutterBottom>
//             Learn More About Our Features
//           </Typography>
//           <Typography id="learn-more-description">
//             <h5>• Comprehensive Solution: Our platform integrates all necessary features for efficient management of educational institutions, ensuring seamless operation across various functionalities.</h5><br />
//             <h5>• User-Friendly Interface: Designed with users in mind, our interface provides intuitive navigation, making it easy for administrators, teachers, and students to manage their tasks effectively.</h5><br />
//             <h5>• Secure & Scalable: With robust security measures and scalable solutions, our platform can adapt to the growing needs of your institution while keeping data safe</h5>
//           </Typography>
//           <Button onClick={handleModalClose} variant="contained" color="primary" sx={{ mt: 3 }}>
//             Close
//           </Button>
//         </Box>
//       </Modal>

//       {/* Features Section */}
//       <Container sx={{ py: 8 }}>
//         <Typography variant="h4" align="center" gutterBottom>
//           Why Choose Us?
//         </Typography>
//         <Grid container spacing={4}>
//           {[
//             { title: 'Efficient Inquiry Management', description: 'Manage your courses seamlessly.' },
//             { title: 'Manage Students and Batches', description: 'Efficiently manage student enrollment and batch management to ensure a structured learning environment.' },
//             { title: 'Comprehensive Fee Management', description: 'Easily manage student fees and track outstanding payments in real-time.' }
//           ].map((feature, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
//                 <CardContent sx={{ flexGrow: 1 }}>
//                   <Typography variant="h6" style={{ margin: "2px", fontStretch: "expanded" }}><b>{feature.title}</b></Typography>
//                   <Typography style={{ margin: "2px" }}>{feature.description}</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </div>
//   );
// };

// export default HomePage;
