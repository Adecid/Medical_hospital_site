const serviceCard = ({card: {
  title,
  text,
  iconUrl,
  imgUrl
}}) => {
  return (
    <div className="max-w-[21rem] h-auto flex justify-center flex-col items-center bg-gray-300/20 p-7 text-center rounded-3xl border-2 border-gray-100/10">
        <div className="flex items-center opacity-80 p-3 justify-center bg-[length:100%_100%] mb-1" style={{ 
          backgroundImage: `url(${imgUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '44px',
          height: '44px'
          }}>
          <img src={iconUrl} className="opacity-90 m-auto -mt-0.5 size-full" alt={title} />
        </div>
      <h4 className="font-bold text-gray-100 mb-4">{title}</h4>
      <div className=" ">
        {text.split("<br />").map(br => (
          <p className="font-bold text-gray-100/80 leading-4.5 text-xs">{br}</p>
        ))}
      </div>
    </div>
  )
}

export default serviceCard
