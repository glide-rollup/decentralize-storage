import styled from "styled-components";
import * as Scroll from "react-scroll";
import { Link, NavLink as ReactNavLink } from "react-router-dom";

export const Wrapper = styled.section.attrs({
  className: `
  flex 
  flex-col
  relative
  h-screen
  justify-between`
})``;

export const Btn = styled.button.attrs({
  className: `
    relative 
    self-start 
    inline-block 
    w-auto 
    px-6 
    py-3 
    mx-auto 
    mt-0 
    text-base 
    font-bold 
    text-white 
    bg-indigo-600 
    hover:bg-indigo-500 
    rounded-lg
    shadow-xl 
    sm:mt-1 
    fold-bold 
    lg:mx-0
    transition
    `
})``;

export const ScrollLink = styled(Scroll.Link).attrs({
  className: `
  font-bold 
  duration-100 
  md:mr-3 
  lg:mr-9
  transition-color 
  hover:text-indigo-600
  cursor-pointer
`
})``;

export const NavLink = styled(ReactNavLink).attrs({
  className: `
  font-bold 
  duration-100 
  md:mr-3 
  lg:mr-9 
  transition-color 
  hover:text-indigo-600
  cursor-pointer
`
})``;

export const TopLink = styled(Link).attrs({
  className: `
  font-bold 
  duration-100 
  md:mr-3 
  lg:mr-8 
  transition-color 
  hover:text-indigo-600
  cursor-pointer
`
})``;

export const BreadcrumbItem = styled.span.attrs({
  className: `
  text-sm 
  font-medium
`
})``;