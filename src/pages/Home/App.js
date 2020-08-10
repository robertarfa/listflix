import React, { useEffect, useState } from 'react';
import PageDefault from '../../components/PageDefault'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import categoriesRepository from '../../repositories/categories'

function Home() {

  const [initialData, setInitialData] = useState([])

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then(async (categoriesWithVideos) => {
        setInitialData(categoriesWithVideos)
      })
      .catch((err) => {
        console.log(err.message)
      })

  }, []);


  return (
    <>
      <PageDefault >
        {initialData.length === 0 && (<div>Loading...</div>)}

        {initialData.map((categoria, indice) => {
          if (indice === 0) {
            return (
              <div key={categoria.id}>
                <BannerMain
                  videoTitle={initialData[0].videos[0].titulo}
                  url={initialData[0].videos[0].url}
                  videoDescription={initialData[0].videos[0].description}
                />
                <Carousel
                  ignoreFirstVideo
                  category={initialData[0]}
                />
              </div>
            );
          }

          return (
            <Carousel
              key={categoria.id}
              category={categoria}
            />
          );
        })}
      </PageDefault>
    </>
  );
}

export default Home;
