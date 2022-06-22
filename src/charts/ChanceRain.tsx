import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts"

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

const ChanceRain: React.FC = (): JSX.Element => {
  return(
    <section className="chart w-full">
      <h2 className="chart__title">Chance of rain</h2>

      <article className="chart__container scrollbar">
        <BarChart
          width={400}
          height={300}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid horizontal={false} />
          <XAxis axisLine={false} stroke="#fff" dy={10} />
          <YAxis axisLine={false} stroke="#fff" dx={-10} />
          <Tooltip />
          <Bar dataKey="pv" fill="#484A69" barSize={20} radius={[20, 20, 20, 20]} />
        </BarChart>
      </article>
    </section>
  )
}

export { ChanceRain }