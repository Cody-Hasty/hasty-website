import generateRandomNumber from "@/utils/generateRandomNumber"

type ShootingStarProps = {
  numberOfStars: number
}

export default function ShootingStarComponent({ numberOfStars }: ShootingStarProps) {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-[-1] hidden min-[1050px]:block">
      {Array.from(Array(numberOfStars)).map((_, index) => (
        <div
          key={index}
          className="shooting-star absolute w-1 h-1 bg-white rounded-full before:absolute before:top-1/2 before:translate-y-[-50%] before:w-[300px] before:h-px before:content-[''] before:bg-gradient-to-r before:from-white before:to-transparent"
          style={{
            top: '-10px',
            right: `${index * (100 / numberOfStars)}%`,
            animationDelay: `${generateRandomNumber(1, 8)}s`,
            animationDuration: `${generateRandomNumber(4, 7)}s`,
          }}
        />
      ))}
    </div>
  )
}