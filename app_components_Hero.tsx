import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Play, Info } from 'lucide-react'

export default function Hero() {
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Movie backdrop"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">Stranger Things</h1>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
      </p>

      <div className="flex space-x-3">
        <Button className="bg-white text-black">
          <Play className="h-4 w-4 text-black md:h-7 md:w-7" />
          Play
        </Button>
        <Button className="bg-[gray]/70">
          <Info className="h-5 w-5 md:h-8 md:w-8" />
          More Info
        </Button>
      </div>
    </div>
  )
}

