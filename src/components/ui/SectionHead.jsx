import Reveal from './Reveal'
import Eyebrow from './Eyebrow'

export default function SectionHead({ eyebrow, title, lead }) {
  return (
    <Reveal className="section-head">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </Reveal>
  )
}