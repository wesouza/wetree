import styles from  './styles.module.css'
import { ReactNode} from "react"

interface PropsButton {
  children: ReactNode
  href: string
}

export default function Button({children, ...rest}:PropsButton)
{
  return (
      <a className={styles.button} {...rest}>
      {children}
      </a>
  )
}