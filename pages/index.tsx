import type { NextPage } from 'next';
import Mosaic from '../components/mosaic';

const Home: NextPage = () => {
  return (
    <main>
      <Mosaic size={[4, 3]} />
    </main>
  );
};

export default Home;
