import Icon from "@/assets/icons/icons.svg"
import { ISvgIconProps } from "./types"

const SvgIcon: React.FC<ISvgIconProps> = (props) => {
  const {
    color,
    size = "1.25em",
    width,
    height,
    onClick,
    id,
    className,
  } = props
  return (
    <svg
      fill={color ?? "currentColor"}
      onClick={onClick}
      className={className}
      width={width ?? size}
      height={height ?? size}
    >
      <use xlinkHref={`${Icon}#${id}`}></use>
    </svg>
  )
}
export default SvgIcon
