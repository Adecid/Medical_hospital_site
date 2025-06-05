const Button = ({ title, onClick, className, borderblur, href}) => {
    const classes = `button bg-primary py-2 px-3 cursor-pointer rounded-3xl ${className || ''}`
    const classBlur = `${borderblur && 'bg-primary/30 p-[3px] rounded-3xl'} ${className  || ''}`
    return href ? (
    <a href={href} className={classBlur}>
      <div className={classes}>
        {title}
      </div>
    </a>
  ) : (
    <button onClick={onClick} className={classBlur}>
      <div className={classes}>
        {title}
      </div>
    </button>
  )
}

export default Button
