import React from "react"
import styled from "styled-components"

const StyledItem = styled.li`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
 
`
const StyledLabel = styled.label`
 cursor: pointer;
 background-color: ${({checked, theme}) => checked  ? theme.colors.green : 'transparent'};
 `
const StyledInput = styled.input`
/* appearance: none; */

`
const BlogCategory = ({ category, handleChange, checked}) => {


  return (
    <StyledItem>
      <StyledLabel  checked={checked} name={category} htmlFor={category}>
        {category}
      </StyledLabel >
      <StyledInput
        type="checkbox"
        name={category}
        checked={checked}
        onChange={handleChange}
      />
    </StyledItem>
  )
}

export default BlogCategory
