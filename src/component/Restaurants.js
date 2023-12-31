import RestaurantItem from "./RestaurantItem";
import "../../style.css";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import SearchRestaurantOrFood from "./SearchRestaurantOrFood";
import { useState, useEffect } from "react";
import { RESTAURANTS_URL } from "../config";

const Restaurants = () => {
  // const restaurants1 = reslist[0].info.cards[2].card.card.gridElements?.infoWithStyle?.restaurants
  const [restaurants, setRestaurants] = useState('');
  const [sorts, setSorts] = useState([]);
  const [allRestaurant, setAllRestaurant] = useState('');

  const getFilterRestaurants = (searchText) => {
    const data = allRestaurant?.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    // console.log(data);
    setRestaurants(data);
  };

  const getRestaurants = async () => {
    const data = await fetch(RESTAURANTS_URL);
    const resturantsData = await data.json();
    setRestaurants(
      resturantsData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(data)

    setAllRestaurant(
      resturantsData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // const getRestaurants = async () => {
  //   const data = await reslist
  //   setRestaurants(reslist[0].info.cards[2].card.card.gridElements?.infoWithStyle?.restaurants)
  //   setAllRestaurant(reslist[0].info.cards[2].card.card.gridElements?.infoWithStyle?.restaurants)
  // }

  useEffect(() => {
    getRestaurants();
  }, []);


  return restaurants.length > 0 ? (
    <>
      <SearchRestaurantOrFood getFilterRestaurants={getFilterRestaurants} />
      <div className="restaurants-container">
        <div className="restaurants">
          {/* <h2>{restaurants.length} restaurants</h2> */}
          {/* <div className="restaurants-sort">
            {sorts?.map((sort, index) => {
              return <p key={index}>{sort.title}</p>;
            })}
            <p>Filter</p>
          </div> */}
        </div>
        <div className="restaurant-container">
          {restaurants?.map((item) => {
            return (
              <Link to={"/restaurants/" + item.info.id} key={item.info?.id}>
                <RestaurantItem {...item?.info} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  ) : (
    <Shimmer />
    
  );
};

export default Restaurants;
