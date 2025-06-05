import clsx from "clsx"

const Heading = ({ children, text, className }) => {
  return (
    <div className={clsx("max-w-3xl text-center mx-auto", className)}>
        <h2 className="mb-4">{children}</h2>
        {text && <p className="text-sm max-w-[39rem] mx-auto text-gray-100/60 font-semibold">{text}</p>}
    </div>
  )
}

export default Heading
