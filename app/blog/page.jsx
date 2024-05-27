import Blog from '@/sections/blog'
import getData from '@/lib/getData'
import { PAGE_BLOG_ID } from '@/lib/constants'
const page = async () => {
  const dataAcf = await getData(`wp-json/acf/v3/pages/${PAGE_BLOG_ID}`)


  return <Blog data={dataAcf} />
}

export default page
