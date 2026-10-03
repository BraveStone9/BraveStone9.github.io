import { useState } from 'react'
import { ExternalLink, Map, Play } from 'lucide-react'
import type { Trip } from '../data/trips'

export default function TripCard({ trip }: { trip: Trip }) {
  const [showMap, setShowMap] = useState(false)

  return (
    <article className="flex flex-col rounded-lg border border-border bg-surface p-5">
      {trip.image && (
        <img
          src={trip.image}
          alt={trip.imageAlt ?? ''}
          loading="lazy"
          style={{ objectPosition: trip.imagePosition }}
          className="mb-4 aspect-[4/3] w-full rounded-md border border-border object-cover"
        />
      )}
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-semibold">{trip.title}</h3>
        <p className="font-mono text-xs text-muted">{trip.when} · {trip.distance}</p>
      </div>
      <p className="mt-1 text-sm text-muted">{trip.subtitle}</p>

      <div className="mt-4 flex flex-wrap gap-3">
        <a href={trip.playlist} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-md bg-accent px-3.5 py-2 text-sm font-medium text-on-accent hover:opacity-90">
          <Play size={14} aria-hidden /> Watch the playlist <ExternalLink size={12} aria-hidden />
        </a>
        {trip.mapEmbed && !showMap && (
          <button type="button" onClick={() => setShowMap(true)} className="inline-flex items-center gap-1.5 rounded-md border border-border px-3.5 py-2 text-sm font-medium hover:border-accent">
            <Map size={14} aria-hidden /> Show route map
          </button>
        )}
      </div>

      {trip.mapEmbed && showMap && (
        <iframe
          src={trip.mapEmbed}
          title={`${trip.title} route map`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="mt-4 h-64 w-full rounded-md border border-border"
        />
      )}
    </article>
  )
}
