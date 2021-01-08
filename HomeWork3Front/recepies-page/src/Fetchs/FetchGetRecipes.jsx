
export function FetchGetRecipes(){
    const apiUrl = "http://localhost:55530/api/Recipe";


    fetch(apiUrl, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json; charset=UTF-8',
        })
    })
        .then(res => {
            console.log('res=', res);
            console.log('res.status', res.status);
            console.log('res.ok', res.ok);
            return res.json()
        })
        .then(
            (result) => {
                console.log("fetch btnFetchGetStudents= ", result);
                result.map(recipe => console.log(recipe.RecipeName));
                console.log('result[0].RecipeName=', result[0].RecipeName);
            },
            (error) => {
                console.log("err post=", error);
            });
}       

