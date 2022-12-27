import { useEffect, useState } from "react";

const ProgressBar = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setValue((value) => Math.min(value + 10, 100));
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <div className="w-full mt-8 ">
                <div className="flex justify-between">
                    <div>Angular</div>
                    <div>75%</div>
                </div>
                <progress className="progress" value="80" max="100"></progress>
            </div>

            <style jsx>
                {`
                    .progress {
                        /* style the progress bar */
                        width: 100%;
                        height: 10px;
                        border-radius: 5px;
                        background-color: blue;
                    }

                    .progress::-webkit-progress-value {
                        /* style the progress value */
                        background-color: white;
                        border-radius: 5px;
                        transition: width 0.25s;
                    }
                `}
            </style>
        </>
    );
};

export default ProgressBar;
