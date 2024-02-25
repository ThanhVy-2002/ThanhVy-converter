import { useMemo, useState } from "react"
import { ArrowSwapIcon } from "../../assets/ArrowSwapIcon"
import { Button } from "../Button/Button"
import { Input } from "../Input/Input"
import { dataForm } from "./dataForm"

export const Currency = () => {
    const [buttonColor, setButtonColor] = useState('#0071eb')
    const [clicked, setClicked] = useState(false)
    const [selectedCurrencyForm, setSelectedCurrencyForm] = useState('$');
    const [selectedCurrencyTo, setSelectedCurrencyTo] = useState('$');
    const [error, setIsError] = useState(false)

    const handleChangeColorButton = () => {
        setButtonColor(clicked ? '#0047AB' : '#0071eb')
        setClicked(!clicked)
    }

    const buttonClass = useMemo(() => {
        return buttonColor === '#0071eb' ? 'bg-[#0071eb] hover:bg-[#0096FF]' : 'bg-[#0047AB]'
    }, [buttonColor])


    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        const validInput = /^\d*\.?\d*$/.test(inputValue); // check numeric input
        setIsError(!validInput)
    }

    const handleCurrencyChange = (selectedValue: string, inputType: string) => {
        if (inputType === 'form') {
            setSelectedCurrencyForm(selectedValue);
        } else if (inputType === 'to') {
            setSelectedCurrencyTo(selectedValue);
        }
    };

    const swapOptions = () => {
        const temp = selectedCurrencyForm;
        setSelectedCurrencyForm(selectedCurrencyTo);
        setSelectedCurrencyTo(temp);
    };

    const getCurrencyIcon = (currency: string) => ({
        USD: '$',
        CAD: '$',
        AUD: '$',
        EUR: '€',
        GBP: '£',
        JPY: '¥',
        INR: '₹',
        NZD: '$',
        HKD: '$',
        CNY: '¥',
        VND: 'đ'
    }[currency] || '');

    return (
        <div className="">
            <div className="flex flex-row space-x-[30px] items-center justify-items-center ml-[50px]">
                <Input
                    label="Amount"
                    className="w-[300px]"
                    onChange={handleAmountChange}
                    icon={getCurrencyIcon(selectedCurrencyForm)}
                    error = {error}
                />
                <Input
                    label="Form"
                    select
                    className="w-[300px]"
                    options={dataForm}
                    value={selectedCurrencyForm}
                    onChange={(e: any) => handleCurrencyChange(e.target.value, 'form')}
                />
                <Button
                    icon={<ArrowSwapIcon />}
                    className="w-[50px] h-[50px] rounded-full border border-solid border-[DDDDDD] mt-6"
                    onClick={swapOptions}
                />
                <Input
                    label="To"
                    select
                    className="w-[300px]"
                    options={dataForm}
                    value={selectedCurrencyTo}
                    onChange={(e: any) => handleCurrencyChange(e.target.value, 'to')}
                />
            </div>
            <div className="grid justify-items-end mr-[50px]">
                <Button
                    label='Convert'
                    onClick={handleChangeColorButton}
                    className={`w-[106px] h-[48px] text-center outline-offset-4 text-[16px] font-['Inter, sans-serif'] rounded-[8px] border-[#0071eb] text-white font-semibold duration-[0.3s] leading-[24px] ${buttonClass}`}
                />
            </div>
        </div>

    )
}