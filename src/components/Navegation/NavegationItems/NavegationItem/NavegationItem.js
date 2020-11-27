import React from 'react';
import UnStyledLink from '../../UnStyledLink/UnStyledLink';
import StyledButton from '../../../UI/StyledComponents/StyledButton';
import classes from './NavegationItem.module.css';

const NavegationItem = (props)=>{
    return(
        <div className={classes.NavegationItem}>
            <StyledButton size={props.fontSize}>
                <UnStyledLink to={props.destination}>
                    {props.children}
                </UnStyledLink>
            </StyledButton>
        </div>
    )
}

export default NavegationItem;