import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar(){
    return(
        <nav id="navbar">
            <NavLink to="/" style={({ isActive, isPending, isTransitioning }) => {
                return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "white",
                viewTransitionName: isTransitioning ? "slide" : "",
                fontSize: "medium",
                marginRight: "2vw"
                };
            }}>Home</NavLink>
            <NavLink to="/about" style={({ isActive, isPending, isTransitioning }) => {
                return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "white",
                viewTransitionName: isTransitioning ? "slide" : "",
                fontSize: "medium"
                };
            }}>About</NavLink>
            <NavLink to="/learn" style={({ isActive, isPending, isTransitioning }) => {
                return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "white",
                viewTransitionName: isTransitioning ? "slide" : "",
                fontSize: "medium",
                marginLeft: "2vw"
                };
            }}>Learn</NavLink>
        </nav>
    )
}