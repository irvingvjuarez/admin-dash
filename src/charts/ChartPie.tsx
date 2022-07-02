import { PieChart, Pie, Cell, Legend } from "recharts"
import { DATA } from "../data"
import { ChartContainer } from "./ChartContainer"
import { ChartContainerConfig } from "./ChartContainer/types"

const ChartPie: React.FC = (): JSX.Element => {
  const { data, colors } = DATA.topProductSales
  const chartConfig = {
    type: "flex",
    title: "Top Product Sales",
    scrollbar: true
  }

  return(
    <ChartContainer
      config={chartConfig as ChartContainerConfig}>
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
          innerRadius={70}
          outerRadius={100}
          strokeWidth={0}
          paddingAngle={0}
          
        >
          {data.map((entry, index) => (
            <Cell key={entry.name} fill={colors[index]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </ChartContainer>
  )
}

export { ChartPie }