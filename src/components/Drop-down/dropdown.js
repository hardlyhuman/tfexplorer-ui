import classes from './dropdown.module.css';
import React, { Component } from 'react';
class dropdown extends Component {
    state = {}

    render() {
        return ( <
            >
            <
            div className = { classes.header } > HEADER < /div> <
            div className = { classes.row } >
            <
            div className = { classes.column } >
            <
            div className = { classes.a } >
            <
            h2 > Tensor Flow Explorer < /h2> <
            p > Find the right commands you need without digging through the web < /p> <
            div className = { classes.dropdown } >
            <
            button onclick = "myFunction()"
            class = "dropbtn" > I want to: < /button> <
            div id = "myDropdown"
            class = "dropdown-content" >
            <
            a href = "#" > Add < /a> <
            a href = "#" > Clone < /a> <
            a href = "#" > Debug < /a> <
            a href = "#" > Configure < /a> <
            a href = "#" > Delete / Remove < /a> < /
            div > <
            /div> < /
            div > <
            /div> <
            div className = { classes.column } >
            <
            h2 > BLOCK 2 < /h2> <
            p > This is Block 2 < /p> < /
            div > <
            /div> <
            div className = { classes.footer } > FOOTER < /div> <
            script >
            function myFunction() {
                document.getElementById("myDropdown").classList.toggle("show");
            }
            window.onclick = function(event) {
                if (!event.target.matches('.dropbtn')) {
                    var dropdowns = document.getElementsByClassName("dropdown-content");
                    var i;
                    for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show')) {
                            openDropdown.classList.remove('show');
                        }
                    }
                }
            } <
            /script>


            <
            />
        );
    }
}

export default dropdown;