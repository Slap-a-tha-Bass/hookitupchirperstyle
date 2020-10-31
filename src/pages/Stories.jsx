import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ChirpLayout from '../components/ChirpLayout';

const Stories = () => {

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
            {stories.map(story => (
                <ChirpLayout>
                    <li key={story.id} className="list-group-item py-4 d-flex flex-column">
                        <span className="font-weight-bold">@{story.name}</span>
                        <span>{story.body}</span>
                    <Link className="btn btn-primary"to={`/users/${story.id}`}>View {story.name}</Link>
                    </li>
                </ChirpLayout>
            ))}
        </div>
    )
}

export default Stories
