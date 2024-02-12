import './style.scss'

interface CenterContainerProps {
  children: React.ReactNode
}

export const CenteredContainer = (props: CenterContainerProps) => {
  return(
    <div className="centeredContainer">
      {props.children}
    </div>
  )
}