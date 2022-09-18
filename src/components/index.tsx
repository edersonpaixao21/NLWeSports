import instagramImg from '../assets/instagram.png'
import twitchImg from '../assets/twitch.png'
import discordImg from '../assets/discord.png'
import bgImg from '../assets/bg.jpg'

import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <div className='content'>
        <header>
          <div>
            <img 
              src="https://github.com/edersonpaixao21.png" alt="Foto de Avatar do Ederson" />
          </div>
        </header>

        <main>
          <section>
            <div>
              <h2>Meus jogos</h2>
              <p>Os games que eu mais curto jogar!</p>

              <ul className="games-list">
                <li>
                  <a target="_blank" href="https://www.twitch.tv/directory/game/Grand%20Theft%20Auto%20V">
                    <img src="https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg" alt="Imagem do jogo GTA 5" />
                  </a>
                </li>

                <li>
                  <a target="_blank" href="https://www.twitch.tv/directory/game/FIFA%2022">
                    <img src="https://static-cdn.jtvnw.net/ttv-boxart/1869092879_IGDB-285x380.jpg" alt="Imagem do jogo Fifa 22" />
                  </a> 
                </li>

                <li>
                  <a target="_blank" href="https://www.twitch.tv/directory/game/NBA%202K23">
                    <img src="https://static-cdn.jtvnw.net/ttv-boxart/772421245_IGDB-285x380.jpg" alt="Imagem do jogo NBA" />
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div>
              <h2>Canais e streamers</h2>
              <p>Lista de canais e transmissões que não perco!</p>

              <ul className="channel-list">
                <li>
                  <a target="_blank" href="https://www.twitch.tv/casimito">
                    <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/32805a78-d927-48bd-8089-bf5efed53ea4-profile_image-70x70.png" alt="Imagem de Casimito" />
                  </a>
                </li>

                <li>
                  <a target="_blank" href="https://www.twitch.tv/paulinholokobr">
                    <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/d96bbd7a-26e5-4c5e-b6a5-149d708a973b-profile_image-70x70.png" alt="Imagem de Paulinho Loco" />
                  </a>
                </li>

                <li>
                  <a target="_blank" href="https://www.twitch.tv/luquet4">
                    <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/0863a8b0-7fdb-44a9-8212-680cfbaa38f9-profile_image-70x70.png" alt="Imagem de Luqueta" />
                  </a>
                </li>
                
                <li>
                  <a target="_blank" href="https://www.twitch.tv/bateson87">
                  <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/06a337cd-4212-42a0-b73d-e76a1f5e851e-profile_image-70x70.jpeg" alt="Imagem de Bateson" />
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div>
              <h2>Minhas redes</h2>
              <p>Se conecte comigo agora mesmo!</p>

              <ul className="social-list">
                <li>
                  <a target="_blank"href="https://www.twitch.tv/edersonp21">
                    <img src={twitchImg} alt="logo da Twitch" />
                  </a>
                </li>

                <li>
                  <a target="_blank"href="https://www.instagram.com/edersonpaixao/">
                    <img src={instagramImg} alt="logo do Instagram" />
                  </a>
                </li>

                <li>
                  <a target="_blank"href="https://discord.com/channels/985343801851781160">
                  <img src={discordImg} alt="logo do Discord" />
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>
        <img className='background' src={bgImg} alt="foto de fundo" />
    </Container>
  )
}
