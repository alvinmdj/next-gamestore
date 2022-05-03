import type { NextPage } from 'next';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/organisms/Navbar';
import MainBanner from '../components/organisms/MainBanner';
import TransactionStep from '../components/organisms/TransactionStep';
import FeaturedGame from '../components/organisms/FeaturedGame';
import Reached from '../components/organisms/Reached';
import Story from '../components/organisms/Story';
import Footer from '../components/organisms/Footer';
import Head from 'next/head';

const Home: NextPage = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<>
			<Head>
				<title>Game Store | Get a New Experience in Gaming</title>
				<meta
					name='description'
					content='We provide lots of items to help gamers become the best in the game.'
				/>
				<meta property='og:title' content='Game Store | Get a New Experience in Gaming' />
				<meta property='og:description' content='We provide lots of items to help gamers become the best in the game.' />
				<meta property='og:image' content='https://nextgamestore.vercel.app/img/avatar-1.png' />
				<meta property='og:url' content='https://nextgamestore.vercel.app' />
			</Head>
			<Navbar />
			<MainBanner />
			<TransactionStep />
			<FeaturedGame />
			<Reached />
			<Story />
			<Footer />
		</>
	);
};

export default Home;
