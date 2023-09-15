import styled from '@emotion/styled';
import { myColor } from 'assets/colors/colors';

export const Titile = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 2rem;
  color: ${myColor.text.accent};

  display: flex;
  align-items: center;
`;

export const Description = styled.p`
  margin-left: 20px;
  color: ${myColor.link.defoult};
`;
// Parent for ScilList
export const DescriptionList = styled.ul`
  margin-left: 20px;
`;
// Parent for ScilItem
export const DescriptionItem = styled.li`
  color: ${myColor.link.defoult};
  margin-bottom: 10px;
`;

export const ScilList = styled(DescriptionList)`
  margin-left: 20px;
  display: flex;
  flex-wrap: wrap;
`;
export const ScilItem = styled(DescriptionItem)`
  margin-right: 5px;
`;
