import React, { ReactNode } from "react";
export interface ModalProps {
    isVisible: boolean;
    toggle: () => void;
    title?: string;
    className?: string;
    hideIcon?: boolean;
    children: ReactNode;
}
export default function Modal(props: ModalProps): React.ReactPortal;
