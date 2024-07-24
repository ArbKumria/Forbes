import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: #0F0E1A;
    height: 85px;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1000px) / 5);
    z-index: 12;
    /* Third Nav */
    /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
    @font-face {
        font-family: 'Raleway';
        src: url('../fonts/static/Raleway-Medium.ttf') format('truetype');
        /* Add other font formats (e.g., woff, woff2) if available */
    }

    color: #FFFFFF;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 2rem;
    height: 100%;
    font-family: 'Raleway', sans-serif;
    cursor: pointer;
    border: 3px solid transparent;
    border-radius: 10px;
    transition: transform 0.2s ease, background 2s ease, color 0.5s ease;
    &:hover {
        color: #4D4E50; /* Change to your desired hover color */
        font-size: 1.2rem;
        text-shadow: 0 0 10px silver;
        border-color: #727272;
        font-weight: 700;
        animation: bounceAndFlash 0.5s ease infinite alternate;
    }

    @keyframes bounceAndFlash {
        0% {
            transform: translateY(2px);
            background: linear-gradient(90deg, #FFFFFF, #E1E0E8);
        }
        5% {
            background: linear-gradient(90deg, #E1E0E8, #B4B4B4);
        }
        15% {
            background: linear-gradient(90deg, #B4B4B4, #BAB9C2);
        }
        25% {
            background: linear-gradient(90deg, #BAB9C2, #595959)
        }
        50% {
            background: linear-gradient(90deg, #595959, #595959);
        }
        75% {
            background: linear-gradient(90deg, #595959, #BAB9C2)
        }
        85% {
            background: linear-gradient(90deg, #BAB9C2, #B4B4B4);
        }
        95% {
            background: linear-gradient(90deg, #B4B4B4, #E1E0E8)
        }
        100% {
            transform: translateY(-2px);
            background: linear-gradient(90deg, #E1E0E8, #FFFFFF);
        }
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
  white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
