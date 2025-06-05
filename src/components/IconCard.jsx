import clsx from "clsx"

const IconCard = ({ icons, bgt, size, iconSize, title, className, stroke }) => {
  return (
    <div className={`${stroke && 'absolute bottom-22 -left-16 max-sm:-bottom-20 max-sm:left-6 flex items-center justify-center size-54 border-1 border-violet-100 rounded-full'}`}>
      <div className={clsx("rounded-full flex items-center justify-center", bgt ? 'bg-white/50 backdrop-blur-lg' : 'bg-white' , size || 'size-13', className || '')}>
        {title ? (
            <p className="text-xs font-poppins font-bold text-gray-100/70">{title}</p>
        ) : (
            <span className={clsx("text-gray-100/65", iconSize || 'text-[1rem]')}>{icons}</span>
        )}
      </div>
    </div>
  )
}

export default IconCard
