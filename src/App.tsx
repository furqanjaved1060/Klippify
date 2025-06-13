import useAuthFromCookie from '@hooks/useAuthFromCookie'
import AuthPagesLayout from '@pages/AuthPages/AuthPagesLayout'
import BrandDashboard from '@pages/BrandPages/BrandDashboard'
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
import Studio from '@pages/BrandPages/Studio'
import Monetization from '@pages/BrandPages/Monetization'
import Insights from '@pages/BrandPages/Insights'
import Campaigns from '@pages/CreatorPages/Campaigns'
import CampaignsLayout from '@pages/CreatorPages/CampaignsLayout'
import CampaignDetail from '@pages/CreatorPages/CampaignDetail'
import Profile from '@pages/CreatorPages/Profile'
import PublicView from '@pages/CreatorPages/PublicView'

const App = () => {

    console.log('APP rendered') // 2 - good

    useAuthFromCookie();
    const tokenChecked = useAuthUser(state => state.authUser.tokenChecked);
    const role = useAuthUser(state => state.authUser.userData.role);

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
                path: 'public',
                element:<PublicView/>
            },


        ]
    }
    if (role==='brand') {
        profileChildren = [
            {
                path: 'dashboard',
                element: <BrandDashboard/>
            },
            {
                path: 'studio',
                element: <Studio/>
            },
            {
                path: 'monetization',
                element: <Monetization/>
            },
            {
                path: 'insights',
                element: <Insights/>
            },
        ]
    }

    const router = createBrowserRouter([     
        {
            path: '/',
            element:<AuthPagesLayout/>,
            children: [
                {
                    path:'/',
                    element: <SignInPage/>
                },
                {
                    path:'/signup',
                    element: <SignUpPage/>
                },
                {
                    path:'/forgotpassword',
                    element: <ForgotPassword/>
                },
                {
                    path:'/resetpassword',
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