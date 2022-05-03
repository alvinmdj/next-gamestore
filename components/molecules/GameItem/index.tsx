/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export interface GameItemProps {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
}

const GameItem = (props: GameItemProps) => {
  const { id, title, category, thumbnail } = props;

  return (
    <div className='featured-game-card position-relative'>
      <Link href={`/detail/${id}`}>
        <a>
          <div className='blur-sharp'>
            <img className='thumbnail' src={thumbnail} width={205} height={270} alt='thumbnail' />
          </div>
          <div className='cover position-absolute bottom-0 m-32'>
            <div className='d-flex flex-column h-100 justify-content-between text-decoration-none'>
              <div className='game-icon mx-auto'>
                <img src='/icon/console.svg' width={54} height={36} alt='console' />
              </div>
              <div>
                <p className='fw-semibold text-white text-xl m-0'>{title}</p>
                <p className='fw-light text-white m-0'>{category}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default GameItem;
