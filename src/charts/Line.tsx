import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const lastWeekEarnings = [
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

interface LineProps {
  title: string
}

const ChartLine: React.FC<LineProps> = ({ title }): JSX.Element => {
  return(
    <section className="w-full max-w-[720px] p-4 bg-primary-strong rounded-lg">
      <h2 className="text-lg tracking-wide font-light mb-3">{title}</h2>

      <LineChart
        width={680}
        height={300}
        data={lastWeekEarnings}
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
        <Legend />
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
    </section>
  )
}

export { ChartLine }