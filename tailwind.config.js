module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      bd: "#333333",
      ft: "#E0E0E0",
      og: "#FF6200",
      header: '#ff6200',
      search: '#495867',
    },
    borderRadius: {
      'sr' : '35px',
    },
    extend: {
      fontFamily: {
        'lato': 'Lato, sans-serif',
      },
      boxShadow: {
        'bt': '0px 2px 4px rgba(0, 0, 0, 0.05)',
        'mp': '0px 0px 4px rgba(0, 0, 0, 0.25)',
        'am': '0px 0px 5px rgba(51, 51, 51, 0.2)',
      },
      height: {
        '563': '563px',
        '391': '391px',
        '278': '278px',
        '252': '252px',
        '70' : '70px',
        '46' : '46px',

      },
      width: {
        '939': '939px',
        '881': '881px',
        '90': '90px',
        '608': '608px',
        '321': '321px',
      },
      margin: {
        '419': '419px',
        '413': '413px'
      }
    },
  },
  plugins: [],
}
