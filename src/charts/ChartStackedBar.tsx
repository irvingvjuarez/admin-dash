import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts"
import { DATA } from "../data"

const ChartStackedBar: React.FC = (): JSX.Element => {
  return(
    <section className="chart max-w-[450px]">
      <h2 className="chart__title">Flavors performance</h2>

      <article className="chart__container scrollbar">
        <BarChart
          width={400}
          height={300}
          data={DATA.flavors}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid vertical={false} horizontal={false} />
          <XAxis dataKey="name" stroke="#fff" axisLine={false} dy={10} />
          <YAxis stroke="#fff" axisLine={false} dx={-10} />
          <Tooltip />
          <Legend
            layout="horizontal"
            verticalAlign="top"
            align="left"
            wrapperStyle={{
              paddingBottom: "20px"
            }} />

          <Bar dataKey="chocolate" stackId="1" fill="#38A3FF" barSize={20} />
          <Bar dataKey="lemon" stackId="1" fill="#786AF0" />
        </BarChart>
      </article>
    </section>
  )
}

export { ChartStackedBar }
