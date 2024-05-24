export default function InformationForm({
  dataForm = {},
  data,
  paxValueLocal,
  paxValueSelf,
}) {
  // console.log(dataForm)
  const formattedDate = (date) => {
    let newDate = new Date(date || 0)
    let day = newDate.getDate()
    let month = newDate.getMonth() + 1
    let year = newDate.getFullYear()
    return `${day}/${month}/${year}`
  }

  return (
    <div className='space-y-[0.75rem] w-[35.5rem] py-[1.5rem] pl-[0.75rem] pr-[1.5rem]'>
      <span className='text-0875 font-bold text-greyscale-80 opacity-40'>
        Confirmed tour booking
      </span>
      <div className='bg-[#F8F8F8] rounded-[0.5rem] border-[0.5px] border-solid border-[#eee]'>
        <div className='w-full flex'>
          <div className='h-[2.5rem] flex items-center w-[12.1875rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-r-[0.5px] border-solid border-[#eee] font-extrabold text-0875 text-[#2E2E2E]'>
            Type of tour
          </div>
          <div className='max-w-[20rem] w-[20rem] line-clamp-2 text-ellipsis flex flex-1 items-center h-[2.5rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-solid border-[#eee] text-075 text-[#727272]'>
            Ha Giang Loop tour: {dataForm?.typeoftour}{' '}
            {dataForm?.typeoftour && dataForm?.choosedays && 'in '}
            {dataForm?.choosedays}
          </div>
        </div>
        <div className='w-full flex'>
          <div className='h-[2.5rem] flex items-center w-[12.1875rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-r-[0.5px] border-solid border-[#eee] font-extrabold text-0875 text-[#2E2E2E]'>
            Name
          </div>
          <div className='max-w-[20rem] w-[20rem] line-clamp-2 text-ellipsis flex flex-1 items-center h-[2.5rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-solid border-[#eee] text-075 text-greyscale-80'>
            <p className='text-075 text-[#727272] line-clamp-2 text-ellipsis'>
              {dataForm?.username} {dataForm?.username && ' - '}
              <span className='text-0875 text-[#2E2E2E] font-semibold'>
                {paxValueSelf + paxValueLocal} pax
              </span>
            </p>
          </div>
        </div>
        <div className='w-full flex'>
          <div className='h-[2.5rem] flex items-center w-[12.1875rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-r-[0.5px] border-solid border-[#eee] font-extrabold text-0875 text-[#2E2E2E]'>
            Contact Info
          </div>
          <div className='max-w-[20rem] w-[20rem] line-clamp-2 text-ellipsis flex flex-1 items-center h-[2.5rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-solid border-[#eee] text-075 text-[#727272]'>
            {dataForm?.email} {dataForm?.email && dataForm?.phone && ' - '}{' '}
            {dataForm?.phone}
          </div>
        </div>
        <div className='w-full flex'>
          <div className='h-[3.5rem] flex items-center w-[12.1875rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-r-[0.5px] border-solid border-[#eee] font-extrabold text-0875 text-[#2E2E2E]'>
            Pick up
          </div>
          <div className='max-w-[20rem] w-[20rem] line-clamp-2 text-ellipsis flex flex-1 items-center h-[3.5rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-solid border-[#eee] text-075 text-[#727272]'>
            <p className='text-075 text-[#727272] line-clamp-2 text-ellipsis'>
              <span className='text-0875 font-semibold text-greyscale-80'>
                {formattedDate(dataForm?.dob)}
              </span>
              {dataForm?.address && ' from '} {dataForm?.address}
            </p>
          </div>
        </div>
        <div className='w-full flex'>
          <div className='h-[2.5rem] flex items-center w-[12.1875rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-r-[0.5px] border-solid border-[#eee] font-extrabold text-0875 text-[#2E2E2E]'>
            Tour duration
          </div>
          <div className='max-w-[20rem] w-[20rem] line-clamp-2 text-ellipsis flex flex-1 items-center h-[2.5rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-solid border-[#eee] text-075 text-[#727272]'>
            {dataForm?.choosedays}
          </div>
        </div>
        <div className='w-full flex'>
          <div className='h-[3.5rem] flex items-center w-[12.1875rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-r-[0.5px] border-solid border-[#eee] font-extrabold text-0875 text-[#2E2E2E]'>
            Droff off
          </div>
          <div className='max-w-[20rem] w-[20rem] line-clamp-2 text-ellipsis flex flex-1 items-center h-[3.5rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-solid border-[#eee] text-075 text-[#727272]'>
            <p className='text-075 text-[#727272] line-clamp-2 text-ellipsis'>
              <span className='text-0875 font-semibold text-greyscale-80'>
                {formattedDate(dataForm?.enddate)}
              </span>
              {dataForm?.droff && ' - '} {dataForm?.droff}{' '}
              {dataForm?.destination && ' , '} {dataForm?.destination}
            </p>
          </div>
        </div>
        <div className='w-full flex'>
          <div className='h-[2.5rem] flex items-center w-[12.1875rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-r-[0.5px] border-solid border-[#eee] font-extrabold text-0875 text-[#2E2E2E]'>
            Self-driving
          </div>
          <div className='max-w-[20rem] w-[20rem] line-clamp-2 text-ellipsis flex flex-1 items-center h-[2.5rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-solid border-[#eee]'>
            <p className='text-0875 text-greyscale-80'>
              ${paxValueSelf} x {data?.paxValueSelf}
            </p>
          </div>
        </div>
        <div className='w-full flex'>
          <div className='h-[2.5rem] flex items-center w-[12.1875rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-r-[0.5px] border-solid border-[#eee] font-extrabold text-0875 text-[#2E2E2E]'>
            Easy driver
          </div>
          <div className='max-w-[20rem] w-[20rem] line-clamp-2 text-ellipsis flex flex-1 items-center h-[2.5rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-solid border-[#eee]'>
            <p className='text-0875 text-greyscale-80'>
              ${paxValueLocal} x {data?.paxValueLocal}
            </p>
          </div>
        </div>
        <div className='w-full flex'>
          <div className='h-[3.5rem] flex items-center w-[12.1875rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-r-[0.5px] border-solid border-[#eee] font-extrabold text-0875 text-[#2E2E2E]'>
            Message
          </div>
          <div className='max-w-[20rem] w-[20rem] flex flex-1 items-center h-[3.5rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-solid border-[#eee]'>
            <p className='text-075 text-[#727272] line-clamp-2 text-ellipsis'>
              {dataForm?.message}
            </p>
          </div>
        </div>
      </div>
      <div className='w-full py-[0.75rem] px-[1rem] rounded-[0.5rem] bg-[#23704D] mb-[0.5rem]'>
        <div className='flex justify-between items-center w-full mb-[0.5rem]'>
          <span className='text-0875 font-bold text-greyscale-5'>
            Provisional:
          </span>
          <span className='text-1 font-bold text-greyscale-5'>
            $
            {paxValueSelf * data?.paxValueSelf +
              paxValueLocal * data?.paxValueLocal}
          </span>
        </div>
        <div className='flex justify-between items-center w-full'>
          <span className='text-0875 font-bold text-greyscale-5'>
            Service Charge 3%:
          </span>
          <span className='text-1 font-bold text-greyscale-5'>
            $
            {(
              ((paxValueSelf * data?.paxValueSelf +
                paxValueLocal * data?.paxValueLocal) /
                100) *
              3
            ).toFixed(2)}
          </span>
        </div>
        <hr className='w-[31.25rem] h-[0.0625rem] my-[0.5rem] bg-[#d9d9d9]/20 opacity-40' />
        <div className='flex justify-between items-center w-full'>
          <span className='text-0875 font-bold text-greyscale-5'>
            Total amount:
          </span>
          <span className='text-1 font-bold text-greyscale-5'>
            $
            {((paxValueSelf * data?.paxValueSelf +
              paxValueLocal * data?.paxValueLocal) /
              100) *
              3 +
              (paxValueSelf * data?.paxValueSelf +
                paxValueLocal * data?.paxValueLocal)}
          </span>
        </div>
      </div>
    </div>
  )
}
