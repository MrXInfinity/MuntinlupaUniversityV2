import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navigation from "./components/Navigation";
import theme from "./customTheme/theme";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider
        router={createBrowserRouter([
          {
            path: "/",
            element: <Navigation />,
            children: [
              {
                index: true,
                element: <Homepage />,
              },
              {
                path: "courses",
                element: <div>Courses</div>,
              },
              {
                path: "signin_account",
                element: <div>About</div>,
              },
              {
                path: "application",
                element: <div>Application</div>,
              },
              {
                path: "about_us",
                element: <div>About</div>,
              },
            ],
          },
        ])}
      />
    </ChakraProvider>
  );
};

export default App;
