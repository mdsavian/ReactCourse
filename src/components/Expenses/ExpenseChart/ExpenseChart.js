import Chart from "../../Chart/Chart"

const ExpenseChart = (props)=>
{
    const chartDataPoints = [
        {label:'Jan', value:0},
        {label:'Fev', value:0},
        {label:'Mar', value:0},
        {label:'Abr', value:0},
        {label:'Mai', value:0},
        {label:'Jun', value:0},
        {label:'Jul', value:0},
        {label:'Ago', value:0},
        {label:'Set', value:0},
        {label:'Out', value:0},
        {label:'Nov', value:0},
        {label:'Dez', value:0},
    ]

    props.expenseItems.forEach(ex=>{
        const expenseMonth = ex.date.getMonth()
        console.log(ex.price)
        chartDataPoints[expenseMonth].value += ex.price
        console.log(chartDataPoints[expenseMonth].value)
    })



    return <Chart dataPoints={chartDataPoints}/>
}

export default ExpenseChart