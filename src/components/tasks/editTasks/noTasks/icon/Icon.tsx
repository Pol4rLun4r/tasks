import IconStyle from "./style/Icon";
import TodoIcon from "../../../../../assets/tasks/Todo.svg"

interface Iicon {
  isHover: boolean
}

const Icon = ({ isHover }: Iicon) => {
  return (
    <IconStyle
      initial={{ opacity: 0 }}
      animate={{
        opacity: isHover ? 1 : 0.3,
        filter: isHover ? 'drop-shadow(0px 0px 10px #ffffff)' : 'drop-shadow(0px 0px 0px rgba(123, 123, 32, 0))'
      }}
      transition={{ duration: 0.2 }}
      src={TodoIcon}
      alt="icon tasks"
    />
  )
}

export default Icon;