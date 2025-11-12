import FormInputField from "@components/Auth-Pages/FormInputField";


type FormValues = {
    campaignName: string;
    campaignDetails: string;
    audienceLocationPreference: string;
    contentType: string;
    language: string;
    platform: string;
    logo: File | null;
    acceptanceCriteria: "automatic" | "manual";
    budget: string;
    clicks: string;
    revenuePerView: string;
    startDate: string;
    endDate: string;
    uploadedContent: File | null;
}

type FormErrors = {
    campaignName?: string;
    campaignDetails?: string;
    audienceLocationPreference?: string;
    contentType?: string;
    language?: string;
    platform?: string;
    logo?: string;
    acceptanceCriteria?: string;
    budget?: string;
    clicks?: string;
    revenuePerView?: string;
    startDate?: string;
    endDate?: string;
    uploadedContent?: string;
}

type BudgetAndSheduleSectionProps = {
    handleInputChange: (name:string, value:string | File) => void;
    formValues: FormValues;
    formErrors: FormErrors
}

const BudgetAndSheduleSection: React.FC<BudgetAndSheduleSectionProps> = ({formValues, formErrors, handleInputChange}) => {


    return (
        <section className="space-y-3">

            <h3 className="text-sm font-medium leading-none">Budget and Schedule</h3>

            <div className="p-3 border-1 border-[#D9D9D9] rounded-lg">

                <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">

                    <FormInputField
                    label={"Budget"}
                    type={"text"}
                    name={"budget"}
                    placeholder={"Enter your budget"}
                    value={formValues.budget}
                    onChange={handleInputChange}
                    inputClassName={"bg-[#F4F4F4] border-none"}
                    error={formErrors.budget}
                    numbersOnly={true} />

                    <FormInputField
                    label={"Clicks/Views"}
                    type={"text"}
                    name={"clicks"}
                    placeholder={"Enter Clicks"}
                    value={formValues.clicks}
                    onChange={handleInputChange}
                    inputClassName={"bg-[#F4F4F4] border-none"}
                    error={formErrors.clicks}
                    numbersOnly={true} />

                    <FormInputField
                    label={"Revenue On Click/View"}
                    type={"text"}
                    name={"revenuePerView"}
                    placeholder={"Enter revenue per view"}
                    value={formValues.revenuePerView}
                    onChange={handleInputChange}
                    inputClassName={"bg-[#F4F4F4] border-none"}
                    error={formErrors.revenuePerView}
                    numbersOnly={true} />

                    <FormInputField
                    label={"Start Date"}
                    type={"date"}
                    name={"startDate"}
                    placeholder={"Enter start date"}
                    value={formValues.startDate}
                    onChange={handleInputChange}
                    inputClassName={"bg-[#F4F4F4] border-none text-[#33333380]"}
                    error={formErrors.startDate}
                    numbersOnly={true} />

                    <FormInputField
                    label={"End Date"}
                    type={"date"}
                    name={"endDate"}
                    placeholder={"Enter end date"}
                    value={formValues.endDate}
                    onChange={handleInputChange}
                    inputClassName={"bg-[#F4F4F4] border-none text-[#33333380]"}
                    error={formErrors.endDate}
                    numbersOnly={true} />

                </div>

            </div>

        </section>
    )
}

export default BudgetAndSheduleSection;