import { PropsWithChildren } from 'react'
import * as css from './card.css'
import type { CardVariants } from './card.css'

interface CardProps {}

export function Card({ children, ...variantsProps }: PropsWithChildren<CardProps & CardVariants>) {
  return <div className={css.card(variantsProps)}>{children}</div>
}
