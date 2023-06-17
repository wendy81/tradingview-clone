import { Card, Timeline } from "flowbite-react";

const About = () => {
  return (
    <Card className="w-full max-w-screen-xl m-auto my-5">
      <div className="flex justify-end px-4 pt-4"></div>
      <div className="flex flex-col items-center pb-10">
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Yusuf Yiğit Aydemir
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          FrontEnd Developer
        </span>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <a
            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            href="#"
          >
            <p>Contact</p>
          </a>
          <a
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            href="#"
          >
            <p>See Code</p>
          </a>
        </div>

        <div>
          <p>
            Greetings, <br></br> <br></br>I am Yiğit, a Front End Developer
            hailing from Istanbul, Turkey. I take pride in presenting an
            application that showcases my expertise in ReactJS, exemplifying my
            capabilities as a skilled developer. The primary purpose of this
            application is to provide users with the ability to monitor
            cryptocurrency prices and assess their historical performance
            through interactive charts. By signing up with your Google account,
            you can effortlessly personalize your experience by adding your
            preferred cryptocurrencies to a designated watchlist. This feature
            empowers you to conveniently manage your selection, enabling
            additions or removals at your discretion. <br></br>
            <br></br>
            Thank you for considering my application. I look forward to any
            feedback or inquiries you may have. <br></br>
            <br></br>
          </p>

          <Timeline>
            <Timeline.Item>
              <Timeline.Content>
                <Timeline.Title>Key Features</Timeline.Title>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Body>
                  The application is developed using{" "}
                  <a
                    href="https://legacy.reactjs.org/"
                    target="blank"
                    className="text-cyan-800"
                  >
                    ReactJS
                  </a>
                  , a powerful JavaScript framework.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Body>
                  Cryptocurrency prices are fetched from the{" "}
                  <a
                    href="https://developers.coinranking.com/api"
                    target="blank"
                    className="text-cyan-800"
                  >
                    Coinranking API
                  </a>
                  , ensuring real-time and accurate data.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Body>
                  The fetched data is visualized using{" "}
                  <a
                    href="https://www.tradingview.com/lightweight-charts/"
                    target="blank"
                    className="text-cyan-800"
                  >
                    Tradingview Lightweight Charts
                  </a>
                  , offering interactive and intuitive charting capabilities.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Body>
                  Styling is implemented with the assistance of{" "}
                  <a
                    href="https://tailwindcss.com/"
                    target="blank"
                    className="text-cyan-800"
                  >
                    TailwindCSS
                  </a>{" "}
                  and {" "}
                  <a
                    href="https://www.flowbite-react.com/"
                    target="blank"
                    className="text-cyan-800"
                  >
                    Flowbite
                  </a>
                  , enhancing the application's aesthetic appeal and user
                  interface.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Body>
                  Authentication functionality is implemented using{" "}
                  <a
                    href="https://firebase.google.com/"
                    target="blank"
                    className="text-cyan-800"
                  >
                    Google Firebase
                  </a>
                  , providing secure and reliable user authentication through
                  Google accounts.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline>
        </div>
      </div>
    </Card>
  );
};

export default About;
