import { useCallback, useEffect, useState } from 'react';
import { getFeaturedGames } from '../../../services/player';
import GameItem from '../../molecules/GameItem';

const FeaturedGame = () => {
	const [gameList, setGameList] = useState<any[]>([]);

	const getFeaturedGameList = useCallback(async () => {
		const data = await getFeaturedGames();
		setGameList(data);
	}, []);

	useEffect(() => {
		getFeaturedGameList();
	}, [getFeaturedGameList]);

	return (
		<section className='featured-game pt-50 pb-50'>
			<div className='container-fluid'>
				<h2 className='text-4xl fw-bold color-palette-1 mb-30'>
					Our Featured
					<br />
					{' '}
					Games This Year
				</h2>
				<div
					className='d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4'
					data-aos='fade-up'
				>
					{gameList.map((game) => {
						return (
							<GameItem
								key={game._id}
								title={game.name}
								category={game.category.name}
								thumbnail={`https://vin-gamestore.herokuapp.com/uploads/${game.thumbnail}`}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default FeaturedGame;