// 'use client'

const WrapNav = () => {
  // const setIsMobile = useStore((state) => state.setIsMobile)
  // const isMobile = useStore((state) => state.isMobile)

  // useEffect(() => {
  //   const userAgent =
  //     typeof navigator === 'undefined' ? '' : navigator.userAgent
  //   const mobileCheck =
  //     /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  //       userAgent,
  //     )
  //   setIsMobile(mobileCheck)
  // }, [])

  return <div className='absolute top-0 z-50 opacity-0'>WrapNav</div>
}

export default WrapNav
