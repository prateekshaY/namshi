import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Layout = ({data}) => {
    console.log("*****", data);
    if (!data.length) {
        return <div>No Data</div>
    }
    return (
        <Grid container>
       { data.map( (item) => {
            return (

  <Grid item  md={4}>
       <Card sx={{ maxWidth: 345, maxHeight: 400 }}>
      <CardMedia
        component="img"
        height="140"
        image={item.urlToImage}
      />
      <CardContent>
        <div>
        <Typography gutterBottom variant="span" component="div" >
          {item.source.name}
        </Typography>
        </div>
        <div className="styleTitle">
        <Typography classes={"styleTitle"} variant="h5" component="div" color="text.secondary">
         {item.title}
        </Typography>
        </div>
        <div>
        <Typography variant="body2" color="text.secondary" >
         {item.description}
        </Typography>
        </div>
      </CardContent>
    </Card>
  </Grid>
  

            )

        }) }
        </Grid>
      
    );
  };
  
  export default Layout;
  