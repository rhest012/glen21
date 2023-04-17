import { extendTheme } from "@chakra-ui/react";
import { color } from "framer-motion";

const theme = extendTheme ({
    fonts : {
        body: "Inter, Arial, 'Helvetica Neue', Helvetica, sans-serif",
        heading: "Inter, Arial, 'Helvetica Neue', Helvetica, sans-serif"
    },
    components: {
        Heading: {
          variants: {
            h1: {
              fontWeight: 700,
              fontSize: "3.81rem",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              
            },
            h2: {
              fontWeight: 700,
              fontSize: "3.05rem",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              
            },
            h3: {
              fontWeight: 700,
              fontSize: "2.44rem",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              
            },
            h4: {
              fontWeight: 700,
              fontSize: "1.95rem",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              marginBottom: "1rem"
            },
            h5: {
              fontWeight: 700,
              fontSize: "1.56rem",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              
            },
            h6: {
              fontWeight: 700,
              fontSize: "1.25rem",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              
            },
          },
        },
        Text: {
          variants: {
            p:{
              fontWeight: 300,
              fontSize: "1rem",
              
            }
          }
        },
      Button : {
        variants: {
          btn: {
            background: "#000",
            border: "1px solid #000",
            textTransform: "uppercase",
            borderRadius: "2rem",
            color: "#fff",
            paddingY: "1.25rem",
            fontSize: "0.85rem",

            _hover: {
              border: "1px solid #000",
              background: "transparent",
              color: "#000"
            }
          }
        }
      }
    }
})

export default theme