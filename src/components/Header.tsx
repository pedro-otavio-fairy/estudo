import React from 'react';
import { Menu } from 'antd';

const {SubMenu} = Menu;

const Header = () => {
    return (

        // <Menu mode="horizontal">
        //     <Menu.Item key="home">Início</Menu.Item>
        //     <Menu.Item key="about">Sobre</Menu.Item>
        //     <SubMenu key="sub1" title="Mais">
        //         <Menu.Item key="setting:1">Configuração 1</Menu.Item>
        //         <Menu.Item key="setting:2">Configuração 2</Menu.Item>
        //     </SubMenu>
        // </Menu>

        <div>
            <header className="p-4">
                <h1 className="font-bold text-2xl text-white max-w-sm mx-auto text-center p-4 bg-slate-600 rounded-xl shadow-xl shadow-slate-800">Meu Site</h1>
            </header>
        </div>
        
    );

};

export default Header;