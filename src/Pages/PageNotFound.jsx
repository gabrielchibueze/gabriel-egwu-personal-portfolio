import ButtonComponent from "../Components/buttonComponent/button";


export default function PageNotFound() {
    return (
        <div className="page-not-found">
            <h1>Page not found. Please check if the page you are looking for is correct.</h1>
            <ButtonComponent props={{
                        type: "button",
                        title: "Go to home page",
                        link: "/",
                        onClick:  null,
                        mode: "raised",
                        design: "raised"
                    }}/>
        </div>
    )
}