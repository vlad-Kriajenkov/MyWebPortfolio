import { FC, PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import { Blackdrop } from './modal.styled';
interface IProps {
  handleBurger: boolean;
}
const portalDiv = document.getElementById('modal-root') as HTMLElement;

const Modal: FC<PropsWithChildren<IProps>> = ({ children, handleBurger }) => {
  return ReactDOM.createPortal(
    <Blackdrop className={handleBurger ? 'active': ''}>
      <div>{children}</div>
    </Blackdrop>,
    portalDiv
  );
};

export { Modal };
