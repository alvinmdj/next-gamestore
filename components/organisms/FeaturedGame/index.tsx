import { useCallback, useEffect, useState } from 'react';
import { GameItemTypes } from '../../../services/data-types';
import { getFeaturedGames } from '../../../services/player';
import { toast } from 'react-toastify';
import GameItem from '../../molecules/GameItem';

const FeaturedGame = () => {
	const [gameList, setGameList] = useState([]);

	const getFeaturedGameList = useCallback(async () => {
		const response = await getFeaturedGames();
		if (response.error) {
			toast.error('Internal server error. Failed to get featured games');
		} else {
			setGameList(response.data);
		}
	}, []);

	useEffect(() => {
		getFeaturedGameList();
	}, [getFeaturedGameList]);

	const API_IMG = process.env.NEXT_PUBLIC_IMG;

	return (
		<section className='featured-game pt-50 pb-50'>
			<div className='container-fluid'>
				<h2 className='text-4xl fw-bold color-palette-1 mb-30'>
					Our Featured<br />{' '}Games This Year
				</h2>
				<div
					className='d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4'
					data-aos='fade-up'
				>
					{gameList.map((game: GameItemTypes) => {
						return (
							<GameItem
								key={game._id}
								id={game._id}
								title={game.name}
								category={game.category.name}
								thumbnail={`${API_IMG}/${game.thumbnail}`}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default FeaturedGame;