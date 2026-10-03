import { interests, trips } from '../data/trips'
import { links } from '../data/links'
import Section from './Section'
import TripCard from './TripCard'

export default function OffTheClock() {
  return (
    <Section id="off-the-clock" title="Off the Clock" intro="When I’m away from the keyboard, I’m usually on a motorcycle.">
      <div className="grid max-w-[976px] gap-4 sm:grid-cols-2">
        {trips.map((t) => <TripCard key={t.id} trip={t} />)}
      </div>
      <p className="mt-4 text-sm text-muted">
        The videos live on my friend’s channel,{' '}
        <a href={links.tripChannel} target="_blank" rel="noreferrer" className="font-medium text-accent hover:underline">@travelwithwolfy</a>.
      </p>
      <ul aria-label="Interests" className="mt-6 flex flex-wrap gap-2">
        {interests.map((i) => (
          <li key={i} className="rounded-full border border-border px-3 py-1 text-sm text-muted">{i}</li>
        ))}
      </ul>
    </Section>
  )
}
