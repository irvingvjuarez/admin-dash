import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts"

const DATA = [
  {
    name: "Sun",
    tea: 500,
    iceCream: 700
  },
  {
    name: "Mon",
    tea: 240,
    iceCream: 897
  },
  {
    name: "Tue",
    tea: 827,
    iceCream: 1292
  },
  {
    name: "Wed",
    tea: 987,
    iceCream: 1392
  },
  {
    name: "Thu",
    tea: 762,
    iceCream: 822
  },
  {
    name: "Fri",
    tea: 392,
    iceCream: 692
  },
  {
    name: "Sat",
    tea: 938,
    iceCream: 500
  }
]

const ChartStackedBar: React.FC = (): JSX.Element => {
  return(
    <section className="chart">
      <h2 className="chart__title">Flavors performance</h2>

      <article className="chart__container">
        <BarChart
          width={400}
          height={300}
          data={DATA}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid vertical={false} horizontal={false} />
          <XAxis dataKey="name" stroke="#fff" axisLine={false} />
          <YAxis stroke="#fff" axisLine={false} />
          <Tooltip />
          <Legend
            layout="horizontal"
            verticalAlign="top"
            align="left"
            wrapperStyle={{
              paddingBottom: "20px"
            }} />

          <Bar dataKey="tea" stackId="1" fill="#38A3FF" barSize={30} />
          <Bar dataKey="iceCream" stackId="1" fill="#786AF0" />
        </BarChart>
      </article>
    </section>
  )
}

export { ChartStackedBar }
