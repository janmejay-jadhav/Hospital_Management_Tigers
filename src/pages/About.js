    import * as React from 'react';
    import Card from '@mui/material/Card';
    import CardActions from '@mui/material/CardActions';
    import CardContent from '@mui/material/CardContent';
    import CardMedia from '@mui/material/CardMedia';
    import Button from '@mui/material/Button';
    import Typography from '@mui/material/Typography';
    import { Box } from '@mui/system'
    import { Container, Grid } from '@mui/material';
    import Rating from '@mui/material/Rating';
    import './About.css'

  


    function About() {



        const [value, setValue] = React.useState(5);
        return (
         <Box align='center' style={{marginTop:'2.3em'}} >
        <Box className='happy'>
    <div className='jss' sx={12} md={3}>
    <h1> ABOUT US</h1>
    <h2>Know more about us, We are more than a hospital</h2>

    </div>
    <Box sx={12} md={3} >
    <h4>Who We Are ....?</h4>
    <p> We are the team with an ambition to provide the people best and affordable treatment for everyone.<br/>
    So we are ready to help you out with our best possible way with the use of best Technology and best team of the Doctors.
    </p>
    <h4>Our Team and Specialists</h4>
    <p>Our Doctors make an important contribution to the management and leadership of health services and the delivery of healthcare across the India as part of a multidisciplinary team. All doctors have some responsibilities for using resources; many will also lead teams or be involved in supervising colleagues.</p>
    <p>Our Doctor are responsible for all sides of care of a patient. They diagnose, educate, and treat patients to ensure that they have the best possible care. A few of the main duties of a doctor are performing diagnostic tests, recommending specialists for patients, document patient's medical history, and educating patients. They also have to administer vaccines and other treatments. Some of the jobs titles that a doctor could grow into are head of research or hospital president.
    </p>
    </Box>
        
        <Grid container spacing={2} display="flex" justifyContent="center">

        <Grid item xs={12} md={3} >
        <Card sx={{ maxWidth: 280,height:"100%" }} className='wish'>
        <CardMedia
        />
        <CardContent>
        <img src='assets/dr1.png' alt='assets' className='im'></img>
        <Typography gutterBottom variant="h5" component="div">
            Dermatology
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Dr.Angel Cruz<br/>
        Education: M.D. in Dermatology <br/>
        Specialists for skin and hair treatments

    Rashes, Pimples, Acne, Hairfall, Dandruff  
        </Typography>
        </CardContent>
        <CardActions>
        <Box    sx={{
            '& > legend': { mt: 2 },
          }}
       >
       <Typography component="legend"></Typography>
      <Rating name="read-only" value={value} readOnly />
      </Box>
        <Button size="small">More Info</Button>
        </CardActions>
        
        
        </Card>
        </Grid>
        <Grid item xs={12} md={3}>
        <Card sx={{ maxWidth: 280,height:"100%" }} className='wish'>
        <CardMedia
        
        // sx={{ height: 140 }}
        title="Dr information"
        />
        <CardContent>
        <img src='assets/about-doctor-bg.jpg' alt='doctor' className='im'></img>
        <Typography gutterBottom variant="h5" component="div">
        General Physician
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Dr.Henry Watt<br/>
        Education: MBBS and MD in general medicine.  <br/>
        Managing acute medical conditions

    Typhoid, Abdominal Pain, Migraine, Infections
        </Typography>
        </CardContent>
        <CardActions>
        <Box    sx={{
            '& > legend': { mt: 2 },
          }}
       >
       <Typography component="legend"></Typography>
      <Rating name="read-only" value={value} readOnly />
      </Box><Button size="small">More Info</Button>
        </CardActions>
    </Card>
    </Grid>
    <Grid item xs={12} md={3}>
    <Card sx={{ maxWidth: 280, height:"100%" }} className='wish'>
    <CardMedia        title="Dr information"
    />
    <CardContent>
    <img src='assets/R.jpg' alt='assets' className='im'></img>
        
        <Typography gutterBottom variant="h5" component="div">
        Paediatrics
        </Typography>
        <Typography variant="body2" color="text.secondary">

        Dr.Helen Perry<br/>
        Specialists to care and treat children

        Constipation, Puberty, Nutrition, Autism</Typography>
    </CardContent>
    
    <CardActions>
    <Box    sx={{
        '& > legend': { mt: 2 },
      }}
   >
   <Typography component="legend"></Typography>
  <Rating name="read-only" value={value} readOnly />
  </Box><Button size="small">More Info</Button>
    </CardActions>
    </Card>
    </Grid>
    <Grid item xs={12} md={3}>
    <Card sx={{ maxWidth: 280,height:"100%" }} className='wish'>
    <CardMedia
    />
    <CardContent>
    <img src='assets/doctor.jpg' alt='assets' className='im' width={'200px'} height={'300px'}></img>
    <Typography gutterBottom variant="h5" component="div">
    Recommended Doctors
    </Typography>
    <Typography variant="body2" color="text.secondary">
    Top Rated Team of Doctors
    Includes all Specialities
    </Typography>
    </CardContent>
    <CardActions>
    <Box    sx={{
        '& > legend': { mt: 2 },
      }}
   >
   <Typography component="legend"></Typography>
  <Rating name="read-only" value={value} readOnly />
  </Box> <Button size="small">More Info</Button>
    </CardActions>
    </Card>
    </Grid>
        </Grid >
        
        
        <Box >
        <div>
          <h2>Other Specialities</h2>
          <h4> Our Specialities - Expertise You Can Trust </h4>
          <h5>
            {" "}
            A medical specialty is a specific area of medical practice that
            mainly focuses on a defined set of diseases, patients, philosophy,
            or skills. Examples include Paediatrics, Dermatology, Psychiatry,
            Gynaecology, and more.{" "}
          </h5>
          <p>
            We provide 24/7 advanced services for a range of medical
            specialities, including:
          </p>
          <p>
            # Dermatology - A specialised branch of medicine that focuses on
            hair, nails, and skin-related disorders. Dermatology also
            encompasses conditions that affect the thin lining of your mouth,
            eyelids, and nose.
          </p>
          <p>
            # Neurology - It is a specific medical branch that focuses on
            diagnosing and treating nervous system disorders, which includes
            the brain, nerves, muscles, and blood vessels.
          </p>
          <p>
            # Endocrinology - A specific area of medicine that is related to
            the study of the endocrine system. The endocrine glands produce
            hormones that help monitor various functions in the body,
            including metabolism, growth, and development.
          </p>
          <p>
            # Cardiology - It is a specialty of internal medicine concerned
            with heart-related disorders. Cardiology focuses on detecting and
            treating electrophysiology, congenital heart defects, heart
            failure, coronary artery, valvular heart disease, and other
            related conditions.
          </p>
          <p>
            # Gastroenterology/GI Medicine - A specific branch of medicine
            that mainly focuses on the functions and diseases of the digestive
            tract, liver bile ducts, gallbladder, and pancreas.
          </p>
          <p>
            # COVID Consult - COVID-19 also known as novel coronavirus may
            trigger infections of the lower and upper respiratory tracts. If
            you are experiencing body ache, shortness of breath, dry cough, or
            fever, you must get an online consultation with the Apollo 24|7
            experts.
          </p>
          <p>
            # Orthopaedics - A specific branch of medicine that majorly
            focuses on treating injuries and diseases related to the
            musculoskeletal system of the body.
          </p>
          <p>
            # Family Physician - A medical doctor who provides care to people
            of all age groups and gender. A family physician specialises in
            diagnosing chronic conditions, checking for signs or symptoms,
            providing preventative care, and referring people to specialists,
            if needed.
          </p>
        </div>

        <Box >
          <h4> Why to Choose Us</h4>
          <p>
            Benefits for choosing Us online doctor consultations:
            <br />
            Highly-qualified doctors are available 24x7 for you
            <br />
            Emergency medical services are available <br />
            Get online consultations within 15 minutes
            <br />
            Affordable rates and personalised solutions
            <br />
            Instant online consultations anytime, anywhere
            <br />
          </p>
        </Box>

      </Box>
      
      <Grid container  className='hello' display={"flex"} justifyContent={"center"}>
     
      <Grid item md={4}>
      
      <div>
      <i className="fa-regular fa-hospital"></i>
      </div>
      <p>
      The Nightingale Pledge:<br/> A Hippocratic Oath for Nurses I solemnly pledge myself before God and in the presence of this assembly to pass my life in purity and to practice my profession faithfully. I will abstain from whatever is deleterious and mischievous and will not take or knowingly administer any harmful drug.
      </p>
      </Grid>
      
      <Grid item md={6}>
      <Box  marginLeft={{lg:32}} >
      <p>Feel free to contact us : </p>
      </Box>
      <Box display={"flex"} marginLeft={{lg:35 , md:10}} >
      <div>
      <i className="fa-brands fa-whatsapp beta"></i>
      </div>
      <div >
      <i className="fa-brands fa-instagram beta"></i>
      </div>
      <div >
      <i className="fa-brands fa-facebook beta"></i>
      </div>
      <div  >        
      <i className="fa-brands fa-twitter beta"></i>
      </div>
      <div >
      <i className="fa-brands fa-youtube beta"></i>
      </div>
      <div >
      <i className="fa-solid fa-exclamation beta"></i>
      </div>
      <div >
      <i className="fa-regular fa-phone beta"></i>
      </div>
      </Box>
      </Grid>
      </Grid>
      
      </Box>
        </Box>

    )
    }


export default About;
