import { Fragment } from 'react'
import { Show } from '../../show'
import * as s from './breadcrumb.css'

interface BreadCrumbProps {
  homeName?: string
  /**
   * @example
   * import { usePathname } from 'next/navigation'
   *
   * const paths = usePathname()
   * const pathNames = paths.split('/').filter(path => path)
   *
   * return <NextBreadcrumb pathNames={pathNames} />
   */
  pathNames: string[]
  /**
   * 첫 문자 대문자 변환 여부
   */
  isCapitalizeFirstChar?: boolean
}

export function Breadcrumb({ homeName = '홈', pathNames, isCapitalizeFirstChar }: BreadCrumbProps) {
  const capitalizeFirstChar = (str: string) =>
    isCapitalizeFirstChar ? str[0].toUpperCase() + str.slice(1, str.length) : str

  const pathResult = pathNames.slice(0, 2)

  return (
    <ul className={s.breadcrumbBlock}>
      <li>
        <a href='/home' className={s.crumb()}>
          {homeName}
        </a>
      </li>
      {pathResult.length > 0 && (
        <Show when={pathNames[0] !== 'home'}>
          <span className={s.breadcrumbDivider}>/</span>
        </Show>
      )}
      {pathResult.map((pathName, index) => (
        <Fragment key={index}>
          <Show when={pathName !== 'home'}>
            <li>
              <a
                href={`/${pathNames.slice(0, index + 1).join('/')}`}
                className={s.crumb({ active: pathName === pathNames[pathNames.length - 1] })}
              >
                {capitalizeFirstChar(pathName)}
              </a>
            </li>
            {pathResult.length !== index + 1 && <span className={s.breadcrumbDivider}>/</span>}
          </Show>
        </Fragment>
      ))}
    </ul>
  )
}
