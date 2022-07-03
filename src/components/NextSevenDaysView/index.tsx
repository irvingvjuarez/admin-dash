import { DATA } from "../../data"

const NextSevenDaysView = () => {
  const { nextSevenDays } = DATA

  return(
    <section className="w-full max-w-[1000px] mx-auto my-3">
      <ul>
        {nextSevenDays.map(day => {
          const IconComponent = day.icon()
          return(
            <li className="flex items-center justify-between py-2 hover:bg-primary-clear-super md:px-1">
              <h2 className="w-[90px] text-lg md:text-xl flex">
                {day.day}
              </h2>
              <span className="hidden text-lg md:block">Rain: {day.rain}%</span>
              <IconComponent className="text-3xl text-contrast-clear md:text-4xl" />
              <div className="text-lg font-thin">
                <span>
                  {day.temp.max}°
                </span>
                <span className="ml-2">
                  {day.temp.min}°
                </span>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export { NextSevenDaysView }