import { FC, ButtonHTMLAttributes } from "react";
import styled from "styled-components";

type Variant = "primary" | "success" | "light";

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

const Button: FC<Props> = styled.button<Props>`
  text-align: center;
  border-radius: 6px;
  padding: 0px 18px;
  font-size: 15px;
  height: 36px;
  line-height: 36px;
  outline: 0;
  /* font-weight: 700; */
  font-style: normal;
  font-stretch: normal;
  border: none;
  color: #212529;
  cursor: pointer;
  background-color: #efefef;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;

  &:hover,
  &:focus,
  &:active {
    background-color: #dadada;
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }

  ${({ variant }) =>
    variant === "primary" &&
    `
    background-color: #1890ff;
    color: #fff;

    &:hover,
    &:focus,
    &:active {
      background-color: #1777d0;
    }
  `}

  ${({ variant }) =>
    variant === "success" &&
    `
    background-color: #5ebd74;
    color: #fff;

    &:hover,
    &:focus,
    &:active {
      background-color: #47a05c;
    }
  `}
`;

Button.defaultProps = {
  variant: "light",
};

export default Button;
