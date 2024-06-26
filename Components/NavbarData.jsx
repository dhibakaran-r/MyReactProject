import React from 'react'
import * as faicon from "react-icons/fa"
import * as aiicon from "react-icons/ai"
import * as liaicon from "react-icons/lia"
import * as mdicon from "react-icons/md"
import * as gricon from "react-icons/gr";
import * as tiicon from "react-icons/ti";

export const NavbarData = [
    
    {
        title: 'Dashboard',
        path: '/',
        icon: <mdicon.MdOutlineDashboard />,
        class: 'item-name'
    },
    
    {
        title: 'Product',
        path: '/product',
        icon: < tiicon.TiShoppingBag />,
        class: 'item-name'
    },
    
    {
        title: 'Quotation',
        path: '/quotation',
        icon: < gricon.GrDocumentText />,
        class: 'item-name'
    },
    
    {
        title: 'Invoice',
        path: '/invoice',
        icon: <aiicon.AiOutlineFileSearch />,
        class: 'item-name'
    },
    
    {
        title: 'Users',
        path: '/users',
        icon: <faicon.FaRegUser />,
        class: 'item-name'
    },
    
    {
        title: 'Customers',
        path: '/customers',
        icon: <liaicon.LiaPersonBoothSolid />,
        class: 'item-name'
    }
]

export default NavbarData