import { style } from '@vanilla-extract/css'
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const breadcrumbBlock = style({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '4px',
  marginLeft: '-4px',
  minHeight: '25px',
  listStyleType: 'none',
})

export const breadcrumbDivider = style([
  {
    color: '#474747',
  },
])

export const crumb = recipe({
  base: {
    display: 'inline-block',
    padding: '4px 6px',
    color: '#474747',
    fontWeight: '',
    fontSize: '13px',
    letterSpacing: '0.2px',
    transition: '0.2s',
    ':hover': {
      background: '#f3f3f3',
      borderRadius: '4px',
    },
    ':active': {
      background: '#ebebeb',
    },
  },
  variants: {
    active: {
      true: {
        fontWeight: '500',
        color: '#000',
      },
    },
  },
  defaultVariants: {
    active: false,
  },
})

export type CrumbVariants = RecipeVariants<typeof crumb>
