import ProductsList from '../../components/ProductsList'

import { Game } from '../Home'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRPGGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: rpgGames } = useGetRPGGamesQuery()
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()

  if (actionGames && sportGames && rpgGames && simulationGames && fightGames) {
    return (
      <>
        <ProductsList
          games={rpgGames}
          title="RPG"
          background="black"
          id="rpg"
        />
        <ProductsList
          games={actionGames}
          title="Ação"
          background="gray"
          id="action"
        />
        <ProductsList
          games={fightGames}
          title="Luta"
          background="black"
          id="fight"
        />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background="gray"
          id="simulation"
        />
        <ProductsList
          games={sportGames}
          title="Esportes"
          background="black"
          id="sports"
        />
      </>
    )
  }

  return <h3>Carregando...</h3>
}

export default Categories
