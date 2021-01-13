import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import FCModal from '../FunctionalComponent/FCModal';
//import { Modal } from 'react-bootstrap';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import FCIngredientsCard from '../FunctionalComponent/FCIngredientsCard'

const useStyles = makeStyles({
    root: {
        textAlign: "center",
        width: "revert",
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
        justifyContent: "space-between",

    },
    media: {
        height: 140,
        //width:150
        width: "300px"
    },
    button: {
        textAlign: "center",
        padding: "10px",
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',


    },
    containerPaper: {
        border: '2px solid #000',
    },
    paper: {
        backgroundColor: 'white',
        boxShadow: 'theme.shadows[5]',
        //padding: 'theme.spacing(2, 4, 3)',
        //justifyContent: "center",
        //minWidth: "auto",
        //minLength: "500px",
        textAlign: "center",
        padding: "90px",
        display: "flex",
        gap: "30px",

    },
    footer_Modal: {
        textAlign: "center",
        backgroundColor: 'white',
    },
});



export default function FCRecipeCard(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const getTotalCalorie = () => {
        var sum = 0;
         props.ingredients.forEach(element => {
             sum += element.Calories;
        });
        console.log("Cal-----",sum);
       return sum
    }

    console.log("list of ingredients in recipe carsd", props.ingredient);
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
                            <h3>{props.recipe.RecipeName}</h3>
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            <h4> Calories: {getTotalCalorie()}</h4>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button
                        size="small" color="secondary"
                        onClick={handleOpen}
                        variant={"contained"}
                        className={classes.button}>
                        Show ingredients
                </Button>
                </CardActions>
            </Card>


            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                //onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.containerPaper}>
                        <div className={classes.paper}>
                            {/* <a id="transition-modal-title" href={ingredient.IngName}/> */}
                            {props.ingredients.map(ing => <FCIngredientsCard ingredient={ing} />)}
                        </div>
                        <div className={classes.footer_Modal}>
                            <button type="button" className={classes.button} onClick={handleClose} > Close </button>
                        </div>
                    </div>

                </Fade>
            </Modal>

        </React.Fragment>

    );
}