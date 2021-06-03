import {Claim} from "../generated/Events/Certifaction";
import { Event } from '../generated/schema'

export function handleNewEvent(claim: Claim): void {
  let e = new Event(claim.params.hash.toHexString()+"-"+claim.params.file.toHexString())
  e.claimHash = claim.params.hash
  e.fileHash = claim.params.file
  e.timestamp = claim.block.timestamp

  e.save()
}
