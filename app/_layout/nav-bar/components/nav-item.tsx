import { NavItem as NavItemType } from "../defination";

const NAV_ITEM_BASE_STYLES = `
  px-3 py-2 
  text-[1.2em] 
  font-bold
  cursor-pointer
  hover:text-[#409EFF]
`;

interface NavItemProps {
  nav: NavItemType;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

export const NavItem = (props: NavItemProps) => {
  const { nav, isActive, onClick, className = "" } = props;

  return (
    <li
      key={nav.targetEl}
      className={`
        ${NAV_ITEM_BASE_STYLES}
        ${className}
        ${isActive ? "text-[#409EFF]" : ""}
      `}
      onClick={onClick}
    >
      {nav.text}
    </li>
  );
};
