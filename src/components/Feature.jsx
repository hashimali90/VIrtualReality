import { features } from "../constants"

const Feature = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
        <div className="text-center">
            <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
                Feature
            </span>
            <h2 className="text-4xl font-bold mt-4">
                Easily build
                <span className="bg-gradient-to-r text-orange-500 bg-clip-text"> 
                    {" "}
                    your code
                </span>
            </h2>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20">
            {features.map((feature, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
                    <div className="flex">
                        <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                            {feature.icon}
                        </div>
                        <div>
                            <h5 className="text-lg font-bold mt-4">{feature.text}</h5>
                        <p className="text-md p-2 mb-20 text-neutral-500">{feature.description}</p>
                        </div>
                    </div>

                </div>

            ))}

        </div>
    </div>
  )
}

export default Feature