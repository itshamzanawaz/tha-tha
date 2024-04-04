'use client'
import { useQuery, gql } from '@apollo/client';
import { Card } from 'antd';
import client from './client';
import Link from "next/link";
import { Carousel } from 'antd'

const getmovies = gql`
query MyQuery {
  movies {
    id
    movie {
      url
    }
    movieDetails {
      html
      text
    }
    movieTitle
    stage
    moviePic {
      url
    }
  }
}
`

// ...other code remains the same

const Posts = () => {
  const { loading, error, data } = useQuery(getmovies, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return console.log(error);

  const movies = data.movies

  return (<>
    <Carousel autoplay>
      {movies.map((banner) => {
        return (
          <Link href={`/Movie/${banner.id}`} key={banner.id}>
            <img className='bannerImage' src={banner.moviePic[0].url} alt='banner' />
          </Link>
        )
      })}
    </Carousel>
    <h2 className='text-4xl text-center m-8 text-slate-600'>ALL Movies</h2>
    <div className='flex flex-wrap align-middle justify-center wrap ' id='post-container'>
      {movies.map((post, index) => (
        <Link href={`/Movie/${post.id}`} key={post.id}>
          
            <Card hoverable title={post.movieTitle} bordered={false} className='w-80 text-black hover:scale-110 hover:transition-all' id='post'>
              <img src={post.moviePic[0].url} className='w-80 rounded-md mt-4 mb-4' id='post-img' />
              <div>
                <div >{post.movieDetails.text}</div>
              </div>
            </Card>
          
        </Link>
      ))}
    </div>
  </>
  )
}

export default Posts
