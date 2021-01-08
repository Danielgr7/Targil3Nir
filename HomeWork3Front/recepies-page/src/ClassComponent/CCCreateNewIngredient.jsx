import React, { Component } from 'react'
import { Button, Form, FormGroup } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import '../Forms.css';


class FCCreateNewIngredient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      img: '',
      calories: ''
    }
  }

  handleChange = (event) => {
    var val = event.target.name;
    this.setState({ [val]: event.target.value });
    console.log(event.target.value);
  }

  handleSubmit = (e) => {
    if (this.state.name === '' || this.state.img === '' || this.state.calories === '') {
      alert("missing some values, please fill the entire form.");
    }
    else {

      console.log(this.state);
      let data = {
        "IngName": this.state.name,
        "IngredientsImg": this.state.img,
        "Calories": parseFloat(this.state.calories)
      };
      console.log("data------>", data);
      alert("stop.");

      const apiUrl = "http://localhost:55530/api/Ingredient";
      fetch(apiUrl, {
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
        }, (error) => { console.log("err post=", error); });
      console.log('end');
    }
  }
  

  render() {
    return (
      <div className="root">
        <Form className="form" onSubmit={this.handleSubmit}>
          <FormGroup>
            <Form.Text className="text-muted"><h1>New Ingredient</h1></Form.Text>
          </FormGroup>
          <br />

          <Form.Group controlId="formName">
            <Form.Label>Name: &nbsp;</Form.Label>
            <Form.Control className="input_IngName" name="name" onChange={this.handleChange} type="text" placeholder="Enter Ingredient Name" />
          </Form.Group>
          <br />

          <Form.Group controlId="formImage">
            <Form.Label>Image URL: &nbsp;</Form.Label>
            <Form.Control className="input_ImgUrl" name="img" onChange={this.handleChange} type="text" placeholder="Enter Image URL" />
          </Form.Group>
          <br />

          <Form.Group controlId="formCalorie">
            <Form.Label>Calories: &nbsp;</Form.Label>
            <Form.Control className="input_Calories" name="calories" onChange={this.handleChange} type="number" placeholder="Enter Dish Calories " />
          </Form.Group>
          <br />

          <Button className="btnSubmit" variant="primary" type="submit">Create new ingredient</Button>
          &nbsp;&nbsp;
          <Button className="btnClear" variant="primary" type="submit">Clear Form</Button>
        </Form>
      </div>
    )
  }
}

export default withRouter(FCCreateNewIngredient);
