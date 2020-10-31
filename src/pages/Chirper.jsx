import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ChirpItem from '../components/ChirpItem';
import ChirpLayout from '../components/ChirpLayout';

const Chirper = () => {


    // state = {
    // username: ''
    // }

    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const [chirps, setChirps] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setError(null)
    }, [username, message]);

    useEffect(() => { }, []);

    const handleClick = (e) => {
        e.preventDefault();
        // inhibits user from submitting without filling out entire form
        if (!username.length || !message.length) {
            setError('Required Fields');
            return;
        }
        // pushes into the chirps array the id, username, and message
        setChirps([...chirps, { id: uuidv4(), username, message }]);
        // resets username and message
        setMessage('');
        setUsername('');
    }

    return (
        <main className="container mt-3">
            <ChirpLayout>
                <form className="form-group p-3 border rounded shadow">
                    <input value={username} onChange={e => setUsername(e.target.value)} className="form-control mb-2" placeholder="Username" />
                    <textarea value={message} onChange={e => setMessage(e.target.value)} className="form-control mb-2" placeholder="Message" />
                    {error && <small className="text-danger">{error}</small>}
                    <div className="d-flex justify-content-end">
                        <button onClick={handleClick} className="btn btn-primary">Chirp!</button>
                    </div>
                </form>
            </ChirpLayout>

            <ChirpLayout>
                <ul className="list-group list-group-flush">
                    {/* maps through array and displays username and message */}
                    {chirps.map(chirp => (
                        <ChirpItem key={chirp.id} chirp={chirp} />
                    ))}

                </ul>
            </ChirpLayout>
        </main>
    )

}

export default Chirper
