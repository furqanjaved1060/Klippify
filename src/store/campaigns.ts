import { create } from "zustand";

type CampaignObj = {
    campaignName: string;
    views: string;
    budgetSpent: string;
    status: "active" | "past" | "waitlist" | "new";
    clicks: string;
    reward: string;
};

type Campaigns = CampaignObj[];

type SetDetailedCampaign = (detailedCampaign: CampaignObj) => void;

type UseCampaigns = {
    campaigns: Campaigns;
    detailedCampaign: CampaignObj;
    setDetailedCampaign: SetDetailedCampaign;
};

const useCampaigns = create<UseCampaigns>((set) => ({
    campaigns: [
        
        {
            campaignName: 'Influencer Takeover',
            views: '2578',
            budgetSpent: '$2458',
            status: 'active',
            clicks: "2k",
            reward: "$10.00",
        },
        {
            campaignName: 'Ant/ Rippy Club Clips',
            views: '6550',
            budgetSpent: '$4000',
            status: 'active',
            clicks: "1k",
            reward: "$5.00",
        },
        {
            campaignName: 'Mufi Campaign',
            views: '4657',
            budgetSpent: '$3578',
            status: 'active',
            clicks: "3k",
            reward: "$15.00",
        },
        {
            campaignName: 'Angry Birds',
            views: '8650',
            budgetSpent: '$7567',
            status: 'active',
            clicks: "5k",
            reward: "$25.00",
        },
        {
            campaignName: 'Influencer Takeover',
            views: '2578',
            budgetSpent: '$2458',
            status: 'active',
            clicks: "2k",
            reward: "$10.00",
        },
        {
            campaignName: 'Ant/ Rippy Club Clips',
            views: '6550',
            budgetSpent: '$4000',
            status: 'active',
            clicks: "1k",
            reward: "$5.00",
        },
        {
            campaignName: 'Mufi Campaign',
            views: '4657',
            budgetSpent: '$3578',
            status: 'active',
            clicks: "3k",
            reward: "$15.00",
        },
        {
            campaignName: 'Angry Birds',
            views: '8650',
            budgetSpent: '$7567',
            status: 'active',
            clicks: "5k",
            reward: "$25.00",
        },
        {
            campaignName: 'Audience Test',
            views: '6550',
            budgetSpent: '$4000',
            status: 'past',
            clicks: "1k",
            reward: "$5.00",
        },
        {
            campaignName: 'Demographic Test',
            views: '2578',
            budgetSpent: '$2458',
            status: 'past',
            clicks: "2k",
            reward: "$10.00",
        },
        {
            campaignName: 'Location Test',
            views: '4657',
            budgetSpent: '$3578',
            status: 'past',
            clicks: "3k",
            reward: "$15.00",
        },
        {
            campaignName: 'Demographic Test',
            views: '2578',
            budgetSpent: '$2458',
            status: 'past',
            clicks: "2k",
            reward: "$10.00",
        },
        {
            campaignName: 'Location Test',
            views: '4657',
            budgetSpent: '$3578',
            status: 'past',
            clicks: "3k",
            reward: "$15.00",
        },
        {
            campaignName: 'Influencer Takeover',
            views: '2578',
            budgetSpent: '$2458',
            status: 'waitlist',
            clicks: "2k",
            reward: "$10.00",
        },
        {
            campaignName: 'Ant/ Rippy Club Clips',
            views: '6550',
            budgetSpent: '$4000',
            status: 'waitlist',
            clicks: "1k",
            reward: "$5.00",
        },
        {
            campaignName: 'Demographic Test',
            views: '2578',
            budgetSpent: '$2458',
            status: 'waitlist',
            clicks: "2k",
            reward: "$10.00",
        },
        {
            campaignName: 'Location Test',
            views: '4657',
            budgetSpent: '$3578',
            status: 'waitlist',
            clicks: "3k",
            reward: "$15.00",
        },
        {
            campaignName: 'Influencer Takeover',
            views: '2578',
            budgetSpent: '$2458',
            status: 'new',
            clicks: "2k",
            reward: "$10.00",
        },
        {
            campaignName: 'Ant/ Rippy Club Clips',
            views: '9578',
            budgetSpent: '$5000',
            status: 'new',
            clicks: "1k",
            reward: "$5.00",
        },
        {
            campaignName: 'Location Test',
            views: '4657',
            budgetSpent: '$3578',
            status: 'new',
            clicks: "3k",
            reward: "$15.00",
        },
    ],

    detailedCampaign: {
        campaignName: "",
        views: "",
        budgetSpent: "",
        status: "new",
        clicks: "",
        reward: "",
    },

    setDetailedCampaign: (curCampaign) => {
        set((state) => ({
            ...state,
            detailedCampaign: curCampaign,
        }));
    },
}));

export default useCampaigns;