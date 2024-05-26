import Banner from '../common/banner'
import Breadcrumb from '@/components/breadcrumb'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import QuestionLookHere from './QuestionLookHere'
import FrequentlyAskedQuestions from './FrequentlyAskedQuestions'
import './styles.css'
import getData from '@/lib/getData'

const pageId = 155
const getFaqData = async () => {
  return getData(`/pages/${pageId}`, 'acf')
}

export default async function Faq() {
  const data = (await getFaqData()).acf
  return (
    <main>
      <section>
        <Banner
          mainImg={data.banner.background_image.url}
          mainTextMb={'/imgs/faq/banner-title-mb.png'}
          mainText={'/imgs/faq/banner-title.png'}
        />
      </section>
      <div className='md:mb-5'>
        <Breadcrumb divider>
          <BreadcrumbLink href='/faq'>FAQs</BreadcrumbLink>
        </Breadcrumb>
      </div>
      <QuestionLookHere data={data.section_questions_look_here} />
      <FrequentlyAskedQuestions data={data.section_frequently_asked_questions} />
    </main>
  )
}
