import { Banner, Infos } from './styles'

import banner from '../../assets/images/fundo_hogwarts.png'
import Tag from '../Tag'
import Button from '../Button'

const Hero = () => (
  <Banner style={{ backgroundImage: `url:${banner}` }}>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>

      <Infos>
        <h2>Hogwarts Legacy</h2>
        <p>
          <span>De R$ 250,00</span>
          Por R$ 190,00
        </p>
        <Button
          variant="primary"
          type={'button'}
          title={'Clique aqui para adicionar este jogo ao carrinho'}
        >
          Adicionar ao carrinho
        </Button>
      </Infos>
    </div>
  </Banner>
)

export default Hero
