import { recipe, type RecipeVariants } from '@vanilla-extract/recipes'
import { lightText, palette, sizeSets } from '../../../lib'

export const button = recipe({
  base: {
    outline: 'none',
    border: 'none',
    boxSizing: 'border-box',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.2s ease-out',
    WebkitTapHighlightColor: 'transparent',
    paddingLeft: '1em',
    paddingRight: '1em',
    ':disabled': {
      filter: 'grayscale(15%)',
      cursor: 'not-allowed',
      opacity: '0.6',
    },
    ':focus-visible': {
      boxShadow: `0 0 0.5rem ${palette('light').primary.color}e4`,
    },
  },
  variants: {
    /** 버튼 종류 */
    variant: {
      solid: {
        background: palette('light').primary.color,
        color: lightText.primary,
        ':hover': {
          background: palette('light').primary.hover,
        },
        ':active': {
          background: palette('light').primary.active,
        },
      },
      outline: {
        border: `1px solid ${palette('light').primary.color}`,
        background: 'transparent',
        color: palette('light').primary.color,
        ':hover': {
          background: palette('light').colors[50],
        },
        ':active': {
          background: palette('light').colors[100],
        },
      },
      ghost: {
        background: 'transparent',
        color: palette('light').primary.color,
        ':hover': {
          background: palette('light').colors[50],
        },
        ':active': {
          background: palette('light').colors[100],
        },
      },
      link: {
        background: 'transparent',
        color: palette('light').primary.color,
        ':hover': {
          textDecoration: 'underline',
          textDecorationThickness: '2.5px',
        },
        ':active': {
          background: palette('light').colors[700],
          textDecoration: 'underline',
          textDecorationThickness: '2.5px',
        },
      },
    },
    /** 버튼 크기 */
    size: {
      xs: {
        fontSize: sizeSets.xs.fontSize,
        height: sizeSets.xs.height,
        minWidth: sizeSets.xs.minWidth,
      },
      sm: {
        fontSize: sizeSets.sm.fontSize,
        height: sizeSets.sm.height,
        minWidth: sizeSets.sm.minWidth,
      },
      md: {
        fontSize: sizeSets.md.fontSize,
        height: sizeSets.md.height,
        minWidth: sizeSets.md.minWidth,
      },
      lg: {
        fontSize: sizeSets.lg.fontSize,
        height: sizeSets.lg.height,
        minWidth: sizeSets.lg.minWidth,
      },
      xl: {
        fontSize: sizeSets.xl.fontSize,
        height: sizeSets.xl.height,
        minWidth: sizeSets.xl.minWidth,
      },
    },
    /** 둥근 버튼 */
    round: {
      true: {
        borderRadius: '100px',
      },
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
    round: false,
  },
})

export type ButtonVariants = RecipeVariants<typeof button>
