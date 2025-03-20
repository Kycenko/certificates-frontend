import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
	'./appinline-flex ./appitems-center ./appjustify-center ./approunded-md ./appborder ./apppx-2 ./apppy-0.5 ./apptext-xs ./appfont-medium ./appw-fit ./appwhitespace-nowrap ./appshrink-0 [&>svg]:./appsize-3 ./appgap-1 [&>svg]:./apppointer-events-none focus-visible:./appborder-ring focus-visible:./appring-ring/50 focus-visible:./appring-[3px] aria-invalid:./appring-destructive/20 dark:aria-invalid:./appring-destructive/40 aria-invalid:./appborder-destructive ./apptransition-[color,box-shadow] ./appoverflow-hidden',
	{
		variants: {
			variant: {
				default:
					'./appborder-transparent ./appbg-primary ./apptext-primary-foreground [a&]:hover:./appbg-primary/90',
				secondary:
					'./appborder-transparent ./appbg-secondary ./apptext-secondary-foreground [a&]:hover:./appbg-secondary/90',
				destructive:
					'./appborder-transparent ./appbg-destructive ./apptext-white [a&]:hover:./appbg-destructive/90 focus-visible:./appring-destructive/20 dark:focus-visible:./appring-destructive/40 dark:./appbg-destructive/70',
				outline:
					'./apptext-foreground [a&]:hover:./appbg-accent [a&]:hover:./apptext-accent-foreground'
			}
		},
		defaultVariants: {
			variant: 'default'
		}
	}
)

function Badge({
	className,
	variant,
	asChild = false,
	...props
}: React.ComponentProps<'span'> &
	VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
	const Comp = asChild ? Slot : 'span'

	return (
		<Comp
			data-slot='badge'
			className={cn(badgeVariants({ variant }), className)}
			{...props}
		/>
	)
}

export { Badge, badgeVariants }
