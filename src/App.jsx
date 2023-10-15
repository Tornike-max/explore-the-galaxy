import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage'
import Services from "./pages/Services"
import AccountPage from "./pages/AccountPage"
import About from "./pages/About"
import PageNotFound from "./pages/PageNotFound"
import AppLayout from "./ui/AppLayout"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import PlanetsPage from "./pages/PlanetsPage"
import Planet from './features/planets/Planet'
import Login from "./pages/LoginPage"
import ProtectedRoute from "./ui/ProtectedRoute"
import { Toaster } from "react-hot-toast"
import SignUpPage from "./pages/SignUpPage"
import ServiceDescription from "./features/serviceInfo/ServiceDescription"
import SingleBooking from "./features/reservation/SingleBooking"
import BookingsPage from "./pages/BookingsPage"
import ObservatoryPage from "./pages/ObservatoryPage"
import UpdateObservatoryModal from "./ui/UpdateObservatoryModal"
import ContextMode from "./features/context/ContextLightMode"



const queryClient = new QueryClient()
function App() {
  return (
    <ContextMode>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>}>
              <Route path="/" element={<HomePage />} />
              <Route path="/planets" element={<PlanetsPage />} />
              <Route path="/planets/:planetId" element={<Planet />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:serviceId" element={<ServiceDescription />} />
              <Route path='/bookings' element={<BookingsPage />} />
              <Route path="/booking/:bookingId" element={<SingleBooking />} />
              <Route path='/observatories' element={<ObservatoryPage />} />
              <Route path='/observatories/:editId' element={<UpdateObservatoryModal />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/signUp' element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ContextMode>
  )
}

export default App
