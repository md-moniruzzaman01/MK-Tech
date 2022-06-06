module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-primary':'#FF6F00',
        'custom-secondary':'#644F9C',
        'custom-base':'#F2F2F2',
        'custom-gray':'#404040',
        'custom-icon':'#1d4999',
      },
      fontFamily: {
        primary: ['PT Sans', 'sans-serif'],
        primaryCaption: ['PT Sans Caption', 'sans-serif'],
        primaryNarrow: ['PT Sans Narrow', 'sans-serif']
      },
      daisyui: {
        themes: [
          {
            mytheme: {

              "primary": "#1e9ce9",

              "secondary": "#D926A9",

              "accent": "#0d2561",

              "neutral": "#191D24",

              "base-100": "#2A303C",

              "info": "#dff3fc",

              "success": "#dcf2ff",

              "warning": "#FBBD23",

              "error": "#F87272",
            },
          },
        ],
      },
    },
  },
  plugins: [require("daisyui")],
}
