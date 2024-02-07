import { ButtonHTMLAttributes } from "react";
export interface ButtonClassicProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
}