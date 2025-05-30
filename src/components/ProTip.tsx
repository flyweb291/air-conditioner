import type { FC } from 'react'
import { adsenseLink, jumpToAdsense } from '~/utils/adsense'
import useDark from '~/hooks/useDark'

/**
 * 喜马拉雅链接
 * @param props
 */
const AdsenseLink: FC<{ text: string }> = (props) => {
  return (
    <a
      className="adsense-text-link"
      href={adsenseLink}
      target="_blank"
      onClick={() => {
        jumpToAdsense()
      }}
      rel="noreferrer"
    >
      {props.text || '喜马拉雅'}
    </a>
  )
}

const ProTip: FC = () => {
  const { toggleDark } = useDark()

  return (
    <div
      className="m-6 text-center flex justify-center items-center"
    >
      <div className="i-ic:outline-emoji-objects text-xl cursor-pointer" style={{ color: '#f3a83b' }} onClick={toggleDark}></div>
      Tip: 要问怎么凉，心静自然凉
    </div>
  )
}

export default ProTip
