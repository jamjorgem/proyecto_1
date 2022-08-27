import React, { useState } from 'react';
import getRandomJoke from '../../../services/chuckNorrisService';

const ChuckNorrisExample = () => {

    const [joke, setJoke] = useState(null);

    const obtainJoke = () => {
        getRandomJoke()
            .then((response) => {
                console.log(response.data);
                setJoke(response.data)
            })
            .catch((error) => {
                alert('something is wrong', error)
            })

    }

    const [like, setLike] = useState(0);
    const likeJoke = () => {
        setLike(like + 1);
    }
    const [unlike, setUnlike] = useState(0)
    const unlikeJoke = () => {
        setUnlike(unlike + 1);
    }

    return (
        <div>
            {joke != null ?
                (
                    <div>
                        <img src={joke.icon_url} alt="icon" />
                        <h3>
                            {joke.value}
                        </h3>
                        <button onClick={obtainJoke}>Obtain other random Joke</button>
                        <button onClick={likeJoke}>Like</button>
                        <button onClick={unlikeJoke}>Unlike</button>
                        <br />
                        <p>
                            Joke i Like : {like}<br />
                            Jose i Unlike : {unlike}
                        </p>
                    </div>
                )
                :
                (
                    <div>
                        <p>Clic for obtain a joke</p>
                        <button onClick={obtainJoke}>Obtain Joke</button>
                    </div>
                )
            }
        </div>
    );
}

export default ChuckNorrisExample;
