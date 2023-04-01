import { getYoutubePlaylist } from '@/services/youtube';
import Head from 'next/head';

export const getServerSideProps = async () => {
  const data = await getYoutubePlaylist('PL4ZDKpM7CWu-Odmud7VlRXp5EK0LKZstd');
  return {
    props: {
      data
    }
  };
};

const Leasons = ({ data }: any) => (
  <>
    <Head>
      <title>Aulas</title>
      <meta
        name="description"
        content="Veja as aulas do Webdev"
      />
      <link
        rel="icon"
        href="/favicon.ico"
      />
    </Head>
    <div>Videos</div>
  </>
);

export default Leasons;
