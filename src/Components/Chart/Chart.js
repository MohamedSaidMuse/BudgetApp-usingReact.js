





import ChartBar from './ChartBar';
import './Chart.css'



const Chart  = (props) => {
const dataPointValues =props.
dataPoints.map(dataPoint => dataPoint.value);
// the above code will return an array of values 
// the spread opetator below here is to pull out the  ... array elemnets and add them as stand lone arguments
    const totalMaximum =Math.max(...dataPointValues);
return (<div className ="chart">
{props.dataPoints.map((dataPoint) => (<ChartBar 
key ={dataPoint.label}
value ={dataPoint.value} maxValue ={totalMaximum} label ={dataPoint.label}/>))}



</div>
);
};
export default Chart;