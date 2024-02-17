import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { SizeType, sizes } from '../../../lib'

const fontSizes: { [key in SizeType]: string } = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
}

export const card = recipe({
  base: {
    display: 'flex !important',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#191f28',
    borderRadius: '16px',
    padding: '24px',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  variants: {
    size: {
      xs: {
        fontSize: fontSizes.xs,
        height: sizes[12],
        minWidth: sizes[12],
      },
      sm: {
        fontSize: fontSizes.sm,
        height: sizes[16],
        minWidth: sizes[16],
      },
      md: {
        fontSize: fontSizes.md,
        height: sizes[20],
        minWidth: sizes[20],
      },
      lg: {
        fontSize: fontSizes.lg,
        height: sizes[24],
        minWidth: sizes[24],
      },
      xl: {
        fontSize: fontSizes.xl,
        height: sizes[28],
        minWidth: sizes[28],
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type CardVariants = RecipeVariants<typeof card>
