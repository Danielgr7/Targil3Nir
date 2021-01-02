import React, { Component } from 'react'
import { Button, createChainedFunction } from '@material-ui/core';
import { withRouter } from 'react-router-dom'
import FCCards from '../FunctionalComponent/FCCards';
//import FetchGetRecipes from '../Fetchs/FetchGetRecipes';



//const getRecipe = <FetchGetRecipes />;

class CCMyKitchen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            ingredients: []
        }
    }

    componentDidMount() {
        const apiUrlGetRecipes = "http://localhost:55530/api/Recipe";
        const apiUrlGetIngredients = "http://localhost:55530/api/Ingredient";

        fetch(apiUrlGetRecipes,
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
                console.log("fetch Recipes= ", result);
                this.setState({ recipes: result });

            },
                (error) => {
                    console.log("err post=", error);
                });



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
                        console.log("fetch Ingredients = ", result);
                        this.setState({ ingredients: result });
        
                    },
                        (error) => {
                            console.log("err post=", error);
                        });
    }


    render() {
        return (
            <div>
                <FCCards recipes={this.state.recipes} ingredients={this.state.ingredients} />
                
            </div>
        )
    }
}
export default withRouter(CCMyKitchen);

