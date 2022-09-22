import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ActionAreaCard() {

    
  return (
    <table>
    <tr>
      <td>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="../assets/images/butterscotch-ice-cream.jpg"
          alt="chocolate cake"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Butterscotch Icecream
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Butterscotch Icecream is a cake flavored with melted chocolate, cocoa powder, or both.
          <Link  to="/cart"><button type="button" class="btn btn-primary"> Add to cart</button></Link>
          </Typography>
        </CardContent>
        <div className = "e-card">
        <div className="e-card-actions e-card-vertical">
           <button className="e-card-btn">+</button>
            {//button onclick lagana h yaha 
            }
        </div>
    </div>
      </CardActionArea>
    </Card>
    </td>
    <td>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="../assets/images/chocolate_ice.jpg"
          alt="chocolate cake"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Chocolate Icecream
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Chocolate cake is a cake flavored with melted chocolate, cocoa powder, or both.
            <Link  to="/cart"><button type="button" class="btn btn-primary"> Add to cart</button></Link>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </td>
    <td>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="../assets/images/Strawberry-iceCream.jpg"
          alt="chocolate cake"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Strawberry Icecream
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Chocolate cake is a cake flavored with melted chocolate, cocoa powder, or both.
            <Link  to="/cart"><button type="button" class="btn btn-primary"> Add to cart</button></Link>
    </Typography>
        </CardContent>
        <div className = "e-card">
        <div className="e-card-actions e-card-vertical">
            <button className="e-card-btn">+</button>
            {//button onclick lagana h yaha 
            }
        </div>
    </div>
      </CardActionArea>
    </Card>
    </td>




    <td>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="../assets/images/pineapple-ice-cream.jpg"
          alt="chocolate cake"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          pinaple Cake
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Chocolate cake is a cake flavored with melted chocolate, cocoa powder, or both.
            <Link  to="/cart"><button type="button" class="btn btn-primary"> Add to cart</button></Link>
          </Typography>
        </CardContent>
        <div className = "e-card">
        <div className="e-card-actions e-card-vertical">
            <button className="e-card-btn">+</button>
            {//button onclick lagana h yaha 
            }
        </div>
    </div>
      </CardActionArea>
    </Card>
    </td>


















    </tr>
    </table>
  );
}