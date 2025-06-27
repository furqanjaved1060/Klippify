
import FormFileUploadDragDropField from "@components/Form/FormFileUploadDragDropField";

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

type ContentUploadSectionProps = {
    handleInputChange: (name:string, value:string | File) => void;
    formErrors: FormErrors;
}

const ContentUploadSection: React.FC<ContentUploadSectionProps> = ({formErrors, handleInputChange}) => {


    return (
        <section className="space-y-3">

            <h3 className="text-sm font-medium leading-none">Budget and Schedule</h3>

            <FormFileUploadDragDropField
            name={"uploadedContent"}
            onChange={handleInputChange}
            error={formErrors.uploadedContent}/>

        </section>
    )
}

export default ContentUploadSection;