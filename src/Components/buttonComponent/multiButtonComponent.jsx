/* eslint-disable react/prop-types */
import ButtonComponent from "./button";
import "./button.css"
export default function MultiButtonComponent({ props }) {
    return <div className="post-cancel-btns">
        {
            props.buttonProperties.length > 0 && props.buttonProperties.map((button) => {
                return <div key={button.buttonTitle}>
                    <ButtonComponent props={{
                        type: `${button.buttonType}`,
                        title: `${button.buttonTitle}`,
                        link: button?.buttonLink || null,
                        onClick: button?.buttonFunction || null,
                        mode: button.mode,
                        design: button.design
                    }}
                    />
                </div>
            })
        }

    </div>
}

        {/* // <ButtonComponent props={{
        //     type: `${props.buttonType}`,
        //     link: props.buttonOneLink,
        //     title: `${props.buttonOneTitle}`,
        //     mode: props.mode,
        //     design: props.design
        // }} />

        // {props.buttonTwoTitle &&
        //     <ButtonComponent props={{
        //         type: `${props.buttonTwoType}`,
        //         title: `${props.buttonTwoTitle}`,
        //         onClick: props.buttonTwoFunctions
        //     }} />
        // }

        // {props.buttonThreeTitle &&
        //     <ButtonComponent props={{
        //         type: `${props.buttonThreeType}`,
        //         title: `${props.buttonThreeTitle}`,
        //         onClick: props.buttonThreeFunctions
        //     }} />
        // }
        // {props.buttonFourTitle &&
        //     <ButtonComponent props={{
        //         type: `${props.buttonFourType}`,
        //         title: `${props.buttonFourTitle}`,
        //         onClick: props.buttonFourFunctions
        //     }} />
        // } */}

