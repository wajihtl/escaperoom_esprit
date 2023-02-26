import tw from "twin.macro";
import amenLogo from "../../images/Logo_Amen_Bank.png";
import googleLogo from "../../images/logoGoogle.jpg";
import gomycode from "../../images/gomycode.svg";
import ciscoLogo from "../../images/cisco-logo-transparent.png";
const Testimonials = tw.div`flex flex-col lg:flex-row items-center lg:items-stretch`;
const TestimonialContainer = tw.div`mt-16 lg:w-1/3`;
const Testimonial = tw.div`px-4 text-center max-w-xs mx-auto flex flex-col items-center`;
const Image = tw.img`w-20 h-20 rounded-full`;
const CustomerName = tw.p`mt-5 text-gray-900 font-semibold uppercase text-sm tracking-wide`;

export default ({
  testimonials = [
    {
      imageSrc: googleLogo,
      quote:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      customerName: "Google ",
    },
    {
      imageSrc: gomycode,
      quote:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      customerName: "GoMyCode ",
    },
    {
      imageSrc: ciscoLogo,
      quote:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      customerName: "Cisco ",
    },
    {
      imageSrc: amenLogo,
      quote:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      customerName: "Amen Bank",
    },
  ],
}) => {
  return (
    <Testimonials>
      {testimonials.map((testimonial, index) => (
        <TestimonialContainer key={index}>
          {testimonial.customerName === "Amen Bank" ? (
            <a href="http://localhost:3001/" target="_blank" rel="noreferrer">
              <Testimonial className="absolute inset-0 w-full h-full object-cover transform transition duration-500 hover:rotate-y-180 cursor-pointer">
                <Image src={testimonial.imageSrc} />
                <CustomerName>- {testimonial.customerName}</CustomerName>
              </Testimonial>
            </a>
          ) : (
            <Testimonial className="absolute inset-0 w-full h-full object-cover transform transition duration-500 hover:rotate-y-180 cursor-pointer">
              <Image src={testimonial.imageSrc} />
              <CustomerName>- {testimonial.customerName}</CustomerName>
            </Testimonial>
          )}
        </TestimonialContainer>
      ))}
    </Testimonials>
  );
};
