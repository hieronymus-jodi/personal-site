import styled from 'styled-components';
import { COLOR, SCREEN_WIDTH } from '../../../constants';
import { ArrowLinkCard } from '../../Content';

import { Links_Data } from '../../../data';

const LinksWrapper = styled.div`
  display: grid;
  row-gap: 1.8rem;
  justify-items: center;
  justify-content: center;
  gap: 3rem;

  background: ${COLOR.Pastel_Yellow};
  padding: 4rem 0 8rem;

  @media only screen and (min-width: ${SCREEN_WIDTH.Tablet}) {
    padding: 6rem 2rem 10rem;
    grid-template-columns: auto auto;
  }

  @media only screen and (min-width: ${SCREEN_WIDTH.Desktop}) {
    padding: 6rem 0 10rem;
    gap: 3.5rem 5.5rem;
  }
`;

function Links() {
  return (
    <LinksWrapper>
      {Links_Data.map(({ heading, description, href, icon }, index) => {
        return (
          <ArrowLinkCard
            heading={heading}
            description={description}
            href={href}
            icon={icon}
            key={index}
          />
        );
      })}
    </LinksWrapper>
  );
}

export default Links;
