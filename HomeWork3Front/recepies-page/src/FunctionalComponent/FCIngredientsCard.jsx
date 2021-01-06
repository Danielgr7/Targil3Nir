import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        textAlign: "center",
        maxWidth: 345,
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
        justifyContent: "space-between",

    },
    media: {
        height: 140,
    },
    button: {
        textAlign: "center",
        padding: "10px",
    }
});

export default function FCIngredientsCard(props) {
    const classes = useStyles();
    console.log("ingredients card",props.ingredient);
    return (

        <React.Fragment>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={props.ingredient.IngredientsImg}
                    //   title={props.recipe.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.ingredient.IngName}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.ingredient.Calories}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                
            </Card>
        </React.Fragment>
    )
}
