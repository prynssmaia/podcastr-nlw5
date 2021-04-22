import { GetStaticProps } from 'next';
import { api } from '../services/api';

type Episode = {
    id: string;
    title: string;
    members: string;
    published_at: string;
    thumbnail: string;
    description: string;
    file: {
      url: string;
      type: string;
      duration: number
    }
}

type HomeProps = {
  episodes: Episode[];
}

export default function Home(props: HomeProps) {
  console.log(props.episodes)
  
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: 'public',
      _order: 'desc'
    }
  })
  const data = response.data

  return{
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}