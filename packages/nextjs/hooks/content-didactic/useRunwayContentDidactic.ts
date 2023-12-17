import { useContext } from "react";
import { ContentDidacticByIdContext } from "~~/contexts/ContentDidacticById";

export default function useRunwayContentDidactic() {
    const {value } = useContext(ContentDidacticByIdContext)
    const { contentDidactic } = value

    return {
        contentDidactic
    }
}