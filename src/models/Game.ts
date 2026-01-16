class Game {
  category: string
  description: string
  system: string
  image: string
  infos: string[]
  title: string
  id: number

  constructor(
    id: number,
    category: string,
    image: string,
    infos: string[],
    system: string,
    description: string,
    title: string
  ) {
    this.id = id
    this.category = category
    this.image = image
    this.infos = infos
    this.system = system
    this.description = description
    this.title = title
  }
}

export default Game
