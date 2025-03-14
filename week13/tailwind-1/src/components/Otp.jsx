import { useState } from "react";
import { useRef } from "react"
import { Button } from "./Button";

export function Otp() {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();


    const [disabled, setDisabled] = useState(true)

    return <div className="flex justify-center">
        <SubOtpBox reference={ref1} 
        onDone={() => { ref2.current.focus() }} 
        goBack={() => { ref1.current.focus() }} />
        <SubOtpBox reference={ref2} 
        onDone={() => { ref3.current.focus() }} 
        goBack={() => { ref2.current.focus() }} />
        <SubOtpBox reference={ref3} 
        onDone={() => { ref4.current.focus() }}
        goBack={() => { ref3.current.focus() }} />
        <SubOtpBox reference={ref4} 
        onDone={() => { ref5.current.focus() }}
        goBack={() => { ref4.current.focus() }} />
        <SubOtpBox reference={ref5} 
        onDone={() => { ref6.current.focus() }}
        goBack={() => { ref5.current.focus() }} />
        <SubOtpBox reference={ref6} 
        onDone={() => { setDisabled(false) }}/>

        <br />

        <Button disabled= {disabled}>Sign Up</Button>
    </div>
}

function SubOtpBox({
    reference, 
    onDone,
    goBack,
    inputBoxVal,
    setInputBoxVal
}) {

    const [inputBoxVal, setInputBoxVal] = useState("")
    return <div>
        <input value={inputBoxVal} ref={reference} onKeyUp={(e) => {
            if(e.key == "backspace") {
                goBack()
            }
        }} onChange={(e) => {
            const val = e.target.value;

            if(val == "0" ||  val == "1" || val == "2" || val == "3" || val == "4" || val == "5" || val == "6" || val == "7" || val == "8" || val == "9"
            ) {
                setInputBoxVal(val);
                onDone();
            } else {
                // do nothing 
            }
            // if the user wrote an alphabet=>rejected
            // if the user wrote a number=>selected!
            // onDone()
        }}
        type="text" className="m-1 w-[40px] h-[50px] rounded-xl bg-blue-500 outline-none px-4 text-white"></input>
    </div>
}