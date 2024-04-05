import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Error from "./pages/Error/Error";
import Signup from "./pages/User/Signup";
import Login from "./pages/User/Login";
import Mypage from "./pages/User/Mypage";
import Authority from "./pages/User/Authority";
import Commute from "./pages/Commute/Commute";
import Home from "./pages/Home/Home";
import PostList from "./pages/Board/PostList";
import MyPost from "./pages/Board/MyPost";
import OfficialPlan from "./pages/Plan/OfficialPlan";
import PersonalPlan from "./pages/Plan/PersonalPlan";
import ApplyDayoff from "./pages/Dayoff/ApplyDayoff";
import AcceptDayoff from "./pages/Dayoff/AcceptDayoff";
import CurrentDayoff from "./pages/Dayoff/CurrentDayoff";
import Salary from "./pages/Salary/Salary";
import GroupChart from "./pages/Group/GroupChart";
import GroupMember from "./pages/Group/GroupMember";
import Setting from "./pages/Setting/Setting";
import { ResponsiveProvider } from "./contexts/ResponsiveContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      // Entry
      { index: true, element: <Login /> },

      // User
      { path: "/signup", element: <Signup /> },
      { path: "/authority", element: <Authority /> },
      { path: "/mypage", element: <Mypage /> },

      // Home
      { path: "/home", element: <Home /> },

      // Commute
      { path: "/commute", element: <Commute /> },

      // Board
      { path: "/postlist", element: <PostList /> },
      { path: "/mypost", element: <MyPost /> },

      // Plan
      { path: "/official-plan", element: <OfficialPlan /> },
      { path: "/personal-plan", element: <PersonalPlan /> },

      // Dayoff
      { path: "/apply-dayoff", element: <ApplyDayoff /> },
      { path: "/accept-dayoff", element: <AcceptDayoff /> },
      { path: "/current-dayoff", element: <CurrentDayoff /> },

      // Salary
      { path: "/salary", element: <Salary /> },

      // Group
      { path: "/group-chart", element: <GroupChart /> },
      { path: "/group-member", element: <GroupMember /> },

      // Setting
      { path: "/setting", element: <Setting /> },
    ],
  },
]);

function App() {
  return (
    <ResponsiveProvider>
      <RouterProvider router={router} />
    </ResponsiveProvider>
  );
}

export default App;
