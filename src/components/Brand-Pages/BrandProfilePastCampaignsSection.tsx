import BrPrPgPastCampaignsListItem from "./BrPrPgPastCampaignsListItem";
import brandLogo from "@assets/BrandPastCampaignsLogo.png"
import creator1 from "@assets/creator1.png"


const BrandProfilePastCampaignsSection = () => {

    type pastCampaignsArrayObj = {
        brandLogo: string;
        campaignName: string;
        campaignDesc: string;
        performanceAnalytics: {title:string; value:string;}[];
        creators: {
            avatarArray: string[];
            rating: string;
        }

    }

    const pastCampaignsArray: pastCampaignsArrayObj[] = [
        {
            brandLogo: brandLogo,
            campaignName: "Holiday Promo",
            campaignDesc: "Promoting our new summer clothing line",
            performanceAnalytics: [{title: "Views", value: "500k"}, {title: "Clicks", value: "25k"}, {title: "Conversions",value: "1.5k"}, {title: "ROI",value: "300%"},],
            creators: {
                avatarArray: [creator1, creator1, creator1, creator1],
                rating: "4.5",
            }
        },
        {
            brandLogo: brandLogo,
            campaignName: "Holiday Promo",
            campaignDesc: "Promoting our new summer clothing line",
            performanceAnalytics: [{title: "Views", value: "500k"}, {title: "Clicks", value: "25k"}, {title: "Conversions",value: "1.5k"}, {title: "ROI",value: "300%"},],
            creators: {
                avatarArray: [creator1, creator1, creator1, creator1],
                rating: "4.5",
            }
        },
        {
            brandLogo: brandLogo,
            campaignName: "Holiday Promo",
            campaignDesc: "Promoting our new summer clothing line",
            performanceAnalytics: [{title: "Views", value: "500k"}, {title: "Clicks", value: "25k"}, {title: "Conversions",value: "1.5k"}, {title: "ROI",value: "300%"},],
            creators: {
                avatarArray: [creator1, creator1, creator1, creator1],
                rating: "4.5",
            }
        },
        {
            brandLogo: brandLogo,
            campaignName: "Holiday Promo",
            campaignDesc: "Promoting our new summer clothing line",
            performanceAnalytics: [{title: "Views", value: "500k"}, {title: "Clicks", value: "25k"}, {title: "Conversions",value: "1.5k"}, {title: "ROI",value: "300%"},],
            creators: {
                avatarArray: [creator1, creator1, creator1, creator1],
                rating: "4.5",
            }
        },
    ]

    return (

        <section className="space-y-3">

            <h2 className='text-lg font-semibold leading-none'>Past Campaigns</h2>

            <ul className="grid grid-cols-1 xs:grid-cols-[repeat(auto-fit,minmax(240px,max-content))] gap-2">
                
                {pastCampaignsArray.map((curCampaign, index) => {
                    return (
                        <BrPrPgPastCampaignsListItem key={index}
                        curCampaign={curCampaign}/>
                    )
                })}

            </ul>

        </section>

    )
}

export default BrandProfilePastCampaignsSection;