// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import styles from "../styles/home.module.css"

// const bull = (
//     <Box
//         component="span"
//         sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//     >
        
//     </Box>
// );

// export default function BasicCard(props) {
//     return (
//         <Card className={styles.boxouter} >
//             <CardContent className={styles.box}>
//                 <Typography sx={{ fontSize: 20 }} className={styles.head} color="text.secondary" gutterBottom>
//                     Books Card No : {props.id}
//                 </Typography>
//                 <Typography variant="h6" component="div">
//                     Title : {props.title}
//                 </Typography>
//                 <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                     Author : {props.author}
//                 </Typography>
//                 <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                     Price : {props.price}
//                 </Typography>
//                 <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                     Condition : {props.condition}
//                 </Typography>

//             </CardContent>
//             {/* <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions> */}
//         </Card>
//     );
// }


import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from "../styles/home.module.css"

export default function ActionAreaCard(props) {
  return (
    <div className="new">

    <Card sx={{ maxWidth: 360 }} className={styles.boxouter} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="550"
          image={props.image}
          alt="green iguana"
        />
        <CardContent className={styles.box} >
          <Typography gutterBottom variant="h5" component="div" className={styles.head}>
          Books Card No : {props.id}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Title : {props.title}             
                    </Typography>
               <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Author : {props.author}              
                    </Typography>
                 <Typography sx={{ mb: 1.5 }} color="text.secondary">
                     Price : {props.price}
                </Typography>
                 <Typography sx={{ mb: 1.5 }} color="text.secondary">
                     Condition : {props.condition}
                 </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}
