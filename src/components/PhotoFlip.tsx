import { useState } from 'react'

// Hover (or tap) to swap the portrait for a trip photo.
// Replace public/images/main.jpg for the portrait, and the second file for the trip shot.
const portrait = '/images/main.jpg'
const trip = '/images/trips/ladakh.jpg'

export default function PhotoFlip() {
  const [flipped, setFlipped] = useState(false)
  const img = 'absolute inset-0 h-full w-full rounded-full border border-border object-cover'

  return (
    <button
      type="button"
      aria-pressed={flipped}
      aria-label="Portrait of Aditya Yadav. Press to show a photo from a trip."
      onClick={() => setFlipped((f) => !f)}
      className="photo-flip relative h-36 w-36 shrink-0 rounded-full sm:h-44 sm:w-44 md:h-56 md:w-56"
    >
      <img src={portrait} alt="" width={600} height={600} className={`photo-a ${img}`} />
      <img src={trip} alt="" width={1000} height={750} className={`photo-b ${img}`} />
    </button>
  )
}
