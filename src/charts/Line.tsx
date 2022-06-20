import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { DATA } from "../data"

interface LineProps {
  title: string
}

const ChartLine: React.FC<LineProps> = ({ title }): JSX.Element => {
  return(
    <section className="w-full lg:w-[720px] p-4 bg-primary-strong rounded-lg overflow-x-hidden">
      <h2 className="text-lg tracking-wide font-light">{title}</h2>

      <article className="scrollbar overflow-x-auto pb-4 pr-3">
        <LineChart
          width={940}
          height={300}
          data={DATA.lastWeekEarnings}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeWidth="1px" vertical={false} stroke="#2C4459" />
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
          <Line
            type="monotone"
            dataKey="tea"
            stroke="#F2AA73"
            strokeWidth="2px"
          />
          <Line
            type="monotone"
            dataKey="iceCream"
            stroke="#05FF72"
            strokeWidth="2px" />
        </LineChart>
      </article>
    </section>
  )
}

export { ChartLine }