import useAuthFromCookie from '@hooks/useAuthFromCookie'
import AuthPagesLayout from '@pages/AuthPages/AuthPagesLayout'
import CreatorDashboard from '@pages/CreatorPages/CreatorDashboard'
import ForgotPassword from '@pages/AuthPages/ForgotPassword'
import ProfilePage from '@pages/ProfilePage/ProfilePage'
import SignInPage from '@pages/AuthPages/SignInPage'
import SignUpPage from '@pages/AuthPages/SignUpPage'
import ProtectedRoutes from '@protected-routes/ProtectedRoutes'
import useAuthUser from '@store/authUser'
import { Navigate, RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import ResetPassword from '@pages/AuthPages/ResetPassword'
import Campaigns from '@pages/CreatorPages/Campaigns'
import CampaignsLayout from '@pages/CreatorPages/CampaignsLayout'
import CampaignDetail from '@pages/CreatorPages/CampaignDetail'
import Profile from '@pages/CreatorPages/Profile'
import PublicView from '@pages/CreatorPages/PublicView'
import LandingPage from '@pages/LandingPage/LandingPage'
import EditProfile from '@pages/CreatorPages/EditProfile'
import AllCampaigns from '@pages/BrandPages/AllCampaigns'
import BrandDashboard from '@pages/BrandPages/BrandDashboard'
import CreateCampaign from '@pages/BrandPages/CreateCampaign'
import BrandProfilePage from '@pages/BrandPages/BrandProfilePage'
import PaymentsLayout from '@pages/BrandPages/PaymentsLayout'
import PaymentsManagement from '@pages/BrandPages/PaymentsManagement'
import AddCard from '@pages/BrandPages/AddCard'
import SavedCards from '@pages/BrandPages/SavedCards'

const App = () => {

    useAuthFromCookie();
    const tokenChecked = useAuthUser(state => state.authUser.tokenChecked);
    const isAuthenticated = useAuthUser((state) => state.authUser.isAuthenticated);
    const userData = useAuthUser((state) => state.authUser.userData);
    const role = isAuthenticated && userData ? userData.role : null;

    let profileChildren;

    if (role==='creator') {
        profileChildren = [
            {
                index: true, 
                element: <Navigate to="dashboard" replace />
            },
            {
                path: 'dashboard',
                element:<CreatorDashboard/>
            },
            {
                path: 'campaigns',
                element: <CampaignsLayout/>,
                children: [
                    {
                        index: true,
                        element:<Campaigns/>
                    },
                    {
                        path: 'details',
                        element:<CampaignDetail/>
                    },
                ]
            },
            {
                path: 'profile',
                element:<Profile/>
            },
            {
                path: 'profile/edit',
                element:<EditProfile/>
            },
            {
                path: 'public',
                element:<PublicView/>
            },


        ]
    }
    if (role==='brand') {
        profileChildren = [
            {
                index: true, 
                element: <Navigate to="dashboard" replace />
            },
            {
                path: 'dashboard',
                element: <BrandDashboard/>
            },
            {
                path: 'campaigns',
                element: <AllCampaigns/>
            },
            {
                path: 'campaigns/create',
                element: <CreateCampaign/>
            },
            {
                path: 'profile',
                element: <BrandProfilePage/>
            },
            {
                path: 'profile/edit',
                element:<EditProfile/>
            },
            {
                path: 'payments',
                element:<PaymentsLayout/>,
                children: [
                    {
                        index: true,
                        element:<PaymentsManagement/>
                    },
                    {
                        path: 'details',
                        element:<AddCard/>
                    },
                    {
                        path: 'saved',
                        element:<SavedCards/>
                    },

                ]
            },
        ]
    }

    const router = createBrowserRouter([
        {
            path: '/',
            element: <LandingPage/>,
        },
        {
            element:<AuthPagesLayout/>,
            children: [
                {
                    path:'signin',
                    element: <SignInPage/>
                },
                {
                    path:'signup',
                    element: <SignUpPage/>
                },
                {
                    path:'forgotpassword',
                    element: <ForgotPassword/>
                },
                {
                    path:'resetpassword',
                    element: <ResetPassword/>
                },
            ]
        },
        {
            path: '/:username',
            element:(
                <ProtectedRoutes>
                    <ProfilePage/>
                </ProtectedRoutes>
            ),
            children: profileChildren
        },
    ])

    if (tokenChecked) return <RouterProvider router={router} />
}

export default App;