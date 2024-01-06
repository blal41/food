import Card from "../UI/Card";
import Mealitem from "./MealItem/Mealitem";
import classes from "./Availabelmeals.module.css";
// import { useEffect, useState } from "react";
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const Availablemeals = () => {
  // const [meals, setmeals] = useState([]);
  // const[isloading ,setisLoaidng] = useState(true);

  // useEffect(() => {
  //   const fetchMeals = async () => {
     
  //       const response = fetch(
  //         'https://food-dc6fe-default-rtdb.firebaseio.com/meals.json'
  //       );
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch meals");
  //       }
  //       const responseData = await response.json();

  //       const loadMeals = [];
  //       for (const key in responseData) {
  //         loadMeals.push({
  //           id: key,
  //           name: responseData[key].name,
  //           description: responseData[key].description,
  //           price: responseData[key].price,
  //         });
  //       }
  //       setmeals(loadMeals);
  //       setisLoaidng(false);
      
  //   };

  //   fetchMeals();
  // }, []);
  // if(isloading){
  //   return <section className={classes.mealLoading}>
  //     <p>loading .....</p>
  //   </section>
  // }
  const mealslist = DUMMY_MEALS.map((meal) => (
    <Mealitem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealslist}</ul>
      </Card>
    </section>
  );
};
export default Availablemeals;
