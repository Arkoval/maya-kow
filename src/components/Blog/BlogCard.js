import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const StyledImg = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
const StyledWrapper = styled.div`
width: 23rem;
height: 23rem;
box-shadow: 0px 0px 21px 1px rgba(0, 0, 0, 0.2);
background-color: ${({theme}) => theme.colors.light};
margin: 1rem 0;
position: relative;
`
const StyledHeading = styled.h2`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: white;
    font-size: 1.5rem;
    font-family: ${({theme}) => theme.fonts.heading};
    padding: 1rem;
`


const BlogCard = ({img, title, link}) => {
    return <StyledWrapper>
    <Link to={link}>
    <StyledImg src={img}></StyledImg>
        <StyledHeading>{title}</StyledHeading>
    </Link>
    </StyledWrapper>
}

export default BlogCard;