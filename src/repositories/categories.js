import config from '../config'

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (res) => {

      if (res.ok) {
        const data = await res.json()
        return data
      }

      throw new Error('Não foi possível carregar os dados')
    })
}

export default {
  getAllWithVideos,
}