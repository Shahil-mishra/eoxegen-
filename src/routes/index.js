import React from "react"
import { Redirect } from "react-router-dom"
import Customer from "../pages/Customer/Customer"
import ViewCustomer from "../pages/Customer/ViewCustomer/ViewCustomer"
import Policies from "../pages/Policies/Policies"
import Claims from "../pages/Claims/Claims"
import Endorsement from "../pages/Endorsement/Endorsement"
import TrackEndorsement from "../pages/Endorsement/TrackEndorsement/TrackEndorsement"
import CommisionStatement from "../pages/CommisionStatement/CommisionStatement"
// Profile
import UserProfile from "../pages/Authentication/user-profile"
// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"
import LockScreen from "../pages/AuthenticationInner/auth-lock-screen"
// Dashboard
import Dashboard from "../pages/Dashboard/index"
//Crypto

//Pages 
import PagesMaintenance from "../pages/Utility/pages-maintenance"
import PagesComingsoon from "../pages/Utility/pages-comingsoon"
import Pages404 from "../pages/Utility/pages-404"
import Pages500 from "../pages/Utility/pages-500"
//Contacts 

// Customer

const authProtectedRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/customer", component: Customer },
  { path: "/customer/view", component: ViewCustomer },
  { path: "/policies", component: Policies },
  { path: "/claims", component: Claims },
  { path: "/endorsement", component: Endorsement },
  { path: "/endorsement/track", component: TrackEndorsement },
  { path: "/statement", component: CommisionStatement },
  // //profile
  { path: "/profile", component: UserProfile },
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
  { path: "/pages-maintenance", component: PagesMaintenance },
  { path: "/pages-comingsoon", component: PagesComingsoon },
  { path: "/pages-404", component: Pages404 },
  { path: "/pages-500", component: Pages500 },
  { path: "/auth-lock-screen", component: LockScreen },
]

export { authProtectedRoutes, publicRoutes }
