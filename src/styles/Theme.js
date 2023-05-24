import { extendTheme } from "@chakra-ui/react";

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
              fontSize: { base:"3.81rem", md:"3.81rem", lg:"3.81rem", xl:"3.81rem" },
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              
            },
            h2: {
              fontWeight: 700,
              fontSize: { base:"2.44rem", md:"3.05rem", lg:"3.05rem", xl:"3.05rem"} ,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              
            },
            h3: {
              fontWeight: 700,
              fontSize: { base:"1.95rem", md:"2.44rem", lg:"2.44rem", xl:"2.44rem"},
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              
            },
            h4: {
              fontWeight: 700,
              fontSize: { base:"1.56rem",  md:"1.95rem", lg:"1.95rem", xl:"1.95rem"},
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              marginBottom: "1rem"
            },
            h5: {
              fontWeight: 700,
              fontSize: { base:"1.25rem",  md:"1.56rem", lg:"1.56rem", xl:"1.56rem"},
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              
            },
            h6: {
              fontWeight: 700,
              fontSize: "1.25rem",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              
            },
            pageHeading: {
            fontSize:"4.76rem",
            textTransform:"uppercase",
            textAlign:{base:"center", sm:"left", md:"left", lg:"left", x:"lg"} ,
            color:"#000",
            padding:"0.5rem",
            }
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
      Link : {
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