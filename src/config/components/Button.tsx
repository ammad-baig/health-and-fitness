import { Button } from "@mui/material"

const CustomButton = (props: any) => {
    const { btnClasses, btnType, btnVariant, btnSx, btnText, btnColor } = props
    return (
        <div>
            <Button className={btnClasses} type={btnType} color={btnColor} variant={btnVariant} sx={btnSx}>
                {btnText}
            </Button>
        </div>
    )
}

export default CustomButton