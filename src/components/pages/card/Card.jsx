import { useEffect, useState } from "react";
import { useGetPokemonsQuery } from "../../../redux/api/card";
import css from "./Card.module.css";
const Card = () => {
  const { data, error, isLoading } = useGetPokemonsQuery();
  const [pokemonArr, setPokemonArr] = useState([]);

  useEffect(() => {
    if (data) {
      const fetchPokemonDetails = async () => {
        const pokemonsPromis = data.results.map((pokemon) =>
          fetch(pokemon.url).then((response) => response.json())
        );
        const details = await Promise.all(pokemonsPromis);
        setPokemonArr(details);
      };

      fetchPokemonDetails();
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return (
    <div className={css.Card}>
      <div className={css.content}>
        <div className={css.header_card}>
          <p>GEEKS</p>

          <div className={css.image_container}>
            <img src="https://img.hhcdn.ru/employer-logo/5832362.png" alt="" />
          </div>
        </div>

        <div className={css.aside}>
          {pokemonArr.map((el) => (
            <div className={css.card_item} key={el.id}>
              {el.sprites && (
                <div>
                  <img
                    src={el.sprites.front_default}
                    alt={`${el.name} front`}
                  />
                </div>
              )}
              <p>{el.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
