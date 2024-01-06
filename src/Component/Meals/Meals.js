import MealsSummary from "./MealsSummary";
import Availablemeals from "./Availablemeals";
import { Fragment } from "react";
function Meals() {
  return (
    <Fragment>
      <MealsSummary />
      <Availablemeals />
    </Fragment>
  );
}
export default Meals;
