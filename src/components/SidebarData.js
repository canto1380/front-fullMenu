import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import SettingsIcon from '@material-ui/icons/Settings';

export const SidebarData =[
    {
        tittle: "Home",
        icon: <HomeIcon />,
        link:"/admin-cliente"
    },
    {
        tittle: "Categorias",
        icon: <CategoryIcon />,
        link:"/admin-cliente/categorias"
    },
    {
        tittle: "Productos",
        icon: <FastfoodIcon />,
        link:"/admin-cliente/productos"
    },
    {
        tittle: "Usuarios",
        icon: <PeopleAltIcon />,
        link:"/admin-cliente/usuarios"
    },
    {
        tittle: "Pedidos",
        icon: <BorderColorIcon />,
        link:"/pedidos"
    },
    {
        tittle: "Configuracion",
        icon: <SettingsIcon />,
        link:"/configuracion"
    }
]

export default SidebarData
