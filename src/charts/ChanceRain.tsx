import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts"
import { DATA } from "../data"

const ChanceRain: React.FC = (): JSX.Element => {
  return(
    <section className="chart w-full">
      <h2 className="chart__title mb-5 w-full text-start">Chance of rain</h2>

      <article className="chart__container scrollbar md:mx-auto">
        <BarChart
          width={600}
          height={300}
          data={DATA.chanceOfRain}
          margin={{
            top: 0,
            right: 0,
            left: -15,
            bottom: 0
          }}
        >
          <CartesianGrid horizontal={false} vertical={false} />
          <XAxis axisLine={false} stroke="#fff" dy={10} dataKey="name" />
          <YAxis axisLine={false} stroke="#fff" dx={-10} />
          <Tooltip />
          <Bar dataKey="rain" fill="#484A69" barSize={20} radius={[20, 20, 20, 20]} />
        </BarChart>
      </article>
    </section>
  )
}

export { ChanceRain }