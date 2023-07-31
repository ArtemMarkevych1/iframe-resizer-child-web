import {SettingOutlined} from '@ant-design/icons';
import {Menu} from 'antd';
import {useState} from 'react';
import {Link, Outlet} from 'react-router-dom';

const items = [
    {
        label: 'SAA',
        key: 'SAA',
        icon: <SettingOutlined/>,
        children: [
            {
                type: 'group',
                label: 'Maarek',
                children: [
                    {
                        label: <Link to="/saa/maarek/v-1">Maarek-v-1</Link>,
                        key: 'saa/maarek/v-1',
                    },
                    {
                        label: <Link to="/saa/maarek/v-2">Maarek-v-2</Link>,
                        key: 'saa/maarek/v-2',
                    },
                    {
                        label: <Link to="/saa/maarek/v-3">Maarek-v-3</Link>,
                        key: 'saa/maarek/v-3',
                    },
                    {
                        label: <Link to="/saa/maarek/v-4">Maarek-v-4</Link>,
                        key: 'saa/maarek/v-4',
                    },
                    {
                        label: <Link to="/saa/maarek/v-5">Maarek-v-5</Link>,
                        key: 'saa/maarek/v-5',
                    },
                    {
                        label: <Link to="/saa/maarek/v-6">Maarek-v-6</Link>,
                        key: 'saa/maarek/v-6',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Neil',
                children: [
                    {
                        label: <Link to="/saa/neil/v-1">Neil-v-1</Link>,
                        key: 'saa/Neil/v-1',
                    },
                    {
                        label: <Link to="/saa/neil/v-2">Neil-v-2</Link>,
                        key: 'saa/Neil/v-2',
                    },
                    {
                        label: <Link to="/saa/neil/v-3">Neil-v-3</Link>,
                        key: 'saa/Neil/v-3',
                    },
                    {
                        label: <Link to="/saa/neil/v-4">Neil-v-4</Link>,
                        key: 'saa/Neil/v-4',
                    },
                    {
                        label: <Link to="/saa/neil/v-5">Neil-v-5</Link>,
                        key: 'saa/Neil/v-5',
                    },
                    {
                        label: <Link to="/saa/neil/v-6">Neil-v-6</Link>,
                        key: 'saa/Neil/v-6',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Indus',
                children: [
                    {
                        label: <Link to="/saa/indus/v-1">Indus-v-1</Link>,
                        key: 'saa/indus/v-1',
                    },
                    {
                        label: <Link to="/saa/indus/v-2">Indus-v-2</Link>,
                        key: 'saa/indus/v-2',
                    },
                    {
                        label: <Link to="/saa/indus/v-3">Indus-v-3</Link>,
                        key: 'saa/indus/v-3',
                    },
                    {
                        label: <Link to="/saa/indus/v-4">Indus-v-4</Link>,
                        key: 'saa/indus/v-4',
                    },
                    {
                        label: <Link to="/saa/indus/v-5">Indus-v-5</Link>,
                        key: 'saa/indus/v-5',
                    },
                    {
                        label: <Link to="/saa/indus/v-6">Indus-v-6</Link>,
                        key: 'saa/indus/v-6',
                    },
                ],
            },
        ],
    },

    {
        label: 'DEV',
        key: 'DEV',
        icon: <SettingOutlined/>,
        children: [
            {
                type: 'group',
                label: 'Maarek',
                children: [
                    {
                        label: <Link to="/dev/maarek/v-1">Maarek-v-1</Link>,
                        key: 'dev/maarek/v-1',
                    },
                    {
                        label: <Link to="/dev/maarek/v-2">Maarek-v-2</Link>,
                        key: 'dev/maarek/v-2',
                    },
                    {
                        label: <Link to="/dev/maarek/v-3">Maarek-v-3</Link>,
                        key: 'dev/maarek/v-3',
                    },
                    {
                        label: <Link to="/dev/maarek/v-4">Maarek-v-4</Link>,
                        key: 'dev/maarek/v-4',
                    },
                    {
                        label: <Link to="/dev/maarek/v-5">Maarek-v-5</Link>,
                        key: 'dev/maarek/v-5',
                    },
                    {
                        label: <Link to="/dev/maarek/v-6">Maarek-v-6</Link>,
                        key: 'dev/maarek/v-6',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Neil',
                children: [
                    {
                        label: <Link to="/dev/neil/v-1">Neil-v-1</Link>,
                        key: 'dev/neil/v-1',
                    },
                    {
                        label: <Link to="/dev/neil/v-2">Neil-v-2</Link>,
                        key: 'dev/neil/v-2',
                    },
                    {
                        label: <Link to="/dev/neil/v-3">Neil-v-3</Link>,
                        key: 'dev/neil/v-3',
                    },
                    {
                        label: <Link to="/dev/neil/v-4">Neil-v-4</Link>,
                        key: 'dev/neil/v-4',
                    },
                    {
                        label: <Link to="/dev/neil/v-5">Neil-v-5</Link>,
                        key: 'dev/neil/v-5',
                    },
                    {
                        label: <Link to="/dev/neil/v-6">Neil-v-6</Link>,
                        key: 'dev/neil/v-6',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Indus',
                children: [
                    {
                        label: <Link to="/dev/indus/v-1">Indus-v-1</Link>,
                        key: 'dev/indus/v-1',
                    },
                    {
                        label: <Link to="/dev/indus/v-2">Indus-v-2</Link>,
                        key: 'dev/indus/v-2',
                    },
                    {
                        label: <Link to="/dev/indus/v-3">Indus-v-3</Link>,
                        key: 'dev/indus/v-3',
                    },
                    {
                        label: <Link to="/dev/indus/v-4">Indus-v-4</Link>,
                        key: 'dev/indus/v-4',
                    },
                    {
                        label: <Link to="/dev/indus/v-5">Indus-v-5</Link>,
                        key: 'dev/indus/v-5',
                    },
                    {
                        label: <Link to="/dev/indus/v-6">Indus-v-5</Link>,
                        key: 'dev/indus/v-6',
                    },
                ],
            },
        ],
    },
];


const Header = () => {

    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <>
            <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={items}

            />
            <Outlet/>
        </>

    )
};
export default Header;
