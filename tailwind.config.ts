import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'rgba(var(--background))',
  			foreground: 'rgba(var(--foreground))',
			foregroundSecondary: 'rgba(var(--foreground-secondary))',
  			card: {
  				DEFAULT: 'rgba(var(--card))',
  				foreground: 'rgba(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'rgba(var(--popover))',
  				foreground: 'rgba(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'rgba(var(--primary))',
  				foreground: 'rgba(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'rgba(var(--secondary))',
				  foreground: 'rgba(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'rgba(var(--muted))',
  				foreground: 'rgba(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'rgba(var(--accent))',
  				foreground: 'rgba(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'rgba(var(--destructive))',
  				foreground: 'rgba(var(--destructive-foreground))'
  			},
  			border: 'rgba(var(--border))',
  			input: 'rgba(var(--input))',
  			ring: 'rgba(var(--ring))',
  			chart: {
  				'1': 'rgba(var(--chart-1))',
  				'2': 'rgba(var(--chart-2))',
  				'3': 'rgba(var(--chart-3))',
  				'4': 'rgba(var(--chart-4))',
  				'5': 'rgba(var(--chart-5))'
  			},
			theme: { // Variables for settings theme (start: foreground, mid: accent, end: background)
				'claro-start': 'rgb(142, 86, 46)',
                'claro-mid': 'rgb(193, 154, 107)',
                'claro-end': 'rgb(240, 230, 210)',
                'oscuro-start': 'rgb(219, 176, 123)',
                'oscuro-mid': 'rgb(142, 86, 46)',
                'oscuro-end': 'rgb(54, 45, 28)',
				'noche-start': 'rgb(154, 175, 227)',
                'noche-mid': 'rgb(86, 135, 238',
                'noche-end': 'rgb(20, 24, 37)',
				'naturaleza-start': 'rgb(144, 204, 41)',
                'naturaleza-mid': 'rgb(150, 168, 88)',
                'naturaleza-end': 'rgb(32, 47, 36)',
				'retro-start': 'rgb(107, 208, 232)',
                'retro-mid': 'rgb(255, 20, 147)',
                'retro-end': 'rgb(19, 23, 36)',
				'brillante-start': 'rgb(40, 40, 4)',
                'brillante-mid': 'rgb(200, 200, 200)',
                'brillante-end': 'rgb(255, 255, 255)',
				'apagado-start': 'rgb(211, 211, 211)',
                'apagado-mid': 'rgb(60, 60, 60)',
                'apagado-end': 'rgb(27, 27, 27)',
			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		keyframes: {
			'border-spin': {
				'100%': {
					transform: 'rotate(-360deg)',
				},
			},
		},
		animation: {
			'border-spin': 'border-spin 4s linear infinite',
		  },
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
