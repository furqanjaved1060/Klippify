import BudgetAndSheduleSection from "@components/Brand-Pages/BudgetAndSheduleSection";
import CampaignOverViewSection from "@components/Brand-Pages/CampaignOverViewSection";
import ContentUploadSection from "@components/Brand-Pages/ContentUploadSection";
import ManageCreatorsSection from "@components/Brand-Pages/ManageCreatorsSection";
import useBrandCampaigns from "@store/brandCampaigns";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as z from 'zod'



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
    budget?: string;
    clicks?: string;
    revenuePerView?: string;
    startDate?: string;
    endDate?: string;
    uploadedContent?: string;
}


const CreateCampaign = () => {

    const createCampaign = useBrandCampaigns(state => state.createCampaign);

    const navigate = useNavigate();
    const {username} = useParams();

    const [formValues, setFormValues] = useState<FormValues>({
        campaignName: "",
        campaignDetails: "",
        audienceLocationPreference: "",
        contentType: "",
        language: "",
        platform: "",
        logo: null,
        acceptanceCriteria: "automatic",
        budget: "",
        clicks: "",
        revenuePerView: "",
        startDate: "",
        endDate: "",
        uploadedContent: null,
    })

    const [formErrors, setFormErrors] = useState<FormErrors>({});

    const handleInputChange = (name:string, value:string | File):void => {
        setFormValues({
            ...formValues,
            [name]:value
        })
    }

    console.log(formValues)

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault();
        setFormErrors({});

        try {
            // Validation
            const result = validationSchema.safeParse(formValues);
            if (!result.success) {
                const validationErrors: FormErrors = {};
                result.error.errors.forEach((err) => {
                    validationErrors[err.path[0] as keyof FormErrors]=err.message;
                });
                throw validationErrors;
            }

            // Campaign Creation

            createCampaign({
                campaignName: formValues.campaignName,
                views: "0",
                budgetSpent: "",
                status: "new",
                clicks: "",
                reward: "",
                campaignDetails: formValues.campaignDetails,
                audienceLocationPreference: formValues.audienceLocationPreference,
                contentType: formValues.contentType,
                language: formValues.language,
                platform: formValues.platform,
                logo: formValues.logo,
                acceptanceCriteria: formValues.acceptanceCriteria,
                budget: formValues.budget,
                revenuePerView: formValues.revenuePerView,
                startDate: formValues.startDate,
                endDate: formValues.endDate,
                uploadedContent: formValues.uploadedContent,
            })

            navigate(`/${username}/campaigns`)

        } catch (err) {
            setFormErrors(err as FormErrors);
        }
    }

    const validationSchema = z.default.object({
        campaignName: z.default.string().nonempty().min(6).max(24),
        campaignDetails: z.default.string().nonempty().min(6).max(64),
        audienceLocationPreference: z.default.string().nonempty(),
        contentType: z.default.string().nonempty(),
        language: z.default.string().nonempty(),
        platform: z.default.string().nonempty(),
        logo: z.default.instanceof(File, { message: "Logo must be an image file" }).or(z.null()).refine((file) => file !== null, "Logo is required"),
        budget: z.default.string().nonempty().min(2).max(5),
        clicks: z.default.string().nonempty().min(2).max(7),
        revenuePerView: z.default.string().nonempty().min(2).max(4),
        startDate: z.default.string().nonempty(),
        endDate: z.default.string().nonempty(),
    })


    const [activeBtn, setActiveBtn] = useState<string>('sales');

    return (
        <div className="flex-grow p-3 bg-white rounded-lg">

            <section className='space-y-4'>

                <h2 className='text-lg font-semibold leading-none'>Create Campaign</h2>

                <form onSubmit={handleFormSubmit} className="space-y-4">

                    <CampaignOverViewSection 
                    formValues={formValues}
                    formErrors={formErrors}
                    handleInputChange={handleInputChange}/>

                    <section className="p-3 border-1 border-[#D9D9D9] rounded-lg flex flex-col xs:flex-row gap-4">

                        <button type="button" 
                        className={`w-full xs:w-4/12 p-3 text-xxs border-1 border-[#D9D9D9] rounded-lg leading-none cursor-pointer ${activeBtn==="sales" && 'text-[#007EFF] bg-[#007EFF1A] border-none'}`} 
                        onClick={() => setActiveBtn("sales")}>Sales</button>
                        
                        <button type="button" 
                        className={`w-full xs:w-4/12 p-3 text-xxs border-1 border-[#D9D9D9] rounded-lg leading-none cursor-pointer ${activeBtn==="manageCreators" && 'text-[#007EFF] bg-[#007EFF1A] border-none'}`} 
                        onClick={() => setActiveBtn("manageCreators")}>Manage Creators</button>
                        
                        <button type="button" 
                        className={`w-full xs:w-4/12 p-3 text-xxs border-1 border-[#D9D9D9] rounded-lg leading-none cursor-pointer ${activeBtn==="contentUpload" && 'text-[#007EFF] bg-[#007EFF1A] border-none'}`} 
                        onClick={() => setActiveBtn("contentUpload")}>Content Upload</button>

                    </section>

                    {activeBtn==="sales" &&
                    <BudgetAndSheduleSection
                    formValues={formValues}
                    formErrors={formErrors}
                    handleInputChange={handleInputChange}/>}

                    {activeBtn==="manageCreators" &&
                    <ManageCreatorsSection />}

                    {activeBtn==="contentUpload" &&
                    <ContentUploadSection
                    formErrors={formErrors}
                    handleInputChange={handleInputChange} />}

                    {activeBtn==="sales" &&
                    <button type="submit" className="h-8.5 px-3 text-xxs font-medium text-white bg-gradient-to-r from-[#333EFF] to-[#5BCAFF] rounded-md leading-none cursor-pointer flex items-center">Create Campaign</button>}
                </form>
                
            </section>

        </div>
    )
}

export default CreateCampaign;