import { Icon } from "@iconify/react";

/**
 * Shared text input. Supports an optional label, leading icon, and
 * forwards any native input prop (value, onChange, placeholder, etc.).
 *
 * @param {string}  [label]
 * @param {string}  [icon] - iconify icon name shown at the start of the field
 * @param {string}  [type]
 * @param {string}  [className] - applied to the wrapping element
 */
const Input = ({
  label,
  icon,
  type = "text",
  className = "",
  inputClassName = "",
  ...rest
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block mb-2 text-sm font-semibold text-heading-1">
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        {icon && (
          <Icon
            icon={icon}
            width={20}
            className="absolute left-5 text-body pointer-events-none"
          />
        )}

        <input
          type={type}
          className={`
            w-full rounded-full border-2 border-heading-1 bg-white
            px-6 py-3.5 text-heading-1 placeholder:text-body/70
            outline-none transition-all duration-300
            focus:border-primary-2 focus:ring-4 focus:ring-primary-2/15
            ${icon ? "pl-13" : ""} ${inputClassName}
          `}
          {...rest}
        />
      </div>
    </div>
  );
};

export default Input;
