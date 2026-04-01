import Tag from '../Tag'
import { Card, Descricao, Titulo, Infos } from './styles'

type Props = {
  title: string
  category: string
  description: string
  system: string
  infos: string[]
  image: string
}

const Product = ({
  image,
  title,
  category,
  system,
  description,
  infos
}: Props) => (
  <div>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Tag>{category}</Tag>
    <Tag>{system}</Tag>
    <Descricao>{description}</Descricao>
  </div>
)

export default Product
