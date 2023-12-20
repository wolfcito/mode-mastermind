import { useContext } from "react";
import { ContentDidacticByIdContext } from "~~/contexts/ContentDidacticById";

const ContentDidacticProgressBar = () => {
    const pageContext = useContext(ContentDidacticByIdContext);
    console.log(pageContext.value.progress)
    return (
        <div className="w-[95%] bg-neutral-200 dark:bg-neutral-600 flex h-4 mx-10 ">
            {
                (pageContext.value.progress <= 20) &&
                (
                    <div
                        className="bg-lime-400 p-0.5 text-center  font-medium leading-none "
                        style={{ width: "20%" }}>

                    </div>
                )
            }
            {
                (pageContext.value.progress <= 25 &&  pageContext.value.progress > 20) &&
                (
                    <>
                        <div
                            className="bg-lime-400 p-0.5 text-center  font-medium leading-none "
                            style={{ width: "20%" }}>

                        </div>
                        <div
                            className=" bg-cyan-500 p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                            style={{ width: "5%" }}>

                        </div>
                    </>
                )
            }
            {
                (pageContext.value.progress > 25 && pageContext.value.progress <= 45) &&
                (
                    <>
                        <div
                            className="bg-lime-400 p-0.5 text-center  font-medium leading-none "
                            style={{ width: "20%" }}>

                        </div>
                        <div
                            className=" bg-cyan-500 p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                            style={{ width: "5%" }}>

                        </div>

                        <div
                            className=" bg-lime-400 p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                            style={{ width: "20%" }}>

                        </div>
                    </>
                )
            }

            {
                (pageContext.value.progress > 45 && pageContext.value.progress <= 50) &&
                (
                    <>
                        <div
                            className="bg-lime-400 p-0.5 text-center  font-medium leading-none "
                            style={{ width: "20%" }}>

                        </div>
                        <div
                            className=" bg-cyan-500 p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                            style={{ width: "5%" }}>

                        </div>
                        <div
                            className=" bg-cyan-500 p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                            style={{ width: "5%" }}>

                        </div>
                    </>
                )
            }

            {
                (pageContext.value.progress > 50 && pageContext.value.progress <= 70) &&
                (
                    <>
                        <div
                            className="bg-lime-400 p-0.5 text-center  font-medium leading-none "
                            style={{ width: "20%" }}>

                        </div>
                        <div
                            className=" bg-cyan-500 p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                            style={{ width: "5%" }}>

                        </div>
                        <div
                            className=" bg-cyan-500 p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                            style={{ width: "5%" }}>

                        </div>
                        <div
                            className=" bg-lime-400 p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                            style={{ width: "20%" }}>

                        </div>
                    </>
                )
            }
            {
                (pageContext.value.progress > 70) &&
                (
                    <>
                        <div
                            className="bg-lime-400 p-0.5 text-center  font-medium leading-none "
                            style={{ width: "20%" }}>

                        </div>
                        <div
                            className=" bg-cyan-500 p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                            style={{ width: "5%" }}>

                        </div>
                        <div
                            className=" bg-cyan-500 p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                            style={{ width: "5%" }}>

                        </div>
                        <div
                            className=" bg-lime-400 p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                            style={{ width: "20%" }}>

                        </div>
                        <div
                            className=" bg-cyan-500 p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                            style={{ width: "5%" }}>

                        </div>
                    </>
                )
            }
            {
                (pageContext.value.progress > 75) &&
                (
                    <>
                        <div
                            className="bg-lime-400 p-0.5 text-center  font-medium leading-none "
                            style={{ width: "20%" }}>

                        </div>
                        <div
                            className=" bg-cyan-500 p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                            style={{ width: "5%" }}>

                        </div>
                        <div
                            className=" bg-cyan-500 p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                            style={{ width: "5%" }}>

                        </div>
                        <div
                            className=" bg-lime-400 p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                            style={{ width: "20%" }}>

                        </div>
                        <div
                            className=" bg-cyan-500 p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                            style={{ width: "5%" }}>

                        </div>
                        <div
                            className=" bg-purple-600 p-0.5 text-center text-xs font-medium leading-none text-primary-100 rounded"
                            style={{ width: "25%" }}>

                        </div>
                    </>
                )
            }
        </div>
    );
}

export default ContentDidacticProgressBar;