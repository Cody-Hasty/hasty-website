type PlaceHolderProps = {
  columns?: number
}

export default function PlaceHolderComponent({ columns }: PlaceHolderProps) {
  return (
    <div className="placeholder-glow w-full py-auto !min-h-full">
      <span className={`placeholder rounded-full col-${columns || 12}`} />
    </div>
  )
}