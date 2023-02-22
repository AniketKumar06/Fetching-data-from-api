import React, { useState, useEffect } from "react";

import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import './App.css';


export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (

    <div>
      <Header />
      <div className="main">

        {
          posts.map((post) => {
            return (
              <Cards key={post.id}
                image={post.jetpack_featured_media_url}
                title=<h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                excerpt=<p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                date={new Date(post.date).toLocaleDateString()}
              />
            )
          })
        }
      </div>
    </div>
  );
}
