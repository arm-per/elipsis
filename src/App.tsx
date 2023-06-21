import type {ReactElement} from "react";
import './App.css'
import usePosts from "./hooks/usePosts";

function App(): ReactElement {
    const {posts} = usePosts({get: 'id', query: 1});

    return (
        <div className="App">
            {
                posts.map((el, index) => {
                    return <div key={index}>
                        <h1>{el.title.rendered}</h1>
                        <hr/>
                        <div className="container" dangerouslySetInnerHTML={{__html: el.excerpt.rendered}}></div>
                        {el.featured_media_src_url && <img src={el.featured_media_src_url} alt=""/>}
                    </div>
                })
            }
        </div>
      )
}

export default App
