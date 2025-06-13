import { create } from "zustand";


type CampaignFilter = "active" | "waitlist" | "past" | "new" | null;

type SetCampaignFilter = (filterType: CampaignFilter) => void;

type UseCampaignFilter = {
    campaignFilter: CampaignFilter;
    setCampaignFilter: SetCampaignFilter;
}

const useCampaignFilter = create<UseCampaignFilter>((set) => ({
    campaignFilter: null,
    setCampaignFilter: (filterType) => {
        set((state) => ({
            ...state,
            campaignFilter: filterType
        }))
    }
}))

export default useCampaignFilter;