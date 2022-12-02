import {Link} from "atomic-router-react";
import PropTypes from "prop-types";
import React from "react";
import SidebarMenu from 'react-bootstrap-sidebar-menu';

export const SideBar = ({items}) => {

    return (
        <SidebarMenu hide='md' expand='lg'>
            <SidebarMenu.Collapse getScrollValue={212}>
                <SidebarMenu.Header>
                    <SidebarMenu.Brand>
                        Logo
                    </SidebarMenu.Brand>
                    <SidebarMenu.Toggle as='div'>
                        T
                    </SidebarMenu.Toggle>
                </SidebarMenu.Header>
                <SidebarMenu.Body>
                    {
                        items.map(item => {
                            return (
                                <SidebarMenu.Nav key={item.title}>
                                    <SidebarMenu.Nav.Link as={Link} to={item.route} activeClassName="sidebar-menu-nav-link-active">
                                        <SidebarMenu.Nav.Title>
                                            {item.title}
                                        </SidebarMenu.Nav.Title>
                                    </SidebarMenu.Nav.Link>
                                </SidebarMenu.Nav>
                            );
                        })
                    }
                </SidebarMenu.Body>
            </SidebarMenu.Collapse>
        </SidebarMenu>
    );

};

SideBar.propTypes = {
    header: PropTypes.element,
    items: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.func,
        route: PropTypes.any.isRequired,
        title: PropTypes.string.isRequired
    })).isRequired,
    footer: PropTypes.element,
};
