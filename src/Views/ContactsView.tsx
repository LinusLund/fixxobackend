import React from 'react'
import Navbar from '../Sections/Navbar';
import ContactForm from '../Sections/Contacts/ContactForm';
import ContactUsMap from '../Sections/Contacts/ContactUsMap';
import Footer from '../Sections/Footer';
import BreadcrumbSection from '../Sections/BreadcrumbSection';



function ContactsView () {
  return (
    <>
      <Navbar />
      <BreadcrumbSection parentPage={"Home"} currentPage={"Contacts"} />
      <ContactUsMap />
      <ContactForm /> 
      <Footer />
      
    </>
  )
}

export default ContactsView