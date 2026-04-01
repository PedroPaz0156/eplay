class Game {
  category: string
  description: string
  image: string
  infos: string[]
  system: string
  title: string
  id: number

  constructor(
    id: number,
    category: string,
    image: string,
    system: string,
    description: string,
    infos: string[],
    title: string
  ) {
    this.id = id
    this.category = category
    this.image = image
    this.system = system
    this.description = description
    this.infos = infos
    this.title = title
  }
}

export default Game
