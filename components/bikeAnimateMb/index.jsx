'use client'

import gsap from 'gsap'
import React, {useEffect, useRef} from 'react'
import {MotionPathPlugin} from 'gsap/MotionPathPlugin'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(MotionPathPlugin)
}
const BikeAnimationMb = ({children}) => {
  const sectionRef = useRef()

  useEffect(() => {
    let isStart = false
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset
      const sectionTop = sectionRef.current?.getBoundingClientRect()?.top

      if (sectionTop > 0 && sectionTop < scrollPosition / 2 && !isStart) {
        isStart = true

        gsap.to('#rect', {
          duration: 6,
          motionPath: {
            path: '#pathMb',
            autoRotate: true,
            start: 0,
            end: 0.06,
          },
        })
        return
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => window?.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div
      className='relative w-full'
      ref={sectionRef}
    >
      {/* icon xe máy */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='71'
        height='60'
        viewBox='0 0 71 60'
        fill='none'
        id='rect'
      >
        <g clipPath='url(#clip0_9103_25132)'>
          <path
            d='M9.84463 38.1497C11.7748 37.3206 13.8983 37.5608 15.5518 38.602C13.7849 37.2873 11.3813 36.9205 9.20997 37.8519C5.98091 39.2379 4.49519 42.9668 5.88939 46.1788C7.25552 49.3254 10.8762 50.8105 14.0572 49.5723C11.1148 50.4648 7.90075 49.0315 6.65084 46.1541C5.30915 43.0634 6.73788 39.479 9.84256 38.1472L9.84463 38.1497Z'
            fill='#13341C'
          />
          <path
            d='M65.8338 46.8068C65.5136 41.268 60.7393 37.0314 55.1734 37.3443C54.2999 37.3944 53.4594 37.5521 52.6625 37.8048L51.2725 34.5075L51.1265 34.5687L49.8609 31.7522C50.4348 31.562 51.115 31.4014 51.9366 31.2903C54.0239 31.008 57.3793 31.3768 58.2734 31.6647C59.3748 32.0183 60.7779 32.8712 61.2377 33.0373C61.6976 33.2034 62.6896 33.2005 62.6896 33.2005C62.6896 33.2005 60.4688 30.7707 59.5515 30.1028C58.6343 29.435 55.991 28.7328 53.796 28.5083C53.02 28.4273 51.77 28.3825 50.508 28.4754L49.1266 23.5577L44.0037 19.6715L44.9752 22.1168L44.1496 22.466L44.6238 23.5207C44.5344 23.5068 44.4449 23.4951 44.3558 23.4788C43.8182 23.388 44.095 23.4794 43.7314 23.3279C43.7314 23.3279 43.7027 23.3574 43.6585 23.4014C42.9156 22.8027 41.3037 21.3421 40.824 20.5856C40.2023 19.6058 39.2531 18.8652 38.917 18.6726C38.7405 17.8435 38.1678 15.2801 37.6815 14.4534C38.0783 14.2424 38.4808 14.0436 38.8934 13.8597C38.7073 13.2566 38.5198 12.7113 38.3243 12.355C38.246 12.2125 38.0861 12.0499 37.8693 11.8744C37.9643 11.6782 38.0784 11.477 38.2251 11.2978C39.1681 11.8757 40.0567 12.3946 40.4002 12.5602C40.4002 12.5602 41.0072 12.3873 41.5989 11.5134C42.1079 10.7629 42.0698 10.5481 42.0444 10.3903L41.7174 10.3561L41.0977 10.0043C41.0977 10.0043 41.8095 8.76072 42.1781 6.96951C42.1781 6.96951 44.1872 7.23486 44.6007 7.24329C45.0072 7.251 45.5026 7.23323 45.479 7.01306C45.4465 6.72248 42.2289 4.96679 41.9858 4.68664C41.3273 3.92539 38.6186 2.825 36.5556 3.96684C36.2394 4.14226 35.979 4.33973 35.7662 4.54913C35.6931 4.5137 35.6442 4.53639 35.4269 4.78931C35.273 4.97011 35.1753 5.21468 35.1271 5.47599C34.708 6.4351 34.8462 7.45238 34.8323 8.03226C34.8222 8.37398 34.9496 8.84818 35.2604 9.26046L34.3474 9.79975C34.3221 9.79711 34.3019 9.79036 34.2885 9.78434C34.2942 9.79651 34.3023 9.80893 34.3103 9.82135L34.283 9.83703C33.9172 9.66219 33.5819 9.50675 33.3064 9.38071C32.8442 9.17033 32.3025 9.25274 31.925 9.59084C30.7822 10.6157 28.304 12.8583 26.5659 14.657C26.5659 14.657 25.4787 15.4607 23.2602 18.2261C22.4815 19.1963 22.3275 20.0024 22.0607 20.1946C21.7939 20.3867 20.2786 22.4149 20.7677 24.0849C20.9514 24.7109 21.4701 25.2491 22.069 25.6891C20.5505 25.1392 16.8142 23.5355 16.1106 23.4296C15.329 23.3132 15.018 23.2599 14.6321 23.2544C14.3718 23.2504 10.3413 22.1463 7.58964 21.5903C6.22189 21.3132 3.25018 21.6167 3.25018 21.6167C3.46265 21.6551 6.03976 22.9015 7.4606 23.4506C10.3336 24.5611 12.1981 25.8328 12.159 25.9167C12.1316 25.9787 12.883 26.7195 13.6769 27.4764L10.8014 25.944C10.6207 25.8464 10.4119 25.8177 10.2074 25.8589L8.92277 26.1231C8.60877 26.1876 8.35242 26.4133 8.21699 26.7072C7.88495 26.7883 7.64966 26.9907 7.55369 27.0849C7.44708 27.1919 7.30651 27.8026 7.30454 27.9552C7.30454 27.9552 7.58242 28.2367 7.63269 28.2234C7.68042 28.2122 7.76511 27.7578 7.96487 27.8065C8.00124 27.8149 8.04245 27.8215 8.08136 27.8279L8.04177 28.6529C8.02151 29.07 8.24051 29.4472 8.59396 29.6069L18.9173 34.2491L19.6295 34.1614L20.0539 33.5294C20.8991 34.1295 21.8284 34.838 22.3609 35.3568C22.7667 35.7512 23.8209 36.3106 24.9235 36.831C24.9834 37.0827 24.9736 37.355 24.7895 37.6021C24.5975 37.8577 24.365 38.3684 24.1513 38.9205C23.8656 39.1825 23.3644 39.7694 23.686 40.3009C23.6157 40.5507 23.5658 40.7609 23.5466 40.9002L21.58 41.1858C21.4564 40.7421 21.3045 40.3024 21.1147 39.8681C18.9022 34.7733 12.9605 32.4205 7.84046 34.6166C2.72274 36.8129 0.364511 42.7228 2.57684 47.8199C4.7894 52.9146 10.7311 55.2674 15.8511 53.0713C19.7892 51.3818 22.0899 47.4948 21.9352 43.4695L25.3435 42.9754C25.3827 43.0906 25.4553 43.1978 25.5589 43.2758L26.6749 44.1357C26.9335 44.3341 27.299 44.3121 27.53 44.0837L27.93 43.6855C28.5263 44.2179 29.1786 44.7029 29.6885 44.9692C32.2561 46.3073 34.8491 45.2162 34.8491 45.2162C36.0493 45.0473 36.8738 45.3326 37.231 45.1661C37.7154 44.941 38.4821 44.3309 39.0491 43.7833C39.4643 44.0652 39.9119 44.237 40.336 44.2326C41.3517 44.2252 42.5282 43.681 42.8395 43.0187C43.399 41.8287 43.2445 39.9644 43.1268 39.0627C43.5118 39.0983 43.8961 39.0967 44.0866 38.8549C44.4676 38.3712 45.0037 38.2535 45.2972 37.7607C45.5908 37.2679 45.8748 35.5953 45.9716 35.1584C46.0687 34.7192 46.0926 34.0894 46.0926 34.0894L45.7842 33.8326C46.5004 33.5947 47.4468 33.2025 47.907 32.8082C48.1014 32.6409 48.3255 32.479 48.5862 32.3232L49.8403 35.1153L49.6624 35.1917L51.0508 38.4819C47.6645 40.2591 45.4468 43.8861 45.6823 47.9407C46.0025 53.4794 50.7768 57.716 56.3427 57.4031C61.9086 57.0902 66.1612 52.3439 65.841 46.8052L65.8338 46.8068ZM24.1971 35.0714C23.5057 34.7143 22.265 33.1094 20.9203 32.2325L21.1545 31.8841C22.4503 32.7165 24.3757 33.9621 24.3806 34.0043C24.4143 34.3066 24.4276 34.7804 24.4316 35.1885C24.3408 35.1443 24.2589 35.1033 24.1971 35.0714ZM15.3058 51.8285C10.8778 53.7286 5.7363 51.6933 3.82217 47.2852C1.90804 42.877 3.94807 37.7631 8.37608 35.863C12.8041 33.9629 17.9456 35.9982 19.8597 40.4064C20.0006 40.7291 20.1154 41.0561 20.2139 41.3837L19.8972 41.4293C19.8053 41.1279 19.697 40.8271 19.5673 40.531C17.7226 36.283 12.7665 34.3226 8.4996 36.1515C4.23241 37.9827 2.26751 42.9122 4.10992 47.16C5.95464 51.4081 10.9107 53.3684 15.1777 51.5396C18.4019 50.1553 20.3116 47.0034 20.257 43.7135L20.5714 43.6676C20.6441 47.096 18.6618 50.3863 15.3035 51.8283L15.3058 51.8285ZM9.45534 43.7415C9.40159 45.0143 10.3975 46.0887 11.6744 46.1433C12.7104 46.1866 13.6152 45.5469 13.9486 44.6275L19.7324 43.7884C19.7574 46.8482 17.9696 49.7698 14.9697 51.0569C10.9681 52.7746 6.32297 50.9347 4.59265 46.951C2.86232 42.9674 4.70648 38.3472 8.70807 36.6295C12.7097 34.9119 17.3548 36.7518 19.0851 40.7354C19.1958 40.9902 19.2902 41.2455 19.3726 41.5043L13.537 42.3495C13.1327 41.8742 12.5391 41.5621 11.867 41.5336C10.5878 41.4788 9.50909 42.4686 9.45558 43.7392L9.45534 43.7415ZM38.5679 25.8738C37.3916 26.1934 35.9091 26.6362 34.802 27.0278C32.9752 24.704 30.0041 21.1003 30.0041 21.1003C30.0041 21.1003 30.4075 20.67 30.8633 20.2057C31.8197 19.3398 33.3623 18.0764 34.367 17.4379C34.6589 18.1655 35.1801 19.4381 35.3745 19.7387C35.4146 19.8008 35.4667 19.8595 35.5236 19.9164C35.6832 20.1044 35.9325 20.3922 36.0722 20.5249L36.464 20.897C36.7165 21.1318 37.0438 21.4532 37.283 21.726C37.4431 21.9094 37.7087 22.1525 38.0452 22.4077C38.655 22.8767 39.486 23.3896 40.2753 23.6781C41.4968 24.1299 42.5161 24.556 42.5161 24.556C42.5161 24.556 42.5161 24.556 42.677 24.3967C42.6118 24.4641 42.5547 24.5206 42.5156 24.5605C42.2585 24.8163 42.323 24.867 42.3585 25.0398C42.394 25.2126 42.7123 25.1068 43.0052 25.2671C43.0558 25.2955 43.1079 25.3311 43.1619 25.3715C41.9851 25.2046 41.0065 25.2136 38.5679 25.8738ZM40.7272 42.8051C40.4293 42.8713 40.1216 42.7859 39.8414 42.6385C39.9157 42.3498 39.9523 42.1336 40.1905 41.6582C40.4637 41.1146 41.4889 39.612 41.9919 39.1643C42.0365 39.7618 42.0865 40.5545 42.0591 40.906C41.963 42.0934 41.6944 42.5934 40.7295 42.8053L40.7272 42.8051ZM52.4208 41.747C50.4686 42.9212 49.2162 45.1065 49.3586 47.5324C49.5578 50.9532 52.4466 53.5848 55.8648 53.5085C52.7907 53.3428 50.2664 50.8998 50.0857 47.7704C49.9587 45.5754 51.0161 43.5852 52.7069 42.4184L54.0916 45.6989C53.6729 46.0976 53.4012 46.6482 53.3735 47.2707C53.3197 48.5435 54.3156 49.6179 55.5925 49.6725C56.8718 49.7273 57.9505 48.7375 58.004 47.4669C58.0577 46.1941 57.0619 45.1197 55.7849 45.0651C55.7665 45.0632 55.7476 45.0658 55.7289 45.0662L54.2828 41.638C54.7769 41.4765 55.302 41.3738 55.8451 41.3448C57.9456 41.226 59.8576 42.176 61.0514 43.7181C59.8442 41.8805 57.7126 40.7153 55.3522 40.8487C54.8981 40.8731 54.4596 40.9477 54.0381 41.0612L53.5229 39.8424C54.0918 39.6772 54.6849 39.57 55.3031 39.535C59.6561 39.29 63.3863 42.6023 63.6373 46.9318C63.8883 51.2612 60.5631 54.9718 56.2125 55.217C51.8595 55.462 48.1293 52.1497 47.8783 47.8202C47.6993 44.7189 49.3516 41.9361 51.9045 40.5165L52.4252 41.7497L52.4208 41.747ZM56.2581 56.051C51.4415 56.3216 47.3128 52.6574 47.0334 47.864C46.8319 44.399 48.7017 41.2938 51.5716 39.736L51.6949 40.0268C48.9445 41.5323 47.1572 44.5163 47.3496 47.8461C47.6169 52.4644 51.5987 55.9976 56.2397 55.7364C60.8807 55.4751 64.4272 51.5167 64.1599 46.8983C63.8925 42.28 59.9107 38.7468 55.2697 39.008C54.593 39.0462 53.9381 39.1655 53.3158 39.3506L53.1928 39.0575C53.8489 38.8597 54.5373 38.7324 55.2516 38.6912C60.0682 38.4205 64.1969 42.0848 64.4762 46.8781C64.7533 51.6712 61.0751 55.7757 56.2583 56.0487L56.2581 56.051Z'
            fill='#13341C'
          />
        </g>
        <defs>
          <clipPath id='clip0_9103_25132'>
            <rect
              width='65'
              height='53'
              fill='white'
              transform='translate(5.50391) rotate(5.96045)'
            />
          </clipPath>
        </defs>
      </svg>

      {/* svg núi mb */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='375'
        height='652'
        viewBox='0 0 375 652'
        fill='none'
        className='w-[100vw] h-auto tablet:h-full flex'
      >
        <path
          d='M-8.68307 4.23723C-8.71971 4.23594 -8.7563 4.23464 -8.79282 4.23332C-8.67274 4.23332 -8.55747 4.23327 -8.44692 4.23318C-5.27222 4.23059 -5.99293 4.19272 -8.44692 4.23318C-8.52395 4.23445 -8.6027 4.2358 -8.68307 4.23723C1.19827 4.58495 15.3504 3.99498 24.8687 5.11275C31.4225 5.88241 38.5035 6.3744 45.306 6.7025C57.3189 7.2819 70.0654 9.42381 81.5723 10.6599C106.635 13.3523 149.008 17.6635 173.24 13.0615C190.36 9.81 202.98 5.19417 223.832 4.84216C234.955 4.65439 245.436 3.80773 256.291 3.62448C260.983 3.54528 276.062 0.319161 276.528 0.444993C287.773 3.48211 300.233 7.42873 314.898 8.52901C338.301 10.2848 361.957 9.22499 385.227 11.8438C387.157 12.061 415.505 26.1068 417.525 25.2541C421.925 23.3972 428.196 22.3338 434.657 21.3644C441.974 20.2664 446.116 26.8101 454.72 26.8101C459.659 26.8101 460.412 26.3468 464.538 25.7277C467.658 25.2595 471.593 26.006 474.456 25.2541C479.47 23.9373 478.516 34.3775 485.31 34.3775C488.648 34.3775 490.569 34.9864 493.424 34.9864C497.601 34.9864 500.533 33.8507 505.146 33.7687C515.512 33.5845 515.566 32.9579 520.975 36.8129C523.612 38.6929 527.278 39.3812 531.794 40.6012C537.126 42.0413 541.9 43.2641 548.826 43.9836C559.982 45.1426 575.562 44.5079 584.891 47.0278C590.27 48.4805 600.917 48.521 606.531 50.072C615.175 52.4599 630.15 53.3044 640.393 54.9427C645.252 55.7197 677.755 60.7718 681.869 59.0354C689.668 55.744 705.737 52.6304 717.033 50.5117C725.159 48.9875 731.993 48.9883 741.378 48.9895L742.179 48.9896C746.673 48.9896 746.812 50.1038 750.795 50.2073C755.977 50.3419 760.234 50.8161 765.722 50.8161C786.843 50.8161 807.157 50.5674 827.736 52.3044C836.219 53.0204 846.158 54.4691 854.985 54.4691H882.035C884.676 54.4691 891.171 54.8751 892.854 54.1647C894.955 53.278 901.203 54.9679 903.674 55.2133C912.383 56.0781 921.524 59.1571 930.724 59.3398C934.318 59.4112 936.501 59.9361 939.74 60.4222C945.382 61.2687 952.765 59.9704 958.574 60.8619C966.59 62.092 981.532 60.776 988.329 62.6884C991.552 63.5952 1012.73 63.2674 1016.63 63.6434C1029.6 64.894 1030.26 69.5752 1030.26 73.2495C1041.75 89.7079 1034.5 588.715 1033.87 646.294C1034.52 647.036 1035.68 647.542 1037.64 647.589C1039.38 647.631 1037.35 647.623 1033.86 647.597C1033.84 649.4 1033.83 650.629 1033.83 651.242V647.597C1027.88 647.552 1017.72 647.453 1014.75 647.453H1013.78C1006.79 647.453 998.967 647.453 991.603 647.589C967.583 648.032 944.362 647.938 920.573 647.42C883.694 646.616 845.783 643.8 809.07 643.8C772.22 643.8 736.184 643.192 699.57 643.192H630.944C608.677 643.192 586.935 644.246 564.723 644.375C514.328 644.669 463.85 644.409 413.447 644.409H90.0565H24.3365C16.9548 644.409 8.03008 644.862 0.793442 644.409C-25.0158 644.409 -28.0583 625.836 -23.0492 625.836C-28.1501 616.708 -26.8258 55.2607 -26.8258 45.9726V14.5836V6.66867C-26.8258 4.79094 -14.0696 4.33291 -8.68307 4.23723Z'
          fill='#13341C'
          id='pathMb'
        />
      </svg>
      {children}
    </div>
  )
}

export default BikeAnimationMb
