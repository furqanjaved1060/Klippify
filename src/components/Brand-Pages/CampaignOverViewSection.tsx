import FormInputField from "@components/Auth-Pages/FormInputField";
import FormFileUploadField from "@components/Form/FormFileUploadField";
import FormRadioBtnsField from "@components/Form/FormRadioBtnsField";
import FormSelectField from "@components/Form/FormSelectField";
import fb from "@assets/facebook.png"
import ig from "@assets/insta.png"
import tk from "@assets/tiktok.png"
import sc from "@assets/snapchat.png"


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

type CampaignOverViewSectionProps = {
    handleInputChange: (name:string, value:string | File) => void;
    formValues: FormValues;
    formErrors: FormErrors
}

const CampaignOverViewSection: React.FC<CampaignOverViewSectionProps> = ({formValues, formErrors, handleInputChange}) => {


    return (

        <section className="space-y-3">

            <h3 className="text-sm font-medium leading-none">Campaign Overview</h3>

            <div className="p-3 border-1 border-[#D9D9D9] rounded-lg">

                <div className="w-full sm:w-8/12 grid sm:grid-cols-[repeat(2,minmax(0,400px))] gap-4">

                    <FormInputField
                    label={"Campaign Name"}
                    type={"text"}
                    name={"campaignName"}
                    placeholder={"Enter campaign name"}
                    value={formValues.campaignName}
                    onChange={handleInputChange}
                    inputClassName={"bg-[#F4F4F4] border-none"}
                    error={formErrors.campaignName} />

                    <FormInputField
                    label={"Campaign Details"}
                    type={"text"}
                    name={"campaignDetails"}
                    placeholder={"Enter campaign details"}
                    value={formValues.campaignDetails}
                    onChange={handleInputChange}
                    inputClassName={"bg-[#F4F4F4] border-none"}
                    error={formErrors.campaignDetails} />

                    <FormSelectField
                    label={"Audience Location Preference"}
                    name={"audienceLocationPreference"}
                    title={"Select your country"}
                    onClick={handleInputChange}
                    error={formErrors.audienceLocationPreference}
                    options={["pakistan", "iran", "china", "russia"]}
                     />

                    <FormSelectField
                    label={"Content Type"}
                    name={"contentType"}
                    title={"Select content type"}
                    onClick={handleInputChange}
                    error={formErrors.contentType}
                    options={["image", "video", "text",]}
                     />

                    <FormSelectField
                    label={"Language"}
                    name={"language"}
                    title={"Select Language"}
                    onClick={handleInputChange}
                    error={formErrors.language}
                    options={["english", "arabic", "french", "german"]}
                     />

                    <FormSelectField
                    label={"Platform"}
                    name={"platform"}
                    title={"Select platform"}
                    onClick={handleInputChange}
                    error={formErrors.platform}
                    options={["facebook", "instagam", "tiktok", "snapchat"]}
                    logos={[fb, ig, tk, sc]}
                     />

                    <FormFileUploadField
                    label={"Logo"}
                    name={"logo"}
                    title={"Upload"}
                    onChange={handleInputChange}
                    error={formErrors.logo}
                    btnStyle={"1"}/>

                    <FormRadioBtnsField
                    data={[
                        {label:"Automatic Acceptance", id: "automatic", value:"automatic"},
                        {label:"Manual Acceptance", id: "manual", value:"manual"},
                    ]}
                    name={"acceptanceCriteria"}
                    title={"Acceptance Criteria for Creators"}
                    onChange={handleInputChange}
                    error={formErrors.acceptanceCriteria}/>

                </div>

            </div>

        </section>
    )
}

export default CampaignOverViewSection;