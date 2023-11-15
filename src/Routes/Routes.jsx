import DrinkInfo from "../features/drinkInfo/DrinkInfo";
import NotFound from "../sharedComponents/NotFound";
import CoctailList from "../components/coctailListComponents/CoctailList";
import FavListFullScreen from "../features/favouriteList/FavListFullScreen";
import { Routes, Route, Navigate } from "react-router-dom";
import DrinksByIngredients from "../features/ingredientSearch/DrinksByIngredients";
import CoctailsOutlet from "../components/coctailListComponents/CoctailsOutlet";

const RouteComponent = () => {
  return (
    <Routes>
        {/* home/index route */}
        <Route path="/" element={<CoctailList />} />
        {/* path for drink with id */}
        <Route path="/drink/:id" element={<DrinkInfo />} />
        {/* categories */}
        <Route path="/categories/" element={<CoctailsOutlet/>}>
          <Route path=":id" element={<CoctailList/>}/>
        </Route>
        {/* favourite list route */}
        <Route path="/favourite_list" element={<FavListFullScreen />} />
        <Route path="ingredients">
          <Route path=":id" element={<DrinksByIngredients />}/>
        </Route>
        {/* not found element */}
        <Route path="/error" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/error" />} />
        
      </Routes>
  )
}

export default RouteComponent