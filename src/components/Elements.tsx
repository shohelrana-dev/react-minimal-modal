import styled, { css, keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`

const fadeInSlideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const fadeOutSlideDown = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(15px);
  }
`

export const ModalContainer = styled.div<{ position?: 'center' | 'top' }>`
   position: fixed;
   width: 100vw;
   height: 100dvh;
   top: 0;
   left: 0;
   display: flex;
   flex-wrap: wrap;
   flex-direction: column;
   align-content: center;
   z-index: 9999;
   justify-content: ${({ position = 'center' }) => (position === 'top' ? 'flex-start' : 'center')};
`

export const DarkOverlay = styled.div<{ exit: boolean }>`
   background-color: rgba(0, 0, 0, 0.2);
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   z-index: 9999;
   opacity: 0;
   ${({ exit }) =>
      css`
         animation: ${exit ? fadeOut : fadeIn} 0.5s forwards;
      `}
`

export const Popup = styled.div<{ width?: number; exit: boolean }>`
   padding: 20px;
   border-radius: 18px;
   width: 90%;
   max-height: 75vh;
   border: 1px solid #ddd;
   background: #fff;
   z-index: 99999;
   opacity: 0;
   display: flex;
   flex-direction: column;
   transform: translateY(-15px);
   max-width: ${({ width = 550 }) => `${width}px`};
   ${({ exit }) =>
      css`
         animation: ${exit ? fadeOutSlideDown : fadeInSlideUp} 0.5s ease-out forwards;
      `}
`

export const Header = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
`

export const Title = styled.h2<{ fontSize?: number }>`
   color: #000000c9;
   margin: 0 0 12px;
   font-weight: 600;
   ${({ fontSize = 22 }) =>
      css`
         font-size: ${fontSize}px;
      `}
`

export const ModalBody = styled.div`
   height: 100%;
   overflow-y: auto;
   flex-grow: 1;
`

export const IconButton = styled.button`
   cursor: pointer;
   border-radius: 50%;
   border: none;
   color: rgb(233 30 99);
   height: 32px;
   width: 32px;
   overflow: hidden;
   display: flex;
   justify-content: center;
   align-items: center;
   margin: -4px 0 0;
   background: #fff !important;
   transition-property: all;
   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
   transition-duration: 0.2s;
   &:hover {
      background: rgba(0, 121, 211, 0.1) !important;
   }
`
