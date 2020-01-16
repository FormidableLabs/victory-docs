import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Img = styled.img`
  max-width: 100%;
  box-shadow: -1rem 1rem 0px 0px ${({ theme }) => theme.color.darkRed};
  margin-bottom: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
  grid-gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Company = styled.h3`
  font-size: 2.5rem;
`;

const ShowcaseApp = props => {
  return (
    <Grid>
      <div>
        <Company>{props.company}</Company>
        <p>{props.description}</p>
      </div>
      <Img alt={props.screenshot.alt} src={props.screenshot.src} />
    </Grid>
  );
};

ShowcaseApp.propTypes = {
  company: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  screenshot: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  })
};

export default ShowcaseApp;
