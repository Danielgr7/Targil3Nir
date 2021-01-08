import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Form, FormGroup } from 'react-bootstrap';
import '../Forms.css';

class FCCraeteNewRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: [],// fetch get
            id: '',
            name: '',
            method: '',
            cookTime: '',
            img: '',
            ingredientsInRe: []
        }
    }

    componentDidMount() {
        this.getIngredients();
    }
    getIngredients = () => {

        const allingredient = [];
        const apiUrlGetIngredients = "http://localhost:55530/api/Ingredient";

        fetch(apiUrlGetIngredients,
            {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Accept': 'application/json; charset=UTF-8',
                })
            }).then(res => {
                console.log('res=', res);
                console.log('res.status', res.status);
                console.log('res.ok', res.ok);
                return res.json()
            }).then((result) => {
                console.log("fetch Ingredients, in form Create Recipe = ", result);
                result.forEach(i => {
                    allingredient.push({
                        id: i.IngredientId,
                        name: i.IngName,
                        img: i.IngredientsImg,
                        calories: parseInt(i.Calories)
                    })
                })
                this.setState({ ingredients: [...allingredient] });
                this.setState();
                console.log(this.state.ingredients);
            }, (error) => { console.log("err post=", error); });
    }

    handleChange = (event) => {
        var val = event.target.name;
        this.setState({ [val]: event.target.value });
        console.log(event.target.value);
    }


    handleSubmit = (e) => {
        // debugger
        console.log(this.state)
        if (this.state.name === '' || this.state.img === '' || this.state.method === '' || this.state.cookTime === '' || this.state.ingredientsInRe.length == 0) {
            alert("some values are missing, please fill the entire form.");
        }
        else {
            let ingredientList_ID = this.state.ingredientsInRe.map(ing => {
                return {IngredientId: ing.id}
            });
            
            let data = {
                RecipeName: this.state.name,
                RecImg: this.state.img,
                CookingMethod: this.state.method,
                CookTime: parseFloat(this.state.cookTime),
                IngredientsList: ingredientList_ID
            };
            console.log("this is the data", data);

            const apiUrlPostRecipe = "http://localhost:55530/api/Recipe";
            fetch(apiUrlPostRecipe, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: new Headers({
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Accept': 'application/json; charset=UTF-8'
                })
            })
                .then(response => {
                    console.log('response.ok', response.ok);
                    return response.json();
                })
                .then((result) => {
                    console.log("result= ", result);
                    alert("ingredieant added");
                }, (error) => { console.log("err post=", error); }, () => (console.log("I finished to do a fetch post")));
        }
    }

    handleCheck = (e, ing) => {

        if (e.target.checked) {
            this.setState({ ingredientsInRe: [...this.state.ingredientsInRe, ing] }, () => (console.log(this.state.ingredientsInRe)));
        }
        else {
            let demoArr = this.state.ingredientsInRe.filter(ingIn_R => ing.id !== ingIn_R.id)
            this.setState({
                ingredientsInRe: demoArr
            }, () => (console.log(this.state)))
        }

    }

    render() {
        

        return (
            <div className="root">

                <Form className="form" onSubmit={this.handleSubmit}>
                    <Form.Text className="text-muted"><h1>New Recipe</h1></Form.Text>
                    <br />

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name: &nbsp;</Form.Label>
                        <Form.Control name="name" type="text" onChange={this.handleChange} placeholder="Enter recipe name" />
                    </Form.Group>
                    <br />

                    {/* לשנות קונטרול ID */}
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Cooking method: &nbsp;</Form.Label>
                        <Form.Control name="method" type="text" onChange={this.handleChange} placeholder="Enter Cooking method" />
                    </Form.Group>
                    <br />

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Cooking Time: &nbsp;</Form.Label>
                        <Form.Control name="cookTime" type="number" onChange={this.handleChange} placeholder="Enter Cooking Time (minutes)" />
                    </Form.Group>
                    <br />

                    <Form.Group controlId="formImage">
                        <Form.Label>Image: &nbsp;</Form.Label>
                        <Form.Control className="input_ImgUrl" name="img" onChange={this.handleChange} type="text" placeholder="Enter Image URL" />
                    </Form.Group>
                    <br />

                    <Form.Group controlId="formBasicCheckbox">

                        {/* CheckBox - Screen */}
                        {
                            this.state.ingredients.map(ing =>
                                <Form.Check type="checkbox" /*maybe ---> onChange*/ onClick={(e) => this.handleCheck(e, ing)} key={ing.id} label={ing.name} />
                            )
                        }

                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <br />

                    <Button className="btnSubmit" variant="primary" type="submit">Submit</Button>
                    &nbsp;&nbsp;
                    <Button className="btnClear" variant="primary" type="submit">Clear Form</Button>
                </Form >
            </div>
        )
    }
}

export default withRouter(FCCraeteNewRecipe);