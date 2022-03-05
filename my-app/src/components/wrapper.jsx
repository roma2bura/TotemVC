import { HeartIcon } from "@heroicons/react/solid";

function Wrapper(props) {
    return (
        <div className="flex flex-col items-center justify-center p-4 bg-gray-50  ">
            <div className="app-window grid grid-cols-1 shadow-2xl rounded-lg overflow-hidden bg-white ">
                {props.children}
            </div>
            <span className="pt-8">
                Made with <HeartIcon className="w-5 h-5 inline text-red" /> by{" "}
                <a className="font-medium text-blue-500" href="https://r2b.dev/">
                    Roman Bura
                </a>{" "}
                special for TotemVC.
            </span>
        </div>
    );
}

export default Wrapper;
