import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

export const ContactUs = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false); // State to track if message has been sent
  const [errorMessage, setErrorMessage] = useState(''); // State to track error message if sending failed

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_80d41xj',
        'template_u2bj10n',
        form.current,
        'feglpkv514Ul3Qcry'
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setMessageSent(true); // Set the state that message has been sent
          setErrorMessage(''); // Clear any previous error message
        },
        (error) => {
          console.log('FAILED...', error.text);
          setErrorMessage('Failed to send message. Please try again.'); // Set error message
        }
      );
  };

  return (
    <section>
      <section className="bg-white">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-black text-dark-blue ">
            Stellen Sie uns ihre Frage
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Wir freuen uns über Ihre Anfrage. Nutzen Sie diskret unser
            Kontaktformular. Wir melden uns dann umgehend bei Ihnen.
          </p>
          {/* Show confirmation message based on the state */}
          {messageSent ? (
            <div className="text-center text-green-500">Nachricht erfolgreich gesendet!</div>
          ) : (
            <>
              {errorMessage && <div className="text-center text-red-500">{errorMessage}</div>}
              <form ref={form} onSubmit={sendEmail} className="space-y-8">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 sm:text-xl text-sm font-medium text-gray-900 dark:text-dark-blue"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    className="shadow-sm bg-slate-50 border border-gray-300 text-gray-900 sm:text-xl rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                    placeholder="Wie lautet Ihre E-Mail-Adresse?"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2  sm:text-xl font-medium text-gray-900 dark:text-dark-blue"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className="shadow-sm bg-slate-50 border sm:text-xl border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                    placeholder="Wie heißen Sie?"
                    required
                  />
                </div>
                
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 font-medium sm:text-xl text-gray-900 dark:text-dark-blue"
                  >
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    className="block p-2.5 w-full  text-gray-900 sm:text-xl bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Was möchten Sie uns fragen?"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  value="Send"
                  className="py-3 px-5 sm:text-xl font-medium text-center text-white  bg-gray-900 sm:w-fit hover:bg-dark-red focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Nachricht Schicken
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </section>
  );
};

export default ContactUs;
