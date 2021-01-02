import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import { Modal } from 'react-bootstrap';

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
    }
});



export default function FCRecipeCard(props) {
    const classes = useStyles();


    console.log(props.recipeIngredients);
    return (
        <React.Fragment>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={props.recipe.RecImg}
                    //   title={props.recipe.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.recipe.RecipeName}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button
                        size="small" color="secondary"
                        //onClick={onClick}
                        variant={"contained"}
                        className={classes.button}>
                        Show ingredients
                </Button>
                </CardActions>
            </Card>

        </React.Fragment>

    );
}