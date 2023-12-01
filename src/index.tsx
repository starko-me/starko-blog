import 'server-only'
import axios from "axios"

//News
const getNews = async (params: { category_id?: string, lang?: string, slug?: string, limit?: number, page?: number, title?: string }) => {
  try {
    const result = await axios.get('https://blogthing.starko.me/api/v1', {
      headers: {
        'blogthing-api-key': process.env.BLOGTHING_API_KEY
      },
      params: {
        simpleMode: 'true',
        ...params
      },
      withCredentials: true
    })



    return result?.data?.data
  } catch (error: any) {

    return { error: error?.response?.data }
  }





}


export async function fetchNews(params: { category_id?: string; slug?: string, lang?: string; limit?: number; page?: number, simpleMode?: string, title?: string }) {
  const page = params.page || 1
  const limit = params.limit || 1
  const news = await getNews({ ...params, limit, page })
  return news
}



//Categories

const getCategories = async () => {
  try {
    const result = await axios.get('https://blogthing.starko.me/api/v1/categories', {
      headers: {
        'blogthing-api-key': process.env.BLOGTHING_API_KEY
      },
      withCredentials: true
    })


    return result.data.data

  } catch (error: any) {

    return { error: error.response.data }
  }






}


export async function fetchCategories() {

  const categories = await getCategories()
  return categories
}