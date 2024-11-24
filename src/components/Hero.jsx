import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className='flex-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
            VirtualR build tools
            <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
                {""}
                for developers
            </span>
        </h1>
        <p className='mt-10 text-center text-neutral-500 text-lg sm:text-xl lg:text-2xl'>
            Build your next project with VirtualR build tools. Get started today!
        </p>
        <div className='flex justify-center my-10'>
            <a href='#' className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 rounded-md mx-3'>
                Get started
            </a>
            <a href='#' className='py-3 px-6 rounded-md border '>
                Documentation
            </a>
        </div>
        <div className='flex mt-10 justify-center'>
            <video 
            autoPlay
            loop
            muted
            className='rounded w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'
            >
                <source src={video1} type='video/mp4'/>
                your browser doesnot support the video tag
            </video>
            <video 
            autoPlay
            loop
            muted
            className='rounded w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'
            >
                <source src={video2} type='video/mp4'/>
                your browser doesnot support the video tag
            </video>

        </div>

    </div>
  );
}

export default Hero