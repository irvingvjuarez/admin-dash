import { PieChart, Pie, Cell, Legend } from "recharts"

const data = [
  { name: "MacBook Pro", value: 400 },
  { name: "iPhone", value: 300 },
  { name: "iPad", value: 300 },
  { name: "MacBook Air", value: 200 }
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const ChartPie: React.FC = (): JSX.Element => {
  return(
    <section className="chart flex flex-col items-center">
      <h2 className="chart__title w-full text-start">Top Product Sales</h2>

      <article className="chart__container scrollbar">
        <PieChart
          width={200}
          height={300}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
          }}
        >
          <Pie
            data={data}
            dataKey="value"
            innerRadius={55}
            outerRadius={80}
            strokeWidth={0}
            paddingAngle={0}
            
          >
            {data.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[index]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </article>

    </section>
  )
}

export { ChartPie }