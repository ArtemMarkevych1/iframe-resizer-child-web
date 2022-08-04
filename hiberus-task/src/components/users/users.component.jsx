import React from 'react';
import {Table} from 'react-bootstrap';
import {useNavigate} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {asyncGetUsersList} from '../../actions/users';
import Loader from '../loader/Loader';

import './style.css'

const Users = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const users = useSelector(state => state.users.users)
    const loading = useSelector(state => state.users.usersListLoading)

    React.useEffect(() => {
        dispatch(asyncGetUsersList())
    }, [dispatch]);

    return (
        loading
            ? <Loader/>
            : <>
                <h3 className="mt-5 text-center">Table with users</h3>
                <div className="table">
                    <Table striped bordered hover className="table" size="sm">
                        <thead>
                        <tr>
                            <th width="70">#</th>
                            <th width="170">Email</th>
                            <th width="340">Name</th>
                            <th width="340">Surname</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.data?.items?.map((user, index) => (
                            <tr key={user.id} onClick={() => {
                                navigate(`/users/${user.id}`)
                            }}>
                                <td>{index + 1}</td>
                                <td>{user.email}</td>
                                <td>{user.name}</td>
                                <td>{user.surname}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </>
    )

};

export default Users;
