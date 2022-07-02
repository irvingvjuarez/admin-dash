import { ChartContainer } from "./ChartContainer"
import {
  AreaChart,
  Area,
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

const ChartArea: React.FC<LineProps> = ({ title }): JSX.Element => {
  const chartConfig = {
    title,
    wrapperClassName: "lg:w-auto"
  }
  
  return(
    <ChartContainer config={chartConfig}>
      <AreaChart
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
        <defs>
          <linearGradient id="iceCreamGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="15%" stopColor="#05FF72" stopOpacity={0.4}/>
            <stop offset="85%" stopColor="#030303" stopOpacity={0.1}/>
          </linearGradient>

          <linearGradient id="teaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="15%" stopColor="#F2AA73" stopOpacity={0.4}/>
            <stop offset="85%" stopColor="#030303" stopOpacity={0.1}/>
          </linearGradient>
        </defs>

        <CartesianGrid strokeWidth="1px" vertical={false} stroke="#2C4459" />
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

        <Area
          type="monotone"
          dataKey="tea"
          stroke="#F2AA73"
          strokeWidth="2px"
          fill="url(#teaGradient)"
          fillOpacity={1}
        />
        <Area
          type="monotone"
          dataKey="iceCream"
          stroke="#05FF72"
          strokeWidth="2px"
          fill="url(#iceCreamGradient)"
          fillOpacity={1} />
      </AreaChart>
    </ChartContainer>
  )
}

export { ChartArea }