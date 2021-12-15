import { useState, useEffect } from "react";
//import axios from "./baseAxios";

import axios from "axios";

import NewsLayout from "./layout";

const News = ({ country }) => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    if (country) {
  
      const params = {
        country: country,
        apiKey: "9fbd96fece1a4595933fdbd022aa242d",
        pageSize:12
      };
      axios
        .get("https://newsapi.org/v2/top-headlines",{
            params
        })
        .then((res) => {
          console.log(res.data.articles);
          setNews(res.data.articles);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },[country]);

  return <NewsLayout data={news} />;
};

export default News;
