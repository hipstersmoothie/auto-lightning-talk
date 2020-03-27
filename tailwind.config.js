module.exports = {
  variants: {
    margin: ["responsive", "hover", "focus", "active", "last"],
    width: ["responsive", "hover", "focus", "active", "last"]
  },
  theme: {
    extend: {
      width: {
        fit: "fit-content"
      },
      colors: {
        purple: {
          100: "#F3E6ED",
          200: "#E1BFD1",
          300: "#CF99B6",
          400: "#AB4D7F",
          500: "#870048",
          600: "#7A0041",
          700: "#51002B",
          800: "#3D0020",
          900: "#290016"
        },
        yellow: {
          100: "#FEF6E7",
          200: "#FCE9C3",
          300: "#F9DB9F",
          400: "#F5C156",
          500: "#F1A60E",
          600: "#D9950D",
          700: "#916408",
          800: "#6C4B06",
          900: "#483204"
        },
        red: {
          100: "#F9E6E7",
          200: "#F1BFC2",
          300: "#E8999D",
          400: "#D64D54",
          500: "#C5000B",
          600: "#B1000A",
          700: "#760007",
          800: "#590005",
          900: "#3B0003"
        },
        grey: {
          100: "#FEFFFF",
          200: "#FEFEFE",
          300: "#FDFDFD",
          400: "#FBFCFC",
          500: "#F9FAFB",
          600: "#E0E1E2",
          700: "#959697",
          800: "#707171",
          900: "#4B4B4B"
        }
      }
    }
  }
};
