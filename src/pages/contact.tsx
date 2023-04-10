import Container from "@/components/container";
import Layout from "@/components/layout";
import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/outline";
import { NextSeo } from "next-seo";
export default function Contact() {
  return (
    <>
      <NextSeo
        title="Anshu Sharma - Contact"
        description="Welcome to our coding blog! Here you'll find a wealth of information on the latest programming trends and techniques, as well as tutorials and tips on how to improve your coding skills. Whether you're a beginner just starting out or a seasoned pro looking to stay on top of the latest developments, our blog has something for you. From in-depth guides on popular languages like Python and JavaScript ,React Js ,Next Js, Mern Stack"
        canonical="anshusharma.me/contact"
        openGraph={{
          url: "anshusharma.me/contact",
          title: "Anshu Sharma - Contact",
          description:
            "Welcome to our coding blog! Here you'll find a wealth of information on the latest programming trends and techniques, as well as tutorials and tips on how to improve your coding skills. Whether you're a beginner just starting out or a seasoned pro looking to stay on top of the latest developments, our blog has something for you. From in-depth guides on popular languages like Python and JavaScript ,React Js ,Next Js, Mern Stack",
          siteName: "Anshu Sharma",
        }}
      />
      <Layout>
        <Container>
          <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
            Contact
          </h1>
          <div className="text-center">
            <p className="text-lg">We are a here to help.</p>
          </div>
          <div className="grid my-10 md:grid-cols-2">
            <div className="my-10">
              <h2 className="text-2xl font-semibold dark:text-white">
                Contact Anshu Sharma
              </h2>
              <p className="max-w-sm mt-5">
                Have something to say? We are here to help. Fill up the form or
                send email or call phone.
              </p>

              <div className="mt-5">
                <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
                  <LocationMarkerIcon className="w-4 h-4" />
                  <span>Haryana , India</span>
                </div>
                <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
                  <MailIcon className="w-4 h-4" />
                  <a href={`mailto:anshusharma6327@gmail.com`}>
                    anshusharma6327@gmail.com
                  </a>
                </div>
                <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
                  <PhoneIcon className="w-4 h-4" />
                  <a href={`tel:1234567890`}>1234567890</a>
                </div>
              </div>
            </div>
            <div>
              <form className="my-10">
                <input
                  type="checkbox"
                  id=""
                  className="hidden"
                  style={{ display: "none" }}
                />

                <div className="mb-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    autoComplete="false"
                    className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-[#111827]  focus:ring-4  ${
                      false
                        ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                        : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                    }`}
                  />
                </div>

                <div className="mb-5">
                  <label htmlFor="email_address" className="sr-only">
                    Email Address
                  </label>
                  <input
                    id="email_address"
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    autoComplete="false"
                    className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-[#111827]  focus:ring-4  ${
                      false
                        ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                        : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                    }`}
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-[#111827]  rounded-md outline-none  h-36 focus:ring-4  ${
                      false
                        ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                        : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 font-semibold text-white transition-colors bg-[#111827] rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:border-white dark:border-2 dark:text-white "
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
