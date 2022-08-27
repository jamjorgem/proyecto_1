import React, { useState, useEffect } from 'react';
import { getAllUsers, getUserDetails, login } from '../../services/fetchService';

const FetchExample = () => {

    const [users, setUsers] = useState([]);
    const [pages, setPages] = useState(2);
    const [totalUsers, setTotalUsers] = useState(12);
    const [usersPerPage, setusersPerPage] = useState(6);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        obtainUsers()
    }, []);

    const obtainUsers = () => {
        getAllUsers(1)
            .then((response) => {
                console.log('all users', response.data);
                setUsers(response.data);
                setPages(response.total_pages);
                setTotalUsers(response.total);
                setusersPerPage(response.per_page)
            })
            .catch((error) => {
                alert(`something  is wrong: ${error}`)
            })
            .finally(() => {
                console.log('obtain users');
                console.table(users);
            })
    }

    const obtainPagedUsers = (page) => {
        getAllUsers(page)
            .then((response) => {
                console.log('all page users', response.data);
                setUsers(response.data);
                setPages(response.total_pages);
                setTotalUsers(response.total);
                setusersPerPage(response.per_page)
            })
            .catch((error) => {
                alert(`something  is wrong: ${error}`)
            })
            .finally(() => {
                console.log('obtain users');
                console.table(users);
            })
    }

    const obtainUserDetails = (id) => {
        getUserDetails(id)
            .then((response) => {
                console.log('users', response.data);
                setSelectedUser(response.data)
            })
            .catch((error) => {
                alert(`something  is wrong: ${error}`)
            })
            .finally(() => {
                console.log('obtain user');
                console.table(users);
            })
    }

    const authUser = () => {
        login('eve.holt@reqres.in', 'cityslicka')
            .then((response) => {
                console.log('TOKEN', response.token);
                sessionStorage.setItem('token', response.token);
            })
            .catch((error) => {
                alert(`something  is wrong: ${error}`)
            })
            .finally(() => {
                console.log('obtain login-navigate to index');
            })
    }

    return (
        <div>
            <button onClick={authUser}>Login</button>

            <h2>Users</h2>
            {users.map((users, index) => (
                <p key={index} onClick={() => obtainUserDetails(users.id)}>
                    {users.first_name} {users.last_name}
                </p>
            )
            )}
            <div>
                {selectedUser != null ?
                    (
                        <div>
                            <h3>user Details</h3>
                            {selectedUser && (
                                <div>
                                    <p>{selectedUser.first_name}</p> <p>{selectedUser.last_name}</p>
                                    <p>{selectedUser.email}</p>
                                    <img alt='Avatar' src={selectedUser.avatar} style={{ height: '150px', width: '150px' }} />
                                </div>
                            )
                            }
                        </div>
                    ) :
                    (<h6>Please click on a user to see its details</h6>)}
            </div>
            <p>showing {usersPerPage} user of {totalUsers} total.</p>
            <button onClick={() => obtainPagedUsers(1)}>
                1
            </button>
            <button onClick={() => obtainPagedUsers(2)}>
                2
            </button>
        </div>
    );
}

export default FetchExample;
