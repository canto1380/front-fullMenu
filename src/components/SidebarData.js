import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import BorderColorIcon from '@material-ui/icons/BorderColor';
export const SidebarData =[
    {
        tittle: "Home",
        icon: <HomeIcon />,
        link:"/"
    },
    {
        tittle: "Categorias",
        icon: <CategoryIcon />,
        link:"/"
    },
    {
        tittle: "Productos",
        icon: <FastfoodIcon />,
        link:"/"
    },
    {
        tittle: "Usuarios",
        icon: <PeopleAltIcon />,
        link:"/"
    },
    {
        tittle: "Pedidos",
        icon: <BorderColorIcon />,
        link:"/"
    }
]

export default SidebarData
