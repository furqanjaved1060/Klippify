import { useState } from "react"


const FAQList = () => {

    const FAQs = [
        {
            ques: "What is this platform all about?",
            ans: "We offer a 30-day return policy. Items must be in original condition."
        },
        {
            ques: "What is this platform all about?",
            ans: "We offer a 30-day return policy. Items must be in original condition."
        },
        {
            ques: "What is this platform all about?",
            ans: "We offer a 30-day return policy. Items must be in original condition."
        },
        {
            ques: "What is this platform all about?",
            ans: "We offer a 30-day return policy. Items must be in original condition."
        },
        {
            ques: "What is this platform all about?",
            ans: "We offer a 30-day return policy. Items must be in original condition."
        },
    ]



    return (
        <ul className="md:w-[55%] space-y-1.5">

            {FAQs.map((curFAQ, index) => {

                const {ques, ans} = curFAQ;

                const [ansOpen, setAnsOpen] = useState<Boolean>(false);

                return (
                    <li key={index}>
                        <details className="p-3 font-normal text-[#000C21] bg-[#0000000D] rounded-lg">
                            <summary 
                            className={`list-none text-xs md:text-[13px] ${ansOpen ? 'after:content-["-"]' : 'after:content-["+"]'} flex items-center justify-between cursor-pointer`}
                            onClick={() => setAnsOpen(!ansOpen)}>{ques}</summary>
                            <p className="pt-3 text-[11px] md:text-[12px]">{ans}</p>
                        </details>
                    </li>
                )
            })}

        </ul>
    )
}

export default FAQList;