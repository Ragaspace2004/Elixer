
import { Link } from 'react-router-dom';

export default function Notify() {
  const handleClick = () => {
    // Make the API call here
    fetch('https://test3.ragapriya-k2022cse.workers.dev/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {
          // Handle success
          console.log('Email sent successfully');
        } else {
          // Handle failure
          console.error('Failed to send email');
        }
      })
      .catch(error => {
        // Handle error
        console.error('Error sending email:', error);
      });
  };

  return (
    <div>
      <div className="bg-cyan-200 py-3">
        <Link to="/dashboard1">
          <button className="flex justify-start bg-gray-200 shadow-lg font-semibold mt-6 rounded-2xl px-2 ml-5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-left"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            <p className="mt-1 text-2xl">Back</p>
          </button>
        </Link>
      </div>

      <div id="root" className="flex h-screen flex-col items-center justify-center bg-white ">
        <div id="card-container" className="flex w-full max-w-xs flex-col items-center rounded-xl bg-white px-12 py-9 shadow-2xl ">
          <div id="pricing-container" className="flex flex-col gap-2  ">
            <h1 id="amount" className="text-center text-3xl font-bold text-gray-700 ">Notify the internships</h1>
          </div>
          <div id="checkout-container" className="flex flex-col mt-5">
            {/* Call handleClick when the button is clicked */}
            <button onClick={handleClick} className="cursor-pointer rounded-lg border-orange-500 bg-orange-500 px-10 py-2 text-center text-white shadow-lg hover:bg-orange-300">
              NOTIFY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
