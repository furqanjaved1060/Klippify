import campaignLogo from "@assets/BrandPastCampaignsLogo.png"
import leo from "@assets/leo.png"
import marilyn from "@assets/marilyn.png"
import wilson from "@assets/wilson.png"
import kadin from "@assets/kadin.png"
import alena from "@assets/alena.png"
import kaiya from "@assets/kaiya.png"
import BrPrPgCreatorRatingsListItem from "./BrPrPgCreatorRatingsListItem"


type CreatorRatingsArrayObj = {
    avatar: string;
    creatorName: string;
    creatorPosition: string;
    campaignName: string;
    campaignLogo: string;
    campaignRating: string;
}

const creatorRatingsArray: CreatorRatingsArrayObj[] = [
    {
        avatar: leo,
        creatorName: "Leo Rosser",
        creatorPosition: "Content creator",
        campaignName: "Holiday Promo",
        campaignLogo: campaignLogo,
        campaignRating: "4.5",
    },
    {
        avatar: marilyn,
        creatorName: "Marilyn Carder",
        creatorPosition: "Content creator",
        campaignName: "Holiday Promo",
        campaignLogo: campaignLogo,
        campaignRating: "4.5",
    },
    {
        avatar: wilson,
        creatorName: "Wilson Culhane",
        creatorPosition: "Content creator",
        campaignName: "Holiday Promo",
        campaignLogo: campaignLogo,
        campaignRating: "4.5",
    },
    {
        avatar: kadin,
        creatorName: "Alena Geidt",
        creatorPosition: "Content creator",
        campaignName: "Holiday Promo",
        campaignLogo: campaignLogo,
        campaignRating: "4.5",
    },
    {
        avatar: alena,
        creatorName: "Kadin Donin",
        creatorPosition: "Content creator",
        campaignName: "Holiday Promo",
        campaignLogo: campaignLogo,
        campaignRating: "4.5",
    },
    {
        avatar: kaiya,
        creatorName: "Kaiya Kalzoni",
        creatorPosition: "Content creator",
        campaignName: "Holiday Promo",
        campaignLogo: campaignLogo,
        campaignRating: "4.5",
    },
]



const BrandProfileCreatorRatingsSection = () => {
    return (

        <section className="space-y-3">

            <div className="space-y-2">
                <h2 className='text-lg font-semibold leading-none'>Creator Ratings</h2>
                <p className="text-xxs font-normal text-[#33333380]">Brands rated by creators after campaign completion</p>
            </div>

            <ul className="grid grid-cols-1 xs:grid-cols-[repeat(auto-fit,minmax(240px,max-content))] gap-2">

                {creatorRatingsArray.map((curCreatorRating, index) => {
                    return (
                        <BrPrPgCreatorRatingsListItem
                        key={index}
                        curCreatorRating={curCreatorRating}/>
                    )
                })}
                
            </ul>

        </section>
    )
}

export default BrandProfileCreatorRatingsSection;