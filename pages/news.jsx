import {useEffect, useState} from 'react';
import axios from 'axios';

function News() {
    const [newsItems, setNewsItems] = useState([]);
    
    useEffect(() => {
        axios
          .get("http://localhost:8055/items/news")
          .then(res => setNewsItems(res.data.data))
          .catch(err => console.error(err));
        
      }, []);

    return (
        <div>
            <ul>
                {
                    newsItems.map((news)=>
                        (<li key={news.id}>
                            {news.title}
                            ll
                        </li>)
                    )
                }
            </ul>
        </div>
    )
}

export default News
