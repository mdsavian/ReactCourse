import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const chartValues = props.dataPoints.map(points=> points.value)
  const maxValue = Math.max(...chartValues)

  return (
    <div className="chart">
      {props.dataPoints.map((point) => (
        <ChartBar
          key={point.label}
          value={point.value}
          max={maxValue}
          label={point.label}
        />
      ))}
    </div>
  );
};

export default Chart;
