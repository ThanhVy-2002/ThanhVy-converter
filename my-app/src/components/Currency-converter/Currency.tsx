
import { useMemo, useState } from "react"
import { ArrowSwapIcon } from "../../assets/ArrowSwapIcon"
import { Button } from "../Button/Button"
import { Input } from "../Input/Input"
import { dataForm } from "./dataForm"

export const Currency = () => {
    const [buttonColor, setButtonColor] = useState('#0071eb')
    const [clicked, setClicked] = useState(false)

    const [selectedCurrency, setSelectedCurrency] = useState('$')
    const [fromValue, setFromValue] = useState('')
    const [toValue, setToValue] = useState('')

    const handleChangeColorButton = () => {
        setButtonColor(clicked ? '#0047AB' : '#0071eb')
        setClicked(!clicked)
    }

    const buttonClass = useMemo(() => {
        return buttonColor === '#0071eb' ? 'bg-[#0071eb] hover:bg-[#0096FF]' : 'bg-[#0047AB]'
    }, [buttonColor])

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    }

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    }

    const handleCurrencyChange = (selectedValue: string) => {
        setSelectedCurrency(selectedValue)
    }
    
    const handleSwapValues = () => {
        const temp = fromValue
        setFromValue(toValue)
        setToValue(temp)
    }
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
                    type="number"
                    className="w-[300px]"
                    onChange={handleAmountChange}
                    icon={getCurrencyIcon(selectedCurrency)}
                />
                <Input
                    label="Form"
                    select
                    className="w-[300px]"
                    options={dataForm}
                    onChange={(e: any) => handleCurrencyChange(e.target.value)}
                />
                <Button
                    icon={<ArrowSwapIcon />}
                    className="w-[50px] h-[50px] rounded-full border border-solid border-[DDDDDD] mt-6"
                    onClick={handleSwapValues}
                />
                <Input
                    label="To"
                    select
                    className="w-[300px]"
                    onChange={handleOnChange}
                    options={dataForm}
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