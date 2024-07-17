import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Filternew = ({ filters, sortBy }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const currentUrl = window.location.href; // get the current URL

      // Construct the API endpoint with filters
      const params = new URLSearchParams(filters).toString();
      const apiUrl = `http://192.169.176.207:5000/api/newdata?${params}&sortBy=${sortBy}`;
      console.log("api", apiUrl);
      console.log("filter", filters);
      console.log("param", params);
      console.log("sort", sortBy);

      try {
        const response = await axios.get(apiUrl);
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data from API", error);
      }
    };

    fetchProducts();
  }, [filters, sortBy]); // Update dependency to include filters

  return (
    <div className="block sm:justify-start justify-around">
      <div className='w-fit ml-auto'>{products.length}/211</div>
      {products.map((product, index) => (
        <div key={index} className="py-1 px-1 flex-shrink-0">
          <Card
            verified={product.user.verified}
            url={`x.com/${product.user.username}`}
            followers={product.user.followersCount}
            followings={product.user.followingCount}
            tweetCount={product.user.tweetCount}
            screenname={product.user.username}
            ffRatio={product.user.followerFriendRatio}
            name={product.user.name}
            gemini_res={product.gemini_res}
            tweetid = {product.tweetId}
            query={product.query}
            description={product.user.description}
            populatedtweet={product.text}
            img={product.user.profileImageUrl || ""}
            retweetCount={product.publicMetrics.retweetCount}
            replyCount={product.publicMetrics.replyCount}
            likeCount={product.publicMetrics.likeCount}
            quoteCount={product.publicMetrics.quoteCount}
            bookmarkCount={product.publicMetrics.bookmarkCount}
            impressionCount={product.publicMetrics.impressionCount}
          />
        </div>
      ))}
    </div>
  );
};

export default Filternew;
