import ErrorPage from "../../pages/ErrorPage";
import Base from "../../pages/sample/Base";
import SampleIndex from "../../pages/sample/SampleIndex";
import Main, {loader as contactLoader} from "../../pages/Main";
import Contact, {loader as contactDetailLoader} from "../../pages/Contact";


const main = [
    {
        path: "/",
        element : <Main />,
        errorElement: <ErrorPage />,
        loader: contactLoader,
        children: [
          {
              path: "contacts/:id",
              element : <Contact />,
              loader: contactDetailLoader
          },
        ]
    },
    {
      path: '/sample/',
      element: <SampleIndex/>,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          path: 'base',
          element: <Base />,
        }
      ]
    }
]

export default main