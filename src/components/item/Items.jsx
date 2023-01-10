import "./item.css";
import { Link } from "react-router-dom"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const Items = ( { element } ) => {

    return (
      
        <Card sx={{ maxWidth: 400, marginTop:10 }}>
              
            <Typography gutterBottom variant="h5" component="div" align="center" marginTop={3}>
                {element.nombre}
            </Typography>
            <CardMedia
                component="img"
                height="350"
                image={element.imagen}
                alt="termo"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary" align="center"> 
                    {element.descripcion}
                </Typography>
                <Typography size="18" variant="body2" color="#2962ff" align="center">
                    $ {element.precio}
                </Typography>
            </CardContent>
            <CardActions style={{display:"flex", justifyContent:"center"}}>                  
                <Link style={{textDecoration: "none", marginLeft:"10px"}} to={`/itemDetail/${element.id}`}>
                <Button size="small" variant="outlined">Ver detale</Button> 
                </Link>
            </CardActions>
        </Card>
    )
}

