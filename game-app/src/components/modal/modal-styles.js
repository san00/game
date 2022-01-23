import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const ModalOverlayBackGrnd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 20vh;
  left: 35%;
  width: 30%;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
  @media (min-width: 768px) {
    ModalOverlayBackGrnd {
      width: 40rem;
      /* left: calc(50% - 20rem); */
    }
  }

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
export const ModalImage = styled.img`
  display: flex;
  cursor: pointer;
`;
