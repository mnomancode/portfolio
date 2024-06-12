import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
		extend: {

			
			typography: {
				DEFAULT: {
				
					css: {
						"code::before": {
							content: '""',
						},
						"code::after": {
							content: '""',
						},
					},
				},
				quoteless: {
					css: {
						"blockquote p:first-of-type::before": { content: "none" },
						"blockquote p:first-of-type::after": { content: "none" },
					},
				},
			},
			fontFamily: {
				sans: ["var(--font-inter)"],
				display: ["var(--font-calsans)"],
			},
			// backgroundImage: {
			// 	"gradient-radial":
			// 		"radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
			// },
			animation: {
				"fade-in": "fade-in 3s ease-in-out forwards",
				title: "title 3s ease-out forwards",
				"fade-left": "fade-left 3s ease-in-out forwards",
				"fade-right": "fade-right 3s ease-in-out forwards",
				"slide-right": "slide-right 3s ease-in-out forwards",
				spotlight: "spotlight 2s ease .75s 1 forwards",

				"meteor-effect": "meteor 5s linear infinite",
			},
			keyframes: {
				spotlight: {
					"0%": {
					  opacity: "0",
					  transform: "translate(-72%, -62%) scale(0.5)",
					},
					"100%": {
					  opacity: "1",
					  transform: "translate(-50%,-40%) scale(1)",
					},
				  },

				meteor: {
					"0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
					"70%": { opacity: "1" },
					"100%": {
					  transform: "rotate(215deg) translateX(-500px)",
					  opacity: "0",
					},
				  },
				
				"fade-in": {
					"0%": {
						opacity: "0%",
					},
					"75%": {
						opacity: "0%",
					},
					"100%": {
						opacity: "100%",
					},
				},
				"fade-left": {
					"0%": {
						transform: "translateX(100%)",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",
					},
				},
				"slide-right": {
					"0%": {
						transform: "translateX(-100%)",
						opacity: "0%",
					},

					"100%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
					
				},


				"fade-right": {
					"0%": {
						transform: "translateX(-100%)",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",
					},
				},
				title: {
					"0%": {
						"line-height": "0%",
						"letter-spacing": "0.25em",
						opacity: "0",
					},
					"25%": {
						"line-height": "0%",
						opacity: "0%",
					},
					"80%": {
						opacity: "100%",
					},

					"100%": {
						"line-height": "100%",
						opacity: "100%",
					},
				},
			},
		},
	},
  plugins: [
		require("@tailwindcss/typography"),
		
	],
};
export default config;
