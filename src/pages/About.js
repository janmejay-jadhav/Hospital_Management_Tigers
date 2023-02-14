    import * as React from 'react';
    import Card from '@mui/material/Card';
    import CardActions from '@mui/material/CardActions';
    import CardContent from '@mui/material/CardContent';
    import CardMedia from '@mui/material/CardMedia';
    import Button from '@mui/material/Button';
    import Typography from '@mui/material/Typography';
    import { Box } from '@mui/system'
    import { Grid } from '@mui/material';
    import Popper from '@mui/material/Popper';





    function About() {

        const [anchorEl, setAnchorEl] = React.useState(null);

        const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
        };


        const open = Boolean(anchorEl);
        const id = open ? 'simple-popper' : undefined;
    
    
        return (
            <div align='center'>
        <div className='happy'>
    <div className='jss'>
    <h1> ABOUT US</h1>
    <h2>Know more about us, We are more than a hospital</h2>

    </div>
    <div>
    
    </div>
    <div>
    <h4>Who We Are ....?</h4>
    <p> We are the team with an ambition to provide the people best and affordable treatment for everyone.<br/>
    So we are ready to help you out with our best possible way with the use of best Technology and best team of the Doctors.
    </p>
    <h4>Our Team and Specialists</h4>
    </div>
        <Box>
        <Grid container maxHeight={"100px"}>

        <Grid item >
        <Card sx={{ maxWidth: 345 }} className='kk'>
        <CardMedia
        />
        <CardContent>
        <img src='assets/dr1.png' className='im'></img>
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
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
        </CardActions>
        
        
        </Card>
        </Grid>
        <Grid item>
        <Card sx={{ maxWidth: 345,height:"100%" }}>
        <CardMedia
        
        // sx={{ height: 140 }}
        title="Dr information"
        />
        <CardContent>
        <img src='assets/about-doctor-bg.jpg' className='im'></img>
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
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
        </CardActions>
    </Card>
    </Grid>
    <Grid>
    <Card sx={{ maxWidth: 345, height:"100%" }}>
    <CardMedia        title="Dr information"
    />
    <CardContent>
    <img src='assets/R.jpg' className='im'></img>
        
        <Typography gutterBottom variant="h5" component="div">
        Paediatrics
        </Typography>
        <Typography variant="body2" color="text.secondary">

        Dr.Helen Perry<br/>
        Specialists to care and treat children

        Constipation, Puberty, Nutrition, Autism</Typography>
    </CardContent>
    <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
    </CardActions>
    </Card>
    </Grid>
    <Grid>
    <Card sx={{ maxWidth: 345,height:"100%" }}>
    <CardMedia
    />
    <CardContent>
    <img src='assets/doctor.jpg' className='im' width={'250px'} height={'300px'}></img>
    <Typography gutterBottom variant="h5" component="div">
    Recommended Doctors
    </Typography>
    <Typography variant="body2" color="text.secondary">
    Top Rated Team of Doctors
    Includes all Specialities
    </Typography>
    </CardContent>
    <CardActions>
    <Button size="small">Share</Button>
    <Button size="small">Learn More</Button>
    </CardActions>
    </Card>
    </Grid>
        </Grid>
        </Box>
        

        <Box  className='hello'>
        <div>
        <h2>Other Specialities</h2>
        <h4> Our Specialities - Expertise You Can Trust </h4>
        <h5> A medical specialty is a specific area of medical practice that mainly focuses on a defined set of diseases, patients, philosophy, or skills. Examples include Paediatrics, Dermatology, Psychiatry, Gynaecology, and more. </h5>
        <p>We provide 24/7 advanced services for a range of medical specialities, including:</p>
        <p># Dermatology - A specialised branch of medicine that focuses on hair, nails, and skin-related disorders. Dermatology also encompasses conditions that affect the thin lining of your mouth, eyelids, and nose.</p>
        <p># Neurology - It is a specific medical branch that focuses on diagnosing and treating nervous system disorders, which includes the brain, nerves, muscles, and blood vessels.</p>
        <p># Endocrinology - A specific area of medicine that is related to the study of the endocrine system. The endocrine glands produce hormones that help monitor various functions in the body, including metabolism, growth, and development.</p>
        <p># Cardiology - It is a specialty of internal medicine concerned with heart-related disorders. Cardiology focuses on detecting and treating electrophysiology, congenital heart defects, heart failure, coronary artery, valvular heart disease, and other related conditions.</p>
        <p># Gastroenterology/GI Medicine - A specific branch of medicine that mainly focuses on the functions and diseases of the digestive tract, liver bile ducts, gallbladder, and pancreas. 
        </p>
        <p># COVID Consult - COVID-19 also known as novel coronavirus may trigger infections of the lower and upper respiratory tracts. If you are experiencing body ache, shortness of breath, dry cough, or fever, you must get an online consultation with the Apollo 24|7 experts.
        </p>
        <p># Orthopaedics - A specific branch of medicine that majorly focuses on treating injuries and diseases related to the musculoskeletal system of the body.
        </p>
        <p># Family Physician - A medical doctor who provides care to people of all age groups and gender. A family physician specialises in diagnosing chronic conditions, checking for signs or symptoms, providing preventative care, and referring people to specialists, if needed. 
        </p>
        </div>
        
        <Box >
        <div>
        <Grid className='hi' >
    <div> 
    <h3>Symptoms of Difference Diseases</h3>
    <h4> Consult Our Best Doctors for Best Treatment</h4>
    <div>Feeling unwell? Tell us your symptoms for a quick assessment and get appropriate care.</div>
   

<div className='welcome'>
<Grid item>
    <Button aria-describedby={id} variant='Text' type="button" onClick={handleClick} >
    Heart Attack Symptoms
    </Button>
    <Popper id={id} open={open} anchorEl={anchorEl}>
    <Box sx={{ border: 1, p: 1, bgcolor: 'Grey' }}>
    The technical term for a heart attack is called coronary thrombosis. Clots form inside the blood vessels of the heart, thereby, blocking the blood flow and starving the heart muscles of oxygen. As a result, the tissues of the heart begin to die. There are various heart diseases identified till now, however, one of the most common causes of death is coronary thrombosis.

    Based on the location of the clot, symptoms may or may not be present, but typically, these are the common warning signs:
    <br/>
    1 Nausea.<br/>
    2 Sweating.<br/>
    3 Cold sweat.<br/>
    4 Breathlessness.<br/>
    5 Sudden chest pain.<br/>
    6 Shooting pain in the left hand.<br/>
    7 Discomfort in other areas of the upper body.<br/>
    8 Tightness/ sensation of squeezing in the chest.<br/>
    
    </Box>
    </Popper>
    
    </Grid>
    <Grid item>
    <Button aria-describedby={id}  type="button" onClick={handleClick} variant="Text">
    Low BP Symptoms
    </Button>
    <Popper id={id} open={open} anchorEl={anchorEl}>
    <Box sx={{ border: 1, p: 1, bgcolor: 'Grey' }}>
    Everyone has slightly different readings for their normal blood pressure, it primarily depends on the person’s age, lifestyle, size etc. For instance, a highly trained athlete has a considerably lower resting blood pressure when compared to a normal individual.<br/> Therefore, low bp may not be an issue until they start causing undesirable symptoms.<br/>
    Characteristic Low BP symptoms include:

    1 Dizziness<br/>
    2 Light-headedness<br/>
    3 Fatigue<br/>
    4 Fading/blurred vision<br/>
    5 Lack of concentration<br/>
    6 Dryness of throat/ thirst<br/>

    Low BP symptoms can be counteracted by following a healthier lifestyle. These include proper intake of salt, reducing alcohol, regular exercises etc.


    </Box>
    </Popper>
    
    </Grid>
    <Button aria-describedby={id}  type="button" onClick={handleClick} variant="Text">

    Fever Symptoms
    </Button>
    <Popper id={id} open={open} anchorEl={anchorEl}>
    <Box sx={{ border: 1, p: 1, bgcolor: 'Grey' }}>
    
    A fever is a temporary increase in body temperature, typically as a result of an illness.<br/> A fever is a sign that our body cells are fighting and eliminating a number of infections from our body.<br/>
    Sign and Symptoms of Fever<br/>
    The most common symptoms of fever include:<br/>

    1 Chills<br/>
    2 Fatigue<br/>
    3 Paleness<br/>
    4 Confusions<br/>
    5 Shivering<br/>
    6 Seizures<br/>
    7 Vomiting<br/>
    </Box>
    </Popper>
    
    
    <Button aria-describedby={id}  type="button" onClick={handleClick} variant="Text">
    Stroke Symptoms
    </Button>
    <Popper id={id} open={open} anchorEl={anchorEl}>
    <Box sx={{ border: 1, p: 1, bgcolor: 'Grey' }}>
    Stroke is a disease that has a long list of risk factors. Individuals who are suffering from heart disease, hypertension, diabetes have a higher risk of stroke.<br/> Individuals who smoke are also more prone to strokes.<br/> Common characteristic symptoms of stroke include:
    <br/>
    1 Sudden numbness in the face <br/>
    2 Numbness on one side of the arms <br/>
    3 Slurred speech <br/>
    4 Blurred vision <br/>
    5 Confusion <br/>
    6 Trouble communicating with people <br/>
    7 Sudden and severe headaches <br/>
    8 Disorientation <br/>
    9 Dizziness <br/>
    10 Nausea and Vomiting <br/>
    </Box>
    </Popper>
    </div>    
    </div>
    </Grid>
    </div></Box>
        
        <Box>
        <h4> Why to Choose Us</h4>
        <p>
        Benefits for choosing Us online doctor consultations:<br/>

    Highly-qualified doctors are available 24x7 for you<br/>
    Emergency medical services are available <br/>
    Get online consultations within 15 minutes<br/>
    Affordable rates and personalised solutions<br/>
    Instant online consultations anytime, anywhere<br/>
        </p>
        </Box>
        </Box>
        </div>
        </div>
    )
    }

    export default About
