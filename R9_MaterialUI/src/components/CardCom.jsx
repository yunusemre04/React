import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import React from 'react'
import Nature from './images/nature.jpg'

function CardCom() {
    return (
        <div className='ms-1'>
            <div className='h4 ms-2'>Card</div>
            <Card sx={{ width: '250px' }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={Nature}
                    title="Sea"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Sea
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Culpa aspernatur voluptas qui nesciunt beatae? Quaerat voluptate dolores perspiciatis at dolorem.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            
        </div>

    )
}

export default CardCom