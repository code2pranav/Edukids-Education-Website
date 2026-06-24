import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const VARIANTS = {
  primary: "bg-primary text-heading-1 border-heading-1",
  dark: "bg-heading-1 text-white border-heading-1",
  outline: "bg-transparent text-heading-1 border-heading-1",
  white: "bg-white text-heading-1 border-heading-1",
};

const SIZES = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-sm",
  lg: "px-9 py-4 text-base",
};

/**
 * Shared call-to-action button. Renders as a router <Link> when `to` is
 * provided, otherwise as a native <button>.
 *
 * @param {string}  text     - label
 * @param {string}  [to]     - route path; if set, renders as a <Link>
 * @param {"button"|"submit"} [type] - native button type (ignored when `to` is set)
 * @param {"primary"|"dark"|"outline"|"white"} [variant]
 * @param {"sm"|"md"|"lg"} [size]
 * @param {string}  [icon]   - optional iconify icon name, rendered after the label
 * @param {Function} [onClick]
 */
const Button = ({
  text,
  to,
  type = "button",
  variant = "primary",
  size = "md",
  icon,
  className = "",
  onClick,
}) => {
  const classes = `
    inline-flex items-center justify-center gap-2 rounded-full font-display font-bold
    leading-none whitespace-nowrap cursor-pointer select-none
    border-2 border-b-4 border-r-4
    transition-all duration-300 ease-out
    hover:-translate-y-0.5 hover:shadow-[4px_6px_0px_rgba(38,38,38,1)]
    active:translate-y-0 active:shadow-none
    ${VARIANTS[variant]} ${SIZES[size]} ${className}
  `.trim();

  const content = (
    <>
      {text}
      {icon && <Icon icon={icon} width={18} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
};

export default Button;
