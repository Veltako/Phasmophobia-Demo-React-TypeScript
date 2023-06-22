import { NavLink } from "react-router-dom"

export const FOOTER = () => {
  return (
    <>
    <footer>
        <div className="info">
                <NavLink to="/">Mentions Légales</NavLink>
                <ul>
                    <li>Site mis à jour</li>
                    <li>le : 15/06/2023</li>
                </ul>
        </div>
        <div className="buy">
            <section>
                <h1>Achetez-le jeu sur :</h1>
            </section>
            <section className="margin-buy">
                    <button className="steam">
                        <NavLink to="https://store.steampowered.com/app/739630/Phasmophobia/" target="_blank">Sur Steam</NavLink>
                    </button>
                    <button className="ps">
                        <NavLink to="https://www.jeuxvideo.com/jeux/ps5/jeu-1765164/" target="_blank">Sur PS5/PSVR2</NavLink>
                    </button>
                    <button className="xbox">
                        <NavLink to="https://www.xboxygen.com/Jeux/Phasmophobia" target="_blank">Sur XBOX Series S/X</NavLink>
                    </button>
            </section>
        </div>
    </footer>
    </>
  )
}
