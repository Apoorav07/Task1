
import Chart from 'react-apexcharts'


const Barchart = () => {
  return ( 
    <>
      

    <Chart
    width={700}
    height={500}

    series={[
      {
        name:"Discharges",
        type:'column',
        data:[1,2,9,7,5,3,1,1,1,1]
    },
    {
      name: 'avg time',
      type: 'line',
      data: [1,2,9,7,5,3,1,1,1,1]
    }
    ]}



    options={{
      title:{
        text:"Discharges Now",
      style:{fontSize:20}
      },

      xaxis:{
        categories:["12AM-6AM","6AM-8AM","8AM-10AM","10AM-12PM","12PM-2PM","2PM-4PM","4PM-6PM","6PM-8PM","8PM-10PM","10PM-12AM"],
        title:{text:"Discharges by interval"}
      },

     yaxis:{
      labels:{
        formatter:(val)=>{return `${val}:00`}
      },
      title:{
        text:"Seconds (in hh:mm)"
      }
     }

    }}


    >

    </Chart>



    </>
   );
}
 
export default Barchart;