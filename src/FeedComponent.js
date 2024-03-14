import React, { useState, useEffect } from 'react'

const FeedComponent = () => {
    const [feed, setFeed] = useState([]);
    

    const fetchFeed = async()=> {
      const response = await fetch('https://academics.newtonschool.co/api/v1/quora/post', {
        headers:  {
          'projectID': 'f104bi07c490',
        }
      })
      const data = await response.json();
      //console.log(data)
      setFeed(data.data)
      console.log(feed)
    }

    useEffect(()=> {
      fetchFeed()
    }, [])

  return (
    <div>
        {feed.map(obj => {
          return (
            <div>
              <div style={{display:'flex'}}>
                <div>
                  <img src={obj?.author?.profileImage} style={{borderRadius: '50%'}}/> 
                </div>
                <div>
                  <h4>{obj?.author?.name}</h4>
                </div>
              </div>
              <div>
                <h3>{obj?.title}</h3>
                <p>{obj?.content}</p>
              </div>
              <div>
                <img src={obj?.images[0]}/>
              </div>
              <div></div>
            </div>
            )
        })}

        
    </div>
  )
}

export default FeedComponent;