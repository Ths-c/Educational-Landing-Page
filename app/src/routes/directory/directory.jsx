import background from '../../assets/Programación.png'
import './directory.css'

export default function Directory() {
  return (
    <div className="directory">
      <div className="directory__background" aria-hidden="true">
        <img className="directory__image" src={background} alt="" />
        <img
          className="directory__image directory__image--bubble"
          src={background}
          alt=""
        />
        <img
          className="directory__image directory__image--glow"
          src={background}
          alt=""
        />
      </div>
      <h1 className="font-agrandir">Tecnicatura en Programación</h1>
    </div>
  )
}
