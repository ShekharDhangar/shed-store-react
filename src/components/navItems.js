import { FaShoppingCart, FaHeart, FaUserAlt } from '../icons/icons'

const navItems = [
    {
        title: "MEN",
        url: "/shop",
        className: 'nav-link',
        id: 1,
    },
    {
        title: "WOMEN",
        url: "/shop",
        className: 'nav-link',
        id: 2,
    },
    {
        title: "SHOP",
        url: "/shop",
        className: 'nav-link',
        id: 3,
    },
]

const navIconsData = [
    {
        id: 1,
        profileClass: 'profile-box',
        title: 'Profile',
        txtClassName: "icon-txt",
        icon: <FaUserAlt className='user-icon icon' />,
        logBtn: "Log out",
    },
    {
        id: 2,
        title: 'Wishlist',
        txtClassName: "icon-txt",
        icon: <FaHeart className='wishlist-icon icon' />,
    },
    {
        id: 3,
        title: 'Cart',
        txtClassName: "icon-txt",
        icon: <FaShoppingCart className='cart-icon icon' />,
    }
]

const contactUsMenu = [
    {
        title: "Help & Support",
        id: 1,
    },
    {
        title: "Feedback",
        id: 2,
    },
    {
        id: 3,
        title: "Become a Seller",
    }
]
const aboutUsMenu = [
    {
        title: "Our Story",
        id: 1,
    },
    {
        title: "Fanbook",
        id: 2,
    },
]
export { navItems, navIconsData, contactUsMenu, aboutUsMenu }