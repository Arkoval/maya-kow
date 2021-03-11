import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import HTMLRenderer from 'react-html-renderer';
import { animationCarousel } from '../../utils/Animations';
import Powder from '../../images/powder.inline.svg';

const StyledSection = styled.section`
  width: 100%;
  margin: 0 auto;
  ${({ theme }) => theme.mixins.flex('flex', 'column', 'center', 'center')}
  position: relative;
  overflow: hidden;
  ${({ theme }) => theme.media.md} {
    min-height: 80vh;
  }
`;
const StyledWrapper = styled.div`
  ${({ theme }) =>
    theme.mixins.flex('flex', 'column', 'center', 'space-between')}
  ${({ theme }) => theme.media.sm} {
    flex-direction: row;
  }
  ${({ theme }) => theme.media.xl} {
    width: 90%;
  }
`;
const StyledHeading = styled.h1`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.paragraf};
  ${({ theme }) => theme.media.sm} {
    font-size: 1.5rem;
  }
`;
const StyledCard = styled.div`
  width: 100%;
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
      max-width: 90vw;
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
    padding-right: 0.5rem;

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
const StyledList = styled.ul``;
const StyledParagraph = styled.p`
  margin: 0.5rem 0;
`;
const StyledStrong = styled.strong`
  font-weight: 600;
`;
const StyledPlace = styled.h3`
  margin-top: 1rem;
`;
const StyledDate = styled.h3`
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
const StyledPowderSvg = styled(Powder)`
  display: none;
  position: absolute;
  right: -10%;
  bottom: -10%;
  width: 60%;
  z-index: -2;

  ${({ theme }) => theme.media.sm} {
    display: block;
  }
`;

const OfferOnline = ({ courses }) => {
  let element = useRef(null);
  let [direction, setDirection] = useState('');
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleNext = () => {
    index < course.length - 1 ? setIndex(index + 1) : setIndex(0);
    setDirection('right');
  };
  const handlePrev = () => {
    index <= 0 ? setIndex(course.length - 1) : setIndex(index - 1);
    setDirection('left');
  };

  function updateSize() {
    setIsMobile(window.screen.width < 768);
  }
  useEffect(() => {
    animationCarousel(element, direction);
  });

  useLayoutEffect(() => {
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, [isMobile]);

  const course = courses.map((course, i) => {
    return (
      <StyledCard ref={e => (element = e)} key={i}>
        <StyledCardWrapper>
          <StyledInnerWrapper>
            <StyledHeading>{course.data.title.text}</StyledHeading>
            <StyledSubHeading>{course.data.subtitle.text}</StyledSubHeading>
            {course.data.place && (
              <StyledPlace>
                miejsce: <StyledStrong>{course.data.place}</StyledStrong>{' '}
              </StyledPlace>
            )}
            <StyledDate>
              początek: <StyledStrong>{course.data.date}</StyledStrong>{' '}
            </StyledDate>
            <HTMLRenderer
              html={course.data.text.html}
              components={{
                strong: props => <StyledStrong {...props} />,
                p: props => <StyledParagraph {...props} />,
                ul: props => <StyledList {...props} />,
              }}
            />
          </StyledInnerWrapper>
          <StyledLink to={course.data.link.url} target="_blank">
            zobacz szczegóły!
          </StyledLink>
        </StyledCardWrapper>
        <StyledImage src={course.data.image.url} alt={course.data.image.alt} />
      </StyledCard>
    );
  });

  return (
    <StyledSection>
      <StyledPowderSvg />
      <StyledWrapper>
        <StyledButton onClick={handlePrev}>&#60;</StyledButton>
        {isMobile ? course : course[index]}
        <StyledButton onClick={handleNext}>&#62;</StyledButton>
      </StyledWrapper>
    </StyledSection>
  );
};

export default OfferOnline;
