import type { ButtonHTMLAttributes, MouseEvent } from 'react'
import { button, type ButtonVariants } from './button.css'

interface ButtonProps {
  /** button의 type 속성 */
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  /** 버튼 클릭 이벤트 함수 */
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  /** button의 className. vanilla extract 스타일 추가 가능 */
  className?: string
  children?: React.ReactNode
}

export function Button({
  type = 'button',
  onClick,
  className,
  children,
  ...variants
}: ButtonProps & ButtonVariants): JSX.Element {
  return (
    <button
      type={type}
      className={`${button(variants)} ${className}`}
      onClick={onClick}
      data-button
    >
      {children}
    </button>
  )
}
