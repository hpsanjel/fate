import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./Components/Includes/Navbar";
import HeroVideo from "./Components/Includes/HeroVideo";
import About from "./Components/Pages/About/About";
import SignUp from "./Components/Includes/SignUp";
import CallToAction from "./Components/Includes/HeroSection";
import Gallery from "./Components/Pages/Gallery/Gallery";
import Contact from "./Components/Pages/Contact/Contact";
import UniversityPage from "./Components/Pages/Universities/UniversityPage";
import Blog from "./Components/Pages/Blog/Blog";
import Testimonial from "./Components/Pages/Testimonials/Testimonial";
import Destination from "./Components/Pages/Destination/Destination";
import Footer from "./Components/Includes/Footer";
import Error from "./Components/Includes/Error404";

import "./Components/Includes/Navbar.css";
import "./Components/Includes/slide.css";
import "./Components/Includes/SliderForm.css";
import "react-toastify/dist/ReactToastify.css";
import BlogDetailPostPage from "./Components/Pages/Blog/BlogDetailPostPage";
import DestinationDetails from "./Components/Pages/Destination/DestinationDetails";
import FAQs from "./Components/Includes/FAQs";
import LanguageClasses from "./Components/Pages/Services/LanguageClasses";
import StudentVisa from "./Components/Includes/StudentVisa";
import { ModalProvider } from "./Components/Includes/ModalContext";

import TeamGrid from "./Components/Pages/TeamGrid";
import CareerPage from "./Components/Pages/CareerPage";

import { BlogPosts } from "./Components/Pages/Dashboard/Components/BlogPosts";
import BackToTopButton from "./Components/BackToTopButton";
function App() {
	return (
		<>
			<Router>
				<ModalProvider>
					<Navbar />

					<Routes>
						<Route exact path="/" element={<CallToAction />}></Route>
						<Route path="/about" element={<About />}></Route>
						<Route path="/blog" exact element={<Blog />}></Route>
						<Route path="/blog/:blogTitle" element={<BlogDetailPostPage />}></Route>
						<Route path="/blog/:month" element={<BlogDetailPostPage />}></Route>
						<Route path="/gallery" element={<Gallery />}></Route>
						<Route path="/testimonial" element={<Testimonial />}></Route>
						<Route path="/destination" element={<Destination />}></Route>
						<Route path="/student-visa" element={<StudentVisa />}></Route>
						<Route path="/destination-detail/:region" element={<DestinationDetails />}></Route>
						<Route path="/destination-detail/" element={<DestinationDetails />}></Route>
						<Route path="/signup" element={<SignUp />}></Route>
						<Route path="/UniversityPage/:region" element={<UniversityPage />}></Route>
						<Route path="/UniversityPage/" element={<UniversityPage />}></Route>
						<Route path="/contact" element={<Contact />}></Route>
						<Route path="/faqs" element={<FAQs />}></Route>
						<Route path="/language-classes" element={<LanguageClasses />}></Route>
						<Route path="/career" element={<CareerPage />}></Route>
						<Route path="/team" element={<TeamGrid />}></Route>
						<Route path="/dashboard/blogposts" element={<BlogPosts />}></Route>
						<Route path="*" element={<Error />}></Route>
					</Routes>
					<Footer />
					<BackToTopButton />
				</ModalProvider>
			</Router>
		</>
	);
}

export default App;
