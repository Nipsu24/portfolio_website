import { contactIcons } from "../text";


const Contact = () => {
  return (
<div id="contact" className="my-12 flex flex-col mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-center">
  <h2 className="text-4xl font-bold text-gray-700 dark:text-white">{"<Contact/>"}</h2>
  
  <div className="flex flex-col mt-4">
    <p className="text-lg text-gray-600 dark:text-gray-300">
      Get in touch by e-mail or find me on LinkedIn!
    </p>
    <div className="flex flex-wrap gap-6 justify-center lg:justify-center my-6">
      {contactIcons.map((icon) => (
        <img
          key={icon.title}
          src={icon.imageLight}
          alt={icon.title}
          className="w-auto h-18"
        />
      ))}
    </div>
  </div>
</div>
  )
}

export default Contact;