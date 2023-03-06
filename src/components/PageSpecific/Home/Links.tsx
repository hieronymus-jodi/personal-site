import styled from 'styled-components';
import { COLOR } from '../../../constants';
import { ArrowLinkCard } from '../../Content';

import { Links_Data } from '../../../data';

const LinksWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 1.8rem;
  align-items: center;

  background: ${COLOR.Pastel_Yellow};
  padding: 4rem 0 8rem;
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
