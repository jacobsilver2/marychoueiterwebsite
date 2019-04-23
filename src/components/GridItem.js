import React, {useState} from 'react';
import {Link} from 'gatsby';
import {spring, Motion} from 'react-motion';
import styled from 'styled-components';

const StyledGridItem = styled.div`
  img {
    width: 100%;
    object-fit: fill;
    opacity: 1;
    background: black;
  }
`;

const GridItem = ({slug, imageURL, title}) => {
  const [isHovering, setIsHovering] = useState(false);
  const getSpringProps = () => {
    return {
      defaultStyle: {
        scale: 1.15,
        marginTop: 25,
        imageOpacity: 0.7,
        opacity: 0,             
      },
      style:{
        scale: spring(isHovering ? 1 : 1),
        marginTop: spring(isHovering ? 22 : 25),
        imageOpacity: spring(isHovering ? 0.4 : 0.7),
        opacity: spring(isHovering ? 1 : 0)    
      },
    };
  }

  return (
    <Motion {...getSpringProps()}>
      {motionStyle => {
        let styleImage = {
        transform: 'scale(' + motionStyle.scale + ')',
        opacity: motionStyle.imageOpacity, 
      };
      let styleSubtitle = { opacity: motionStyle.opacity, };
        return (
          <StyledGridItem onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <Link to={`/work/${slug}`}>
              <>
                <img style={styleImage} src={imageURL} alt="featured_image"/>
                <div style={styleSubtitle}><p>{title}</p></div>
              </>
            </Link>
          </StyledGridItem>
        )
      }}
    </Motion>
  )
}

export default GridItem;