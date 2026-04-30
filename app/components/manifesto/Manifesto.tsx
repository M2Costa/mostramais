import { MANIFESTO_CONTENT } from './data';

export default function Manifesto() {
  return (
    <section className="mm-manifesto">
      <div className="mm-mani-eye">+ MANIFESTO</div>
      <div className="mm-mani-cols">
        <h3 className="mm-mani-lead">{MANIFESTO_CONTENT.lead}</h3>
        <div className="mm-mani-body">
          {MANIFESTO_CONTENT.body.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    </section>
  );
}
