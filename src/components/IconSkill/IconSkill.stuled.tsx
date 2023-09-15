import styled from '@emotion/styled';
import { myColor } from 'assets/colors/colors';

type Props = {
  top: string;
  left: string;
};
export const Container = styled.div(
  {
    top: '0px',
    left: '0px',
    position: 'absolute',
  },
  (props: Props) => ({ top: props.top, left: props.left })
);

export const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  width: 50px;
  height: 50px;
  background-color: ${myColor.backGraund.icon.skill};
  border-radius: 50%;
  border: 1px solid ${myColor.border.iconPlanet};
  svg {
    width: 30px;
    height: 30px;
  }
`;

export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(43px, 40px);
  z-index: 1;
  width: max-content;
  padding: 5px 10px;
  color: ${myColor.text.accentExp};
  background: radial-gradient(
    circle at bottom right,
    rgba(127, 73, 99, 0.6) 0,
    rgba(34, 62, 76, 0.5) 100%
  );

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  border-right: 1px solid rgba(152, 152, 152, 0.18);
  border-left: 1px solid rgba(43, 43, 43, 0.3);
  border-bottom: 1px solid rgba(43, 43, 43, 0.3);
  border-radius: 0.75rem;
`;
