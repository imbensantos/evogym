import Logo from "@/assets/Logo.png"

const Footer = () => {
  const yearToday = new Date().getFullYear()

  return (
    <footer className="bg-primary-100 py-16">
      <div className="mx-auto w-5/6 md:flex gap-16 justify-content">

        <div className="basis-1/2 mt-16 md:mt-0">
          <hgroup>
            <h1><img src={Logo} alt="Evogym" /></h1>
            <p className="my-5 balance">Unrivaled Gym. Unparalleled training fitness classes. World class studios to get the body shape that you dream of. Get your dream body now!</p>
          </hgroup>
          <small>© {yearToday} Evogym. All rights reserved.</small>
        </div>

        <div className="basis-1/4 mt-16 md:mt-0">
          <h2 className="font-bold">Links</h2>
          <ul>
            <li className="my-5"><a href="#Facebook">Facebook</a></li>
            <li className="my-5"><a href="#Instagram">Instagram</a></li>
            <li className="my-5"><a href="#Youtube">Youtube</a></li>
          </ul>
        </div>

        <div className="basis-1/4 mt-16 md:mt-0">
          <h2 className="font-bold">Contact Us</h2>
          <ul>
            <li className="my-5"><a href="mailto:message.contactus+evogym@gmail.com">message.contactus+evogym@gmail.com</a></li>
            <li className="my-5"><a href="tel:+3334256825"></a>(333) 425-6825</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer