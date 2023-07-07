export default function Forecast({forecast}) {
    return (
        <>
          <div className="bgImg1 flex flex-col justify-center items-center w-full">
            <div className="text-[30px] text-start font-poppins text-white font-bold mt-[50px]">
              Shosan's Weather Hub
            </div>
            <h2 className="text-[22px] text-center text-blue-800 font-semibold">
              Welcome to our Weather Forecast page
            </h2>
            <p className="w-[400px] italic text-white mt-[50px]">
              This is the best weather forecast site in the world. Lorem ipsum dolor sit amet, 
              consectetur adipisicing elit. Earum aspernatur illum architecto cumque 
              recusandae fuga sequi necessitatibus deleniti repellat harum nobis, 
              dolor veniam vero deserunt. Voluptatibus, ducimus deserunt. Recusandae, dolore.
            </p>
            <p className="w-full italic text-center text-white font-semibold text-[22px] mt-[50px] my-8">
              The weather: {forecast}
            </p>
          </div>
        </>
      )
}


export async function getServerSideProps() {
    const response = await fetch("https://api.weather.gov/gridpoints/MFL/109,49/forecast")
    const data = await response.json()
  
    return {
      props: {
        forecast: data.properties.periods[0].detailedForecast
      }
    }
  }