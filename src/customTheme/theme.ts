import { extendTheme } from "@chakra-ui/react";
import Button from "./customButton"

const theme = extendTheme({
    components: {
        Button: Button
    }
})

export default theme
