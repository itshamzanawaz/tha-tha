"use client";
import { useQuery, gql } from "@apollo/client";
import client from "../../client";


const POST_DETAIL = gql`
query MyQuery($id: ID!) {
    movie(where: {id: $id}) {
      category {
        name
      }
      movieDetails {
        html
      }
      movieTitle
      movie {
        url
      }
    }
  }
  
`;

export default function Product({ params }) {
  

  const { loading, error, data } = useQuery(POST_DETAIL, {
    variables: { id: params.slug },
    client: client,
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const movie = data?.movie;

  return (
    <div>
        <video className="w-full h-fit" controls>
            <source src={movie.movie.url} type="video/mp4" />
        </video>

    </div>
  );
}