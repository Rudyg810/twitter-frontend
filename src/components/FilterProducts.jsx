import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const FilterProducts = ({ filters,sortBy }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const currentUrl = window.location.href; // get the current URL

      // Construct the API endpoint with filters
      const params = new URLSearchParams(filters).toString();
      const apiUrl = `http://192.169.176.207:5000/api/users?${params}&sortBy=${sortBy}`;
      console.log("api",apiUrl)
      console.log("filter",filters)
      console.log("param",params)
      console.log("sort",sortBy)


      try {
        const response = await axios.get(apiUrl);
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data from API", error);
      }
    };

    fetchProducts();
  }, [filters,sortBy]); // Update dependency to include filters

  return (
    <div className="block sm:justify-start justify-around">
     <div className=' w-fit ml-auto'>{products.length}/110</div> 
     {products.map((product, index) => (
        <div key={index} className="py-1 px-1 flex-shrink-0">
          <Card 
            verified={product.user.verified}
            url={`x.com/${product.user.username}`}
            followers={product.user.followersCount}
            followings={product.user.followingCount}
            ffRatio={product.user.followerFriendRatio}
            screenname={product.screen_name}
            gemini_res={product.gemini_res}
            tweetid = {product.tweetId}
            populatedtweet={product.text}
            description={product.user.description}
            img={product.user.profileImageUrl || ""}
          />
        </div>
      ))}
    </div>
  );
};

export default FilterProducts;
