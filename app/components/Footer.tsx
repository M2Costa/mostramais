import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="mm-footer">
      <div className="mm-footer-top">
        <div className="mm-footer-mark">
          <Image src="/assets/logo_branca.png" alt="MOSTRA+" width={360} height={120} style={{ width: 'clamp(200px, 22vw, 360px)', height: 'auto' }} />
        </div>
        <div className="mm-footer-cols">
          <div>
            <div className="mm-eyebrow mm-eyebrow--white">+ Local</div>
            <p>Escola de Design<br />Av. Antônio Carlos, 6627<br />Pampulha · Belo Horizonte · MG</p>
          </div>
          <div>
            <div className="mm-eyebrow mm-eyebrow--white">+ Contato</div>
            <p>curadoria@mostramais.edu<br />@mostramais<br />+55 31 0000-0000</p>
          </div>
          <div>
            <div className="mm-eyebrow mm-eyebrow--white">+ Realização</div>
            <p>Alunos da Escola de Design<br />Coordenação curatorial 2026<br />Conselho editorial MOSTRA+</p>
          </div>
        </div>
      </div>
      <div className="mm-footer-rule"></div>
      <div className="mm-footer-bottom">
        <span>© MOSTRA+ 2026 · Feito por alunos, para alunos.</span>
        <span>02ª Edição · 27 MAI — 31 MAI</span>
      </div>
    </footer>
  );
}
