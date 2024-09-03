"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './header.scss';

interface MenuItens {
    name: string;
    route: string;
}

interface MenuProps {
    list: MenuItens[];
}

const Head = ({ list }: MenuProps) => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <div className='container-head'>
            <div className='content-head' onClick={() => window.alert("Você já está na página principal")}>
                <img className='head-img' src='/logo.png' alt='Logo da Alpha Academia' />
            </div>
            <div className='gallery-menu'>
                <ul className='content-gallery-menu'>
                    {list?.map((item, index) => (
                        <Link className={`menu-item ${item.route === "/register" ? "alpha" : item.route}`} href={item.route} key={index}>
                            {item.name}
                        </Link>
                    ))}
                </ul>
            </div>
            <Button
                className='menu-button'
                type='text'
                icon={<MenuOutlined />}
                onClick={showDrawer}
            />
            <Drawer
                title='Menu'
                placement='right'
                onClose={onClose}
                className='menu-draw'
                open={visible}
                style={{ padding: 0 }}
            >
                <ul className='drawer-menu'>
                    {list?.map((item, index) => (
                        <li className={item.route === "/register" ? "drawer-alpha" : item.route} key={index} onClick={onClose} >
                            <Link href={item.route}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </Drawer>
        </div>
    );
};

export default Head;
