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
    border-radius: 18px;
    width: 90%;
    padding: 20px;
    border: 1px solid #ddd;
    background: #fff;
    z-index: 99999;
    opacity: 0;
    transform: translateY(-15px);
    max-width: ${({ width = 550 }) => `${width}px`};
    ${({ exit }) =>
        css`
            animation: ${exit ? fadeOutSlideDown : fadeInSlideUp} 0.5s forwards;
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

export function CancelIcon() {
    return (
        <svg
            stroke='currentColor'
            fill='none'
            stroke-width='0'
            viewBox='0 0 15 15'
            height='20'
            width='20'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z'
                fill='currentColor'
            ></path>
        </svg>
    )
}
