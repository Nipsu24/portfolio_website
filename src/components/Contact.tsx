import { contactIcons } from '../text';


const Contact = () => {
  return (
    <div className="bg-white dark:bg-black py-6 sm:py-8 lg:py-16">
      <div id="contact" className="flex flex-col mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-700 dark:text-white">{'<Contact/>'}</h2>

        <div className="flex flex-col mt-4">
          <p className="text-lg text-gray-600 dark:text-gray-300">
      Get in touch by e-mail or find me on LinkedIn!
          </p>
          <div className="flex flex-wrap gap-6 justify-center lg:justify-center my-6">
            {contactIcons.map((icon) => (

              <a
                key={icon.href}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={icon.label}
              >
                <img
                  src={icon.imageLight}
                  alt={icon.title}
                  className="w-auto h-10 sm:h-14 lg:h-16 opacity-75 filter brightness-90 hover:opacity-100 hover:brightness-100 transition-all duration-200 dark:hidden"
                />

                <img
                  src={icon.imageDark}
                  alt={icon.title}
                  className="w-auto h-10 sm:h-14 lg:h-16 opacity-75 filter brightness-90 hover:opacity-100 hover:brightness-100 transition-all duration-200 hidden dark:block"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
