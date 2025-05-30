import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['PT Sans', 'sans-serif'],
        headline: ['Playfair Display', 'serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        gradientAnimation: { // Added from globals.css for completeness if needed directly in tailwind
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        rise: { // Added from globals.css
          '0%': { transform: 'translateY(0) translateX(0) rotate(0deg)', opacity: '1' },
          '25%': { transform: 'translateY(-25vh) translateX(5vw) rotate(-5deg)' },
          '50%': { transform: 'translateY(-50vh) translateX(-5vw) rotate(5deg)' },
          '75%': { transform: 'translateY(-75vh) translateX(3vw) rotate(-3deg)' },
          '100%': { transform: 'translateY(-110vh) translateX(0) rotate(0deg)', opacity: '0'},
        },
        flicker: { // Added from globals.css
          '0%': { transform: 'scaleY(1) scaleX(1) translateY(0)', opacity: '1' },
          '50%': { transform: 'scaleY(0.95) scaleX(1.05) translateY(-2px)', opacity: '0.85' },
          '100%': { transform: 'scaleY(1.05) scaleX(0.95) translateY(0)', opacity: '1' },
        },
        'flicker-inner': { // Added from globals.css
          '0%': { transform: 'scaleY(1) scaleX(1)', opacity: '0.7' },
          '50%': { transform: 'scaleY(0.9) scaleX(1.1)', opacity: '0.5' },
          '100%': { transform: 'scaleY(1.1) scaleX(0.9)', opacity: '0.7' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'gradient-bg': 'gradientAnimation 20s ease infinite',
        'balloon-rise': 'rise linear infinite', // Custom name for balloon animation
        'flame-flicker': 'flicker 0.3s infinite alternate',
        'flame-flicker-inner': 'flicker-inner 0.35s infinite alternate',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
