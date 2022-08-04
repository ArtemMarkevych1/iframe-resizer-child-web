import React from 'react';
import {useParams} from 'react-router-dom';
import {Button, Card} from 'react-bootstrap';
import {useNavigate} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {asyncGetUserProfile} from '../../actions/users';

import './style.css'
import Loader from '../loader/Loader';

function User() {

    let {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const user = useSelector(state => state.users.user)
    const loading = useSelector(state => state.users.userLoading)

    React.useEffect(() => {
        dispatch(asyncGetUserProfile(id))
    }, [dispatch, id])

    return (
        loading
            ? <Loader/>
            : <Card className="card">
                <Card.Body>
                    <Card.Title>Full name: {user?.data.name} {user?.data.surname}</Card.Title>
                    <Card.Text>
                        <p>Email: {user?.data.email}</p>
                    </Card.Text>
                    <Button variant="primary" className="btn" onClick={() => navigate('/users')}>Go back</Button>
                </Card.Body>
            </Card>
    );
}

export default User;
