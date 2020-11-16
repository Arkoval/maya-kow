import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import HTMLRenderer from 'react-html-renderer';
import { useStaticQuery, graphql } from 'gatsby';
import Quote from '../../images/quote.inline.svg';
import { animationCarousel } from '../../utils/Animations';

const StyledSection = styled.section`
  position: relative;
  width: 95%;
  margin: 0 auto;

  ${({ theme }) => theme.media.md} {
    display: grid;
    place-items: center right;
    min-height: 55vh;
  }
`;
const StyledWrapper = styled.div`
  ${({ theme }) => theme.mixins.flex('flex', 'row', 'center', 'space-between')}
  width: 100%;
  position: relative;
  ${({ theme }) => theme.media.md} {
    height: 100%;
    width: 70%;
  }
`;
const StyledCard = styled.div`
  margin: 4rem 0.5rem;
  width: 90%;
  ${({ theme }) => theme.media.md} {
    height: 100%;
    width: 70%;
  }
`;
const StyledParagraphContainer = styled.div``;
const StyledParagraph = styled.p`
  margin: 0.5rem 0;
`;
const StyledName = styled.strong`
  font-weight: 600;
  display: block;
  text-align: right;
  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }
`;
const StyledPosition = styled.p`
  display: block;
  text-align: right;
`;
const StyledHeading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.green};
  opacity: 0.3;
  font-size: 2rem;
  line-height: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  ${({ theme }) => theme.media.md} {
    font-size: 6vw;
  }
`;
const StyledSvg = styled(Quote)`
  fill: ${({ theme }) => theme.colors.green};
  height: 4rem;
  width: 4rem;
  position: absolute;
  top: 0;
  right: 5%;
  ${({ theme }) => theme.media.md} {
    left: 5%;
  }
`;

const StyledButton = styled.button`
  width: 10%;
  font-family: ${({ theme }) => theme.fonts.heading};
  background-color: transparent;
  transform: scaleY(2);
  outline: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  font-weight: 100;

  ${({ theme }) => theme.media.md} {
    font-size: 2rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }
`;

const Opinions = () => {
  let element = useRef(null);
  let [direction, setDirection] = useState('');
  const { allPrismicOpinions } = useStaticQuery(query);
  const opinions = allPrismicOpinions.nodes;
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    index < opinionList.length - 1 ? setIndex(index + 1) : setIndex(0);
    setDirection('right');
  };
  const handlePrev = () => {
    index <= 0 ? setIndex(opinionList.length - 1) : setIndex(index - 1);
    setDirection('left');
  };

  useEffect(() => {
    animationCarousel(element, direction);
  });

  const opinionList = opinions.map((opinion, id) => {
    return (
      <StyledCard ref={e => (element = e)} key={id}>
        <StyledParagraphContainer>
          <HTMLRenderer
            html={opinion.data.text.html}
            components={{
              strong: props => <StyledStrong {...props} />,
              p: props => <StyledParagraph {...props} />,
            }}
          />
        </StyledParagraphContainer>
        <StyledName>{opinion.data.name}</StyledName>
        <StyledPosition>{opinion.data.position}</StyledPosition>
      </StyledCard>
    );
  });

  return (
    <StyledSection id={'opinie'}>
      <StyledHeading>opinie</StyledHeading>
      <StyledWrapper>
        <StyledSvg />
        <StyledButton onClick={handlePrev}>&#60;</StyledButton>
        {opinionList[index]}
        <StyledButton onClick={handleNext}>&#62;</StyledButton>
      </StyledWrapper>
    </StyledSection>
  );
};
export default Opinions;

export const query = graphql`
  query {
    allPrismicOpinions {
      nodes {
        data {
          text {
            text
            html
          }
          name
          position
        }
      }
    }
  }
`;
