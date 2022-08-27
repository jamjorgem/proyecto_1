import React, { useEffect, useState } from 'react';
import getRandomUser from '../../services/axiosService';


const AxiosExample = () => {

    const [user, setUser] = useState(null)

    // useEffect(() => {
    //     obtainUser();
    // }, []);

    const obtainUser = () => {
        getRandomUser()
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data.results[0]);
                    setUser(response.data.results[0]);
                }
            })
            .catch((error) => {
                alert('something is wrong', error);
            })
    }
    return (
        <div>
            <h1>Axios Example</h1>
            {user != null ?
                (
                    <div>
                        <h2>{user.name.title} {user.name.name} {user.name.last}</h2>
                        <h3>{user.email}</h3>
                        <img src={user.picture.large} alt="avatar" />
                    </div>
                )
                :
                (<div>
                    <p>Generate new user</p>
                    <button onClick={obtainUser}>Generate Random User</button>
                </div>)
            }
        </div>
    );
}

export default AxiosExample;
