import { Event } from '../generated/schema'

export function handleNewEvent(event: Event): void {
  let e = new Event(event.id)
  e.claimHash = event.claimHash
  e.fileHash = event.fileHash
  e.save()
}
