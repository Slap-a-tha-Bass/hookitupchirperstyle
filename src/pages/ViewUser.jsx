import React from 'react'
import { useState, useEffect } from 'react'
import ChirpLayout from '../components/ChirpLayout';
import { useParams } from 'react-router-dom'

const ViewUser = () => {

    const { id, name } = useParams();

    const [stories, setStories] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/comments');
            const stories = await res.json();
            setStories(stories);
        })();
    }, [])

    return (
        <div>
            
                <ChirpLayout>
                    Details for {id}
                    </ChirpLayout>
            
        </div>
    )
    
}

export default ViewUser
