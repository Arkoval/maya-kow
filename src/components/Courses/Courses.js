import React, { useState, useEffect, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import HTMLRenderer from 'react-html-renderer';

const StyledSection = styled.section`
  width: 100%;
  margin: 0 auto;
  ${({ theme }) =>
    theme.mixins.flex('flex', 'column', 'center', 'space-between')}
  position: relative;
  ${({ theme }) => theme.media.md} {
    min-height: 80vh;
    flex-direction: row;
    width: 90%;
  }
  ${({ theme }) => theme.media.xl} {
    width: 80%;
  }
`;
const StyledWrapper = styled.div`
  ${({ theme }) =>
    theme.mixins.flex('flex', 'column', 'center', 'space-between')}
  ${({ theme }) => theme.media.sm} {
    flex-direction: row;
  }
`;
const StyledHeading = styled.h1`
  font-size: 2.5rem;
  opacity: 0.3;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.heading};

  ${({ theme }) => theme.media.sm} {
    font-size: 4rem;
  }
  ${({ theme }) => theme.media.md} {
    font-size: 4rem;
    line-height: 0.8;
    transform: rotate(180deg);
    writing-mode: vertical-lr;
    margin-right: 2rem;
  }
  ${({ theme }) => theme.media.xxl} {
    font-size: 5rem;
  }
`;
const StyledCard = styled.div`
  width: 95%;
  padding-top: 1rem;
  margin: 1rem auto;
  box-shadow: -5px 6px 13px 0px rgba(0, 0, 0, 0.2);
  background-color: white;
  ${({ theme }) =>
    theme.mixins.flex('flex', 'column-reverse', 'center', 'space-between')}

  ${({ theme }) => theme.media.md} {
    padding-top: 0;
    max-width: 70vw;
    margin: 2rem auto;

    ${({ theme }) =>
      theme.mixins.flex('flex', 'row', 'flex-start', 'space-between')};

    &:nth-of-type(2n) {
      ${({ theme }) =>
        theme.mixins.flex(
          'flex',
          'row-reverse',
          'flex-start',
          'space-between',
        )};
    }
    ${({ theme }) => theme.media.xl} {
      max-width: 60vw;
    }
  }
`;
const StyledCardWrapper = styled.div`
  margin: 2rem;
  ${({ theme }) =>
    theme.mixins.flex('flex', 'column', 'flex-start', 'flex-start')}
`;
const StyledInnerWrapper = styled.div`
  ${({ theme }) =>
    theme.mixins.flex('flex', 'column', 'flex-start', 'flex-start')}

  ${({ theme }) => theme.media.sm} {
    height: 45vh;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.red};
    }
  }
`;
const StyledSubHeading = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.red};
  font-family: ${({ theme }) => theme.fonts.heading};
  ${({ theme }) => theme.media.sm} {
    font-size: 2rem;
  }
`;
const StyledParagraph = styled.p`
  margin: 0.5rem 0;
`;
const StyledStrong = styled.strong`
  margin: 0.5rem 0;
  font-weight: 600;
`;
const StyledPlace = styled.h3`
  margin-top: 1rem;
  font-weight: 600;
`;
const StyledDate = styled.h3`
  font-weight: 600;
  margin-bottom: 2rem;
  margin-top: 0.5rem;
`;
const StyledImage = styled.img`
  height: 50%;
  width: 90%;
  object-fit: cover;
  ${({ theme }) => theme.media.sm} {
    height: 60vh;
    min-width: 22vw;
    object-fit: cover;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.light};
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.red};
  margin-top: 1rem;
  align-self: flex-end;
`;
const StyledButton = styled.button`
  display: none;
  background-color: transparent;
  outline: none;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 3rem;
  font-weight: 600;
  transform: scaleY(2);
  color: ${({ theme }) => theme.colors.dark};
  border: none;
  cursor: pointer;
  padding: 1rem 2rem;
  ${({ theme }) => theme.media.sm} {
    display: block;
  }
`;

const OfferOnline = ({ courses, heading }) => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleNext = () => {
    index < course.length - 1 ? setIndex(index + 1) : setIndex(0);
  };
  const handlePrev = () => {
    index <= 0 ? setIndex(course.length - 1) : setIndex(index - 1);
  };

  function updateSize() {
    setIsMobile(window.screen.width < 768);
  }

  useLayoutEffect(() => {
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, [isMobile]);

  const course = courses.map((course, i) => {
    return (
      <StyledCard key={i}>
        <StyledCardWrapper>
          <StyledInnerWrapper>
            <StyledSubHeading>
              {course.data.title.text}
              <br />
              {course.data.subtitle.text}
            </StyledSubHeading>
            {course.data.place && (
              <StyledPlace>Miejsce: {course.data.place}</StyledPlace>
            )}
            <StyledDate>Start: {course.data.date}</StyledDate>
            <HTMLRenderer
              html={course.data.text.html}
              components={{
                strong: props => <StyledStrong {...props} />,
                p: props => <StyledParagraph {...props} />,
              }}
            />
          </StyledInnerWrapper>
          <StyledLink to={course.data.link.url}>zobacz szczegóły!</StyledLink>
        </StyledCardWrapper>
        <StyledImage src={course.data.image.url} alt={course.data.image.alt} />
      </StyledCard>
    );
  });

  return (
    <StyledSection>
      <StyledHeading>{heading}</StyledHeading>
      <StyledWrapper>
        <StyledButton onClick={handlePrev}>&#60;</StyledButton>
        {isMobile ? course : course[index]}
        <StyledButton onClick={handleNext}>&#62;</StyledButton>
      </StyledWrapper>
    </StyledSection>
  );
};

export default OfferOnline;
