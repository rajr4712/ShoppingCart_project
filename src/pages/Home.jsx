import React from "react";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
//All shopping product data in inside Array so we give array name post and store all data isme.To check: go json formattor and validator me
  const [posts, setPosts] = useState([]);


   //async function create for Api call to get All shopping product data
  async function fetchProductData() {
    setLoading(true);

    try{
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);
    }
    catch(error) {
      console.log("Error aagya ji");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchProductData();
  },[])

    
  return (
    <div>
     {
      loading ? <Spinner />  :
        posts.length > 0 ?   //post length check 0 se bada hai then take all post(product) and har ek liye card bana denge by use of map
      (<div className="grid xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {
            posts.map( (post) => (
            <Product key = {post.id} post={post}/>    //post is a variable where Api post(all product) store in send it on Product component
          ) )
          }
        </div>) :
        
       <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div> 
      }
    </div>
  );
};

export default Home;

{/*loc39:Grid k through row and column bana rhe product ko display karane k liye so we can see Total 4 column hai grid
me so grid lg:grid-cols-4 use and xs,sm,md these all are for responsivness when resize screen */}
 

{/*Post: post me shopping product ki all data hai  like - product name, price, image, product desciption,id, 
category,rating etc wch comes after Api call we store in post state variable me by useSTtae hook loc10 */}

{/*loc42 key:post.id - Har ek product ki id diiferent hoti so to render all product one by one key is compulsory 
to pass  */}
