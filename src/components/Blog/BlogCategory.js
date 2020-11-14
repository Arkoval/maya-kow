import React from 'react';
import styled from 'styled-components';

const StyledItem = styled.li`
  margin-top: 0.5rem;
  padding: 0.5rem;

  &:hover {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.darkGreen};
  }
  position: relative;
`;
const StyledLabel = styled.label`
  cursor: pointer;
  color: ${({ checked, theme }) =>
    checked ? theme.colors.green : theme.colors.dark};
  font-weight: ${({ checked }) => (checked ? '600' : '500')};
  font-size: ${({ size }) => (size ? size + 'rem' : '1rem;')};
`;
const StyledInput = styled.input`
  appearance: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  outline: none;
  cursor: pointer;
`;
const BlogCategory = ({ category, handleChange, checked, size }) => {
  return (
    <StyledItem>
      <StyledLabel
        checked={checked}
        name={category}
        htmlFor={category}
        size={size}
      >
        {category}
      </StyledLabel>
      <StyledInput
        type="checkbox"
        name={category}
        checked={checked}
        onChange={handleChange}
      />
    </StyledItem>
  );
};

export default BlogCategory;
