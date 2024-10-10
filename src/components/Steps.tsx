import OwnerInfo from "@/components/OwnerInfo";
import Drivers from "@/components/Drivers";
import DriversRecord from "@/components/DriversRecord";
import Vehicles from "@/components/Vehicles";
import AutoQuote from "@/components/AutoQuote";

export default function Steps(props: { stepNumber: number }) {
    switch (props.stepNumber) {
        case 0: return <OwnerInfo />
        case 1: return <Vehicles />
        case 2: return <Drivers />
        case 3: return <DriversRecord />
        case 4: return <AutoQuote />
    }
}
