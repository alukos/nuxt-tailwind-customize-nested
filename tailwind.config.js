/** @type {import('tailwindcss).Config} */

export default {
  plugins: [
    // add the following lines
    require('tailwindcss/plugin')(({ matchUtilities }) => {
      matchUtilities({
        'x': (value) => ({
          [`@apply ${value.replaceAll('__', ' ')}`]: {}
        })
      })
    })
  ]
}
