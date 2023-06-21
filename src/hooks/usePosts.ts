import {useState, useEffect} from 'react';
import {postResponse} from "../interfaces";
import defaultPost from "../utils/templates/postResponse";
import type {Query} from "./posts.interface";
import {get as param} from "../utils/dictionaries";

const usePosts = ({get, query}: Query ): {posts: postResponse[]} => {
    // @ts-ignore
    const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;
    if(get === 'all') query = undefined;
    const Key = get ? param[get] : '';
    const Value = get && query ? query : '';

    const [posts, setPosts] = useState<postResponse[]>([]);

    useEffect(()=> {
       try{
           fetch(`${BASE_URL}wp-json/wp/v2/posts${Key}${Value}`)
               .then(el => el.json())
               .then(el => setPosts(el))
               .catch(() => setPosts([defaultPost]))
       }catch (error){
           console.error(error)
       }
    }, [BASE_URL, Key, Value])

    return {posts}
}

export default usePosts;
