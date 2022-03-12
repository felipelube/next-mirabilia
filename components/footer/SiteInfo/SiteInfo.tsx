import Image from "next/image"

export function SiteInfo() {
  return (
    <div>
      <a
        id="ivitra"
        href="http://www.ivitra.ua.es/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          title="Ivitra - Institut Virtual Internacional de Traducción"
          src="/images/logoivitraisic.png"
          alt="Ivitra - Institut Virtual Internacional de Traducción"
          width="125"
          height="100"
        />
      </a>
      <h1>ISSN 1676-5818</h1>
      <p>© 2000 Mirabilia Journal.</p>
      <p>All rights reserved.</p>
      <p>
        <em>Web design</em> by{" "}
        <a href="https://br.linkedin.com/in/felubra">Felipe Lube</a>.
      </p>
    </div>
  )
}
