import React from 'react';
import BlogMain from '../components/Blog/BlogMain';
import CoffeeTemplate from '../layout/CoffeeTemplate';
import { theme } from '../theme/theme';

const Blog = () => {
  return (
    <CoffeeTemplate color={theme.colors.green}>
      <BlogMain />
    </CoffeeTemplate>
  );
};

export default Blog;
