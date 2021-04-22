import { GetStaticProps } from 'next';
import { api } from '../services/api';
import ptBR from 'date-fns/locale/pt-BR';
import { format, parseISO } from 'date-fns';
import { convertDurationToTimeString } from '../utils/convertDurationToTimeString';

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
  const { data } = await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: 'public',
      _order: 'desc'
    }
  })

  const episodes = data.map(episode => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', { locale: ptBR }),
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
      description: episode.description,
      url: episode.file.url
    }
  })

  return{
    props: {
      episodes: episodes,
    },
    revalidate: 60 * 60 * 8,
  }
}