/* eslint-disable react/prop-types */
import { Banner} from "flowbite-react";
import { HiX } from "react-icons/hi";
import { MdOutlineRoute } from "react-icons/md";

export default function WlcomeBanner({name}) {
  return (
    <Banner>
      <div className="flex w-full justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
        <div className="mx-auto flex items-center">
          <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
          <MdOutlineRoute/>
            <span className="[&_p]:inline ml-1">
              Welcome to {name} Page &nbsp;
              <a
                href="/"
                className="inline font-medium text-cyan-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-cyan-500"
              >
                Go back Home 🏠
              </a>
            </span>
          </p>
        </div>
        <Banner.CollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
          <HiX className="h-4 w-4" />
        </Banner.CollapseButton>
      </div>
    </Banner>
  )
}
