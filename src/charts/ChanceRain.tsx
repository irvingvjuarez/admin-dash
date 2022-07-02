import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Cell } from "recharts"
import { ChartContainer } from "./ChartContainer"
import { DATA } from "../data"
import { ChartContainerConfig } from "./ChartContainer/types"

const ChanceRain: React.FC = (): JSX.Element => {
  const chartConfig = {
    title: "Chance of rain",
    type: "full",
    scrollbar: true,
    titleClassName: "mb-5",
    containerClassName: "md:mx-auto",
  }

  return(
    <ChartContainer
      config={chartConfig as ChartContainerConfig}>
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
        <Tooltip cursor={false} />
        <Bar dataKey="rain" fill="#484A69" barSize={20} radius={[20, 20, 20, 20]}>
          {DATA.chanceOfRain.map(item => (
            <Cell key={item.id} fill={item.overlapping ? "#F2AA73" : "#484A69"} />
          ))}
        </Bar>
      </BarChart>
    </ChartContainer>
  )
}

export { ChanceRain }